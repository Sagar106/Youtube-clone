import { RxTimer } from "react-icons/rx";

const SuggestionsList = ({ suggestion }) => {
  return (
    <li className="list-none p-2 m-1 hover:bg-gray-300 transition-discrete hover:rounded-md cursor-pointer text-left flex">
      <RxTimer className="font-[20px] mt-1 mx-2" />
      {suggestion}
    </li>
  );
};

export default SuggestionsList;
