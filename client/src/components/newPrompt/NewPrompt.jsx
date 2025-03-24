// NewPrompt.jsx
import { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";
import { IKImage } from "imagekitio-react";
import model from "../../lib/gemini";
import Markdown from "react-markdown";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const NewPrompt = ({ data }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [img, setImg] = useState({
    isLoading: false,
    error: "",
    dbData: {},
    aiData: {},
  });

  // Initialize the chat model with the loaded history.
  const chat = model.startChat({
    history: [
      ...(data?.history?.map(({ role, parts }) => ({
        role: role || "user", // Default to 'user' if role is missing
        parts: [{ text: parts[0]?.text || "" }],
      })) || [{ role: "user", parts: [{ text: "" }] }]),
    ],
    generationConfig: {
      // maxOutputTokens: 100,
    },
  });

  const endRef = useRef(null);
  const formRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data, question, answer, img.dbData]);

  const queryClient = useQueryClient();

  // Updated mutation function with error checking for 429 status.
  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/chats/${data._id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            question: question.length ? question : undefined,
            answer,
            img: img.dbData?.filePath || undefined,
          }),
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw {
          status: res.status,
          message: errorData.error || "Error updating chat",
        };
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: ["chat", data._id] })
        .then(() => {
          formRef.current.reset();
          setQuestion("");
          setAnswer("");
          setImg({
            isLoading: false,
            error: "",
            dbData: {},
            aiData: {},
          });
        });
    },
    onError: (err) => {
      // If daily prompt limit is reached, alert and redirect to pricing page.
      if (err.status === 429) {
        alert(
          "Your daily prompt limit has been reached. Please upgrade to the Standard or Pro version."
        );
        window.location.href = "http://localhost:5173/pricing";
      } else {
        console.log(err);
      }
    },
  });

  const add = async (text, isInitial) => {
    if (!isInitial) setQuestion(text);

    try {
      const result = await chat.sendMessageStream(
        Object.entries(img.aiData).length ? [img.aiData, text] : [text]
      );
      let accumulatedText = "";
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        console.log(chunkText);
        accumulatedText += chunkText;
        setAnswer(accumulatedText);
      }
      mutation.mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
    add(text, false);
  };

  useEffect(() => {
    if (data && !hasRun.current) {
      if (data.history && data.history.length === 1) {
        add(data.history[0].parts[0].text, true);
      }
      hasRun.current = true;
    }
  }, [data]);

  return (
    <>
      {img.isLoading && <div>Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}
      {question && <div className="message user">{question}</div>}
      {answer && (
        <div className="message">
          <Markdown>{answer}</Markdown>
        </div>
      )}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm" onSubmit={handleSubmit} ref={formRef}>
        <Upload setImg={setImg} />
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask Daya..." />
        <button>
          <img src="/arrow.svg" alt="send" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
