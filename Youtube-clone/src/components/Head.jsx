import { RxHamburgerMenu } from "react-icons/rx";
import { ImYoutube2 } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import SuggestionsList from "./SuggestionsList";
import { cacheResults } from "../store/searchSlice";
import { setSearchedVideos } from "../store/searchedVideosSlice";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { changeTheme } from "../store/themeSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const mode = useSelector((store) => store.theme.mode);

  const cachedResults = searchCache[searchQuery];

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  const fetchSearchedVideos = async (query) => {
    if (!query) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/searchVideos?q=${query}`,
      );
      const data = await response.json();
      const items = data?.items || [];

      dispatch(setSearchedVideos(items));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSearchData = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/search?q=${searchQuery}`,
      );
      const data = await response.json();
      setSuggestions(data.suggestions);
      dispatch(
        cacheResults({
          [searchQuery]: data.suggestions,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }, [searchQuery, dispatch]);

  const handleSearch = (search) => {
    setSearchQuery(search);
    setShowSuggestions(false);
  };

  const handleSearchClick = () => {
    fetchSearchedVideos(searchQuery);
  };

  useEffect(() => {
    if (!searchQuery) return;

    const timer = setTimeout(() => {
      if (cachedResults) {
        setSuggestions(cachedResults);
      } else {
        fetchSearchData();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, cachedResults, fetchSearchData]);

  return (
    <div
      className={`grid grid-flow-col shadow-md ${
        mode === "light" ? "bg-amber-100" : "bg-[#272727]"
      } `}
    >
      <div className="flex justify-start pl-6 col-span-1">
        <RxHamburgerMenu
          fontSize="35px"
          className="mt-6 cursor-pointer rounded-4xl shadow-md bg-white p-2 hover:bg-black hover:text-white"
          onClick={() => toggleHandler()}
        />
        <Link to="/">
          <ImYoutube2
            fontSize="80px"
            className={`pl-2 ${mode === "dark" ? "text-white" : "text-red-600"}`}
          />
        </Link>
      </div>
      <div className="pt-6 text-center col-span-9 relative">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            onClick={handleSearchClick}
            className="px-6 py-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
          >
            <FaSearch fontSize="18px" className="text-gray-600" />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute top-full left-1/2 transform -translate-x-[56%] z-10 bg-white border border-gray-300 rounded-lg shadow-lg w-1/2 max-h-60 overflow-y-auto scrollbar-hide">
            {suggestions.map((s, i) => (
              <SuggestionsList
                key={i}
                suggestion={s.value}
                handleSearch={handleSearch}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mt-8 pr-6 my-5 flex justify-end col-span-2 items-center gap-6">
        <button
          onClick={() =>
            dispatch(changeTheme(mode === "light" ? "dark" : "light"))
          }
          className={`p-2 rounded-full transition-all cursor-pointer duration-200 ${
            mode === "light"
              ? "hover:bg-gray-300 text-gray-800"
              : "hover:bg-gray-600 text-yellow-300"
          }`}
          title="Toggle theme"
        >
          {mode === "light" ? <CiDark size={24} /> : <CiLight size={24} />}
        </button>
        <FaUserAlt size={20} className={mode === "dark" ? "text-white" : ""} />
      </div>
    </div>
  );
};

export default Head;
