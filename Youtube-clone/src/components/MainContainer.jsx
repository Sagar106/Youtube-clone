import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const theme = useSelector((store) => store.theme.mode);

  return (
    <div className={`${theme === "dark" ? "bg-[#000000]" : ""}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
