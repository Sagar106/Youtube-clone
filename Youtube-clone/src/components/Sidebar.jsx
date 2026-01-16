import React from "react";
import { ImYoutube2 } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu } from "../store/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
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
        className={`fixed top-0 left-0 h-full w-65 bg-white shadow-lg z-50
          transform transition-transform duration-500
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-start pl-6">
          <RxHamburgerMenu
            fontSize="35px"
            className="mt-6 cursor-pointer rounded-4xl shadow-md bg-white p-2 hover:bg-black hover:text-white"
            onClick={() => toggleHandler()}
          />
          <ImYoutube2 fontSize="80px" className="pl-2" />
        </div>
        <div className="px-3">
          <ul className="m-2">
            <li className="mt-2 p-2 bg-red-300 rounded-sm">Home</li>
            <li className="mt-2 p-2 bg-red-300 rounded-sm">Shorts</li>
          </ul>

          <h1 className="font-bold mx-2">Subscriptions</h1>
          <ul className="m-2 space-y-2">
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
