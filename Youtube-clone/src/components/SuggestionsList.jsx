import React from "react";

const SuggestionsList = ({ suggestion }) => {
  return (
    <li className="list-none p-2 m-1 hover:bg-gray-300 transition-discrete hover:rounded-md cursor-pointer">
      {suggestion}
    </li>
  );
};

export default SuggestionsList;
