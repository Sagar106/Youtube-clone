import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const theme = useSelector((store) => store.theme.mode);

  return (
    <div
      className={`w-100 h-90 hover:shadow-md m-4 rounded-lg p-3 ${theme === "dark" ? "hover:shadow-md hover:bg-[#272727]" : ""}`}
    >
      <img
        className="rounded-lg w-100"
        alt="video"
        src={thumbnails.medium.url}
        fetchPriority="high"
        loading="eager"
      />
      <p
        className={`py-2 px-2 font-semibold ${theme === "dark" ? "text-amber-50" : ""}`}
      >
        {title}
      </p>
      <p className={`px-2 ${theme === "dark" ? "text-amber-50" : ""}`}>
        {channelTitle}
      </p>
    </div>
  );
};

export default VideoCard;
