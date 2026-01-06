import { RxHamburgerMenu } from "react-icons/rx";
import { ImYoutube2 } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuggestionsList from "./SuggestionsList";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  const fetchSearchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/search?q=${searchQuery}`
      );
      const data = await response.json();
      setSuggestions(data.suggestions);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!searchQuery) return;

    const timer = setTimeout(fetchSearchData, 350);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col shadow">
      <div className="flex justify-start pl-6 col-span-1">
        <RxHamburgerMenu
          fontSize="30px"
          className="mt-6 cursor-pointer"
          onClick={() => toggleHandler()}
        />
        <Link to="/">
          <ImYoutube2 fontSize="80px" className="pl-2" />
        </Link>
      </div>
      <div className="pt-6 text-center col-span-10 relative">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-6 py-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
            <FaSearch fontSize="18px" className="text-gray-600" />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-10 bg-white border border-gray-300 rounded-lg shadow-lg w-1/2 max-h-60 overflow-y-auto scrollbar-hide">
            {suggestions.map((s) => (
              <SuggestionsList suggestion={s.value} />
            ))}
          </div>
        )}
      </div>
      <div className="mt-8 pr-6 flex justify-end col-span-1">
        <FaUserAlt size={20} />
      </div>
    </div>
  );
};

export default Head;
