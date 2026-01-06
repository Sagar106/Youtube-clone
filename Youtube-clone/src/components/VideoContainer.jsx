import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
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

  if (videoData.length === 0) {
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
    <div className="flex flex-wrap my-6 mx-5">
      {videoData.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
