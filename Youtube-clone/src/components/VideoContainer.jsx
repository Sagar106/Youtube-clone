import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  const searchedVideos = useSelector((store) => store.searchedVideos.videos);
  const getVideoId = (video) =>
    typeof video.id === "string" ? video.id : video.id?.videoId;

  const videosToDisplay =
    searchedVideos && searchedVideos.length > 0 ? searchedVideos : videoData;

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getVideoList");
      const data = await response?.json();
      const items = await data?.items;
      setVideoData(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!videosToDisplay) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-lg font-semibold text-gray-600">
            Loading videos...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap my-6 mx-10">
      {videosToDisplay.map((video) => {
        const videoId = getVideoId(video);

        if (!videoId) return null;

        return (
          <Link key={videoId} to={`/watch?v=${videoId}`}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
