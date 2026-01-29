import React from "react";
import { ImYoutube2 } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "../store/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const theme = useSelector((store) => store.theme.mode);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  if (!isMenuOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => dispatch(closeMenu())}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-65 shadow-lg z-50
          transform transition-transform duration-500 ${
            theme === "dark" ? "bg-[#212121] text-white" : "bg-white"
          }
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-start pl-6">
          <RxHamburgerMenu
            fontSize="35px"
            className={`mt-6 cursor-pointer rounded-4xl shadow-md p-2 ${
              theme === "dark"
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-white text-black hover:bg-black hover:text-white"
            }`}
            onClick={() => toggleHandler()}
          />
          <ImYoutube2
            fontSize="80px"
            className={`pl-2 ${
              theme === "dark" ? "text-white" : "text-red-600"
            }`}
          />
        </div>
        <div className="px-3">
          <ul className="m-2">
            <li
              className={`mt-2 p-2 rounded-sm font-semibold cursor-pointer transition-colors ${
                theme === "dark"
                  ? "bg-red-700 hover:bg-red-600"
                  : "bg-red-300 hover:bg-red-400"
              }`}
            >
              Home
            </li>
            <li
              className={`mt-2 p-2 rounded-sm font-semibold cursor-pointer transition-colors ${
                theme === "dark"
                  ? "bg-red-700 hover:bg-red-600"
                  : "bg-red-300 hover:bg-red-400"
              }`}
            >
              Shorts
            </li>
          </ul>

          <h1 className="font-bold mx-2 mt-6 mb-4">Subscriptions</h1>
          <ul
            className={`m-2 space-y-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            <li className="hover:text-white cursor-pointer transition-colors">
              Music
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Sports
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Gaming
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Movies
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
