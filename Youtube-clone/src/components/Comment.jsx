import React, { useState } from "react";
import { FaUserAlt, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const theme = useSelector((store) => store.theme.mode);

  return (
    <div className="flex p-4 border-b-gray-300">
      <div className="shrink-0 mr-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <FaUserAlt size={16} className="text-gray-600" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <h2
            className={`font-semibold text-sm mr-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            {comment.name}
          </h2>
          <span className="text-xs text-gray-500">2 days ago</span>{" "}
          {/* Placeholder timestamp */}
        </div>
        <p
          className={`text-sm mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
        >
          {comment.text}
        </p>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-xs text-gray-600 hover:text-gray-900">
            <FaThumbsUp size={12} />
            <span>1</span>
          </button>
          <button className="flex items-center space-x-1 text-xs text-gray-600 hover:text-gray-900">
            <FaThumbsDown size={12} />
          </button>
          <button className="text-xs text-gray-600 hover:text-gray-900 font-medium">
            REPLY
          </button>
        </div>
        {comment.replies && comment.replies.length > 0 && (
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="mt-2 text-xs text-white font-medium p-2 bg-gray-900 hover:bg-gray-500 rounded-2xl cursor-pointer"
          >
            {showReplies ? "HIDE REPLIES" : `${comment.replies.length} REPLIES`}
          </button>
        )}
        {showReplies && comment.replies && (
          <div className="mt-4 pl-4 border-l-2 border-gray-200">
            {comment.replies.map((reply) => (
              <Comment key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
