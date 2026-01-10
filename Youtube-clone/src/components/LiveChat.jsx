import React, { useEffect } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";

const LiveChat = () => {
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          id: `${Math.random()}-${Date.now()}`,
          name: "SagarU",
          message: "Hey! This is a live chat message",
        })
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-gray-900 rounded-2xl w-full h-[500px] p-2 text-amber-50">
      <h1 className="text-xl font-semibold p-2">Live Chat</h1>
      <div>
        {chatMessages &&
          chatMessages.map((chat) => (
            <Chat key={chat.id} name={chat.name} message={chat.message} />
          ))}
      </div>
    </div>
  );
};

export default LiveChat;
