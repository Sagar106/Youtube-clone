import React from "react";
import Chat from "./Chat";

const LiveChat = () => {
  return (
    <div className="bg-gray-900 rounded-2xl w-full h-[500px] p-2 text-amber-50">
      <h1 className="text-xl font-semibold p-2">Live Chat</h1>
      <div>
        <Chat
          name="Sagar Upadhyay"
          message="Hey! This is a live chat feature"
        />
        <Chat
          name="Sagar Upadhyay"
          message="Hey! This is a live chat feature"
        />
        <Chat
          name="Sagar Upadhyay"
          message="Hey! This is a live chat feature"
        />
        <Chat
          name="Sagar Upadhyay"
          message="Hey! This is a live chat feature"
        />
        <Chat
          name="Sagar Upadhyay"
          message="Hey! This is a live chat feature"
        />
        <Chat
          name="Sagar Upadhyay"
          message="Hey! This is a live chat feature"
        />
        <Chat
          name="Sagar Upadhyay"
          message="Hey! This is a live chat feature"
        />
        <Chat
          name="Sagar Upadhyay"
          message="Hey! This is a live chat feature"
        />
      </div>
    </div>
  );
};

export default LiveChat;
