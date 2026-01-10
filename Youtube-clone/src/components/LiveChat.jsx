import React, { useEffect, useRef, useState } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { useRandomName } from "../../hooks/useRandomName";
import { useRandomMessage } from "../../hooks/useRandomMessage";
import { BsFillSendFill } from "react-icons/bs";

const LiveChat = () => {
  const [input, setInput] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  const { generateRandomMessage } = useRandomMessage();
  const { generateRandomName } = useRandomName();
  const scrollRef = useRef(null);

  const handleChatSend = () => {
    dispatch(
      addMessage({
        id: `${Math.random()}-${Date.now()}`,
        name: "Sagar106",
        message: input,
      })
    );

    setInput("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          id: `${Math.random()}-${Date.now()}`,
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [chatMessages]);

  return (
    <div className="bg-gray-900 rounded-2xl w-full h-[500px] p-2 text-amber-50 flex flex-col">
      <h1 className="text-xl font-semibold p-2">Live Chat</h1>
      <div
        className="flex-1 overflow-y-scroll flex flex-col-reverse px-2"
        ref={scrollRef}
      >
        {chatMessages &&
          chatMessages.map((chat) => (
            <Chat key={chat.id} name={chat.name} message={chat.message} />
          ))}
      </div>
      <div className="m-2 flex">
        <input
          type="text"
          className="w-full p-3 mt-4 bg-gray-50 rounded-md text-gray-900"
          placeholder="Add your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="py-3 px-3 mt-4 mx-2 rounded-full bg-gray-800 hover:bg-blue-300 cursor-pointer"
          onClick={handleChatSend}
        >
          <BsFillSendFill />
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
