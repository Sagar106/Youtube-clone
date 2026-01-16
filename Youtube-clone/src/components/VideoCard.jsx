import React from "react";

const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-100 h-90 hover:shadow-md m-4 rounded-b-lg p-3">
      <img
        className="rounded-lg w-100"
        alt="video"
        src={thumbnails.medium.url}
      />
      <p className="py-2 px-2 font-semibold">{title}</p>
      <p className="px-2">{channelTitle}</p>
    </div>
  );
};

export default VideoCard;
