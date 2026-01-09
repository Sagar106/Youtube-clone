import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Chat = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <div className="p-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <FaUserAlt size={16} className="text-gray-600" />
        </div>
      </div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default Chat;
