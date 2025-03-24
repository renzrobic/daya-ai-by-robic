import Chat from "../../models/chat.js";
import UserChats from "../../models/userChats.js";
import { checkAndIncrementPrompt } from "./promptController.js";

export const createChat = async (req, res) => {
  const { userId } = req.auth;
  const { text } = req.body;

  try {
    const newChat = new Chat({
      userId,
      history: [{ role: "user", parts: [{ text }] }],
    });
    const savedChat = await newChat.save();

    // Update user chats collection
    const userChats = await UserChats.findOne({ userId });
    if (!userChats) {
      const newUserChats = new UserChats({
        userId,
        chats: [{ _id: savedChat._id, title: text.substring(0, 40) }],
      });
      await newUserChats.save();
    } else {
      await UserChats.updateOne(
        { userId },
        {
          $push: {
            chats: { _id: savedChat._id, title: text.substring(0, 40) },
          },
        }
      );
    }

    res.status(201).send(savedChat._id);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating chat!");
  }
};

export const getUserChats = async (req, res) => {
  const { userId } = req.auth;
  try {
    const userChats = await UserChats.findOne({ userId });
    if (!userChats || !userChats.chats.length) {
      return res.status(200).send({ message: "No chats yet" });
    }
    res.status(200).send(userChats.chats);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching userchats!");
  }
};

export const getChat = async (req, res) => {
  const { userId } = req.auth;
  try {
    const chat = await Chat.findOne({ _id: req.params.id, userId });
    if (!chat) {
      return res.status(404).send("Chat not found!");
    }
    res.status(200).send(chat);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching chat!");
  }
};

export const updateChat = async (req, res) => {
  const { userId } = req.auth;
  const { title, question, answer, img } = req.body;
  try {
    if (title) {
      // Rename chat
      await UserChats.updateOne(
        { userId, "chats._id": req.params.id },
        { $set: { "chats.$.title": title } }
      );
      return res.status(200).send("Chat renamed successfully!");
    }
    if (question) {
      try {
        await checkAndIncrementPrompt(userId);
      } catch (err) {
        return res.status(429).json({ error: err.message });
      }
    }
    // Add new messages to the chat history
    const newItems = [
      ...(question
        ? [{ role: "user", parts: [{ text: question }], ...(img && { img }) }]
        : []),
      { role: "model", parts: [{ text: answer }] },
    ];
    const updatedChat = await Chat.updateOne(
      { _id: req.params.id, userId },
      { $push: { history: { $each: newItems } } }
    );
    res.status(200).send(updatedChat);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating chat!");
  }
};

export const deleteChat = async (req, res) => {
  const { userId } = req.auth;
  const chatId = req.params.id;
  try {
    await Chat.deleteOne({ _id: chatId, userId });
    await UserChats.updateOne(
      { userId },
      { $pull: { chats: { _id: chatId } } }
    );
    res.status(200).send("Chat deleted successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting chat!");
  }
};
