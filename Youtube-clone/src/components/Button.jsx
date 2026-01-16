import React from "react";

const Button = ({ btnName }) => {
  return (
    <div className="mx-2">
      <button className="p-2 border-none rounded-md bg-gray-200 cursor-pointer hover:bg-black hover:text-white">
        {btnName}
      </button>
    </div>
  );
};

export default Button;
