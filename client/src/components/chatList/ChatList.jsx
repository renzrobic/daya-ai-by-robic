import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = ({ userId }) => {
  const queryClient = useQueryClient();
  const [openDropdown, setOpenDropdown] = useState(null); // Track which chat dropdown is open
  const [renameId, setRenameId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  // Fetch user chats
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats", userId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
    staleTime: 30000,
  });

  // Fetch remaining prompts using a key that includes the userId
  // Added refetchInterval so that the count updates more frequently
  const { data: promptData, isLoading: promptLoading } = useQuery({
    queryKey: ["promptsRemaining", userId],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/prompts/remaining`, {
        credentials: "include",
      }).then((res) => res.json()),
    staleTime: 0,
    refetchInterval: 5000, // refetch every 5 seconds
  });

  // Delete chat mutation
  const deleteChatMutation = useMutation({
    mutationFn: async (chatId) => {
      await fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        method: "DELETE",
        credentials: "include",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userChats", userId]);
      setOpenDropdown(null); // Close dropdown after deleting
    },
  });

  // Rename chat mutation
  const renameChatMutation = useMutation({
    mutationFn: async ({ chatId, title }) => {
      await fetch(`${import.meta.env.VITE_API_URL}/api/chats/${chatId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ title }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userChats", userId]);
      setRenameId(null); // Close rename input
      setOpenDropdown(null); // Close dropdown after renaming
    },
  });

  // Handle menu toggle
  const toggleDropdown = (chatId) => {
    setOpenDropdown(openDropdown === chatId ? null : chatId);
  };

  // Handle Rename Submit (Enter Key or Blur)
  const handleRenameSubmit = (chatId) => {
    if (
      newTitle.trim() &&
      newTitle !== data.find((c) => c._id === chatId)?.title
    ) {
      renameChatMutation.mutate({ chatId, title: newTitle.trim() });
    } else {
      setRenameId(null); // Close input if empty or unchanged
    }
  };

  return (
    <div className="chatList">
      {/* Display remaining prompts */}
      <span className="chats">
        {promptLoading
          ? "Loading..."
          : `Prompts left: ${promptData?.remaining || 0}`}
      </span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/about">Explore DAYA AI</Link>
      <Link to="/contact">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.message
          ? data.message
          : data?.map((chat) => (
              <div key={chat._id} className="chat-item">
                {renameId === chat._id ? (
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onBlur={() => handleRenameSubmit(chat._id)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleRenameSubmit(chat._id)
                    }
                    autoFocus
                  />
                ) : (
                  <Link to={`/dashboard/chats/${chat._id}`}>{chat.title}</Link>
                )}
                <div className="dropdown">
                  <button
                    className="menu-btn"
                    onClick={() => toggleDropdown(chat._id)}
                  >
                    <img src="/menu.png" alt="" />
                  </button>
                  {openDropdown === chat._id && (
                    <div className="dropdown-menu">
                      <button
                        onClick={() => {
                          setRenameId(chat._id);
                          setNewTitle(chat.title);
                          setOpenDropdown(null);
                        }}
                      >
                        <img src="/rename.png" alt="" />
                        <p>Rename</p>
                      </button>
                      <button
                        onClick={() => deleteChatMutation.mutate(chat._id)}
                      >
                        <img src="/delete.png" alt="" />
                        <p>Delete</p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
      </div>
      <hr />
      <div className="upgrade">
        <Link to="/pricing">
          <div className="container">
            <img src="/logo3.png" alt="" />
            <div className="texts">
              <span>Upgrade to DAYA AI Pro</span>
              <span>Get unlimited access to all features</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ChatList;
