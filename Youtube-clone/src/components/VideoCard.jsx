import React from "react";

const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-60 h-80 shadow-md m-4 rounded-b-lg">
      <img className="rounded-lg" alt="video" src={thumbnails.medium.url} />
      <p className="py-2 px-2 font-semibold">{title}</p>
      <p className="px-2">{channelTitle}</p>
    </div>
  );
};

export default VideoCard;
