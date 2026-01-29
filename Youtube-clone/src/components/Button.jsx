import React from "react";
import { useSelector } from "react-redux";

const Button = ({ btnName }) => {
  const theme = useSelector((store) => store.theme.mode);

  return (
    <div className="mx-2">
      <button
        className={`p-2 border-none rounded-md cursor-pointer hover:bg-black hover:text-white ${theme === "dark" ? "bg-[#272727] text-white" : "bg-gray-200"}`}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;
