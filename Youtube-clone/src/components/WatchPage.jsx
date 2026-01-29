import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoDetail, setVideoDetail] = useState(null);
  const theme = useSelector((store) => store.theme.mode);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const fetchByVideoId = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/getVideoDetails/${videoId}`,
      );
      const data = await response?.json();
      console.log(data);
      setVideoDetail(data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchByVideoId();
  }, []);

  return (
    <div className={`flex w-full ${theme === "dark" ? "bg-[#000000]" : ""}`}>
      <div className="p-10">
        <iframe
          width="850"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
        {videoDetail && (
          <div
            className={`mt-6 p-6 rounded-lg border ${
              theme === "dark"
                ? "bg-[#1a1a1a] border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            {/* Title */}
            <h2
              className={`text-2xl font-bold mb-6 leading-tight ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {videoDetail.snippet.title}
            </h2>

            {/* Channel and Stats */}
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-300">
              {/* Channel Info */}
              <div className="flex items-center gap-4">
                <img
                  src={videoDetail.snippet.thumbnails.default.url}
                  alt={videoDetail.snippet.channelTitle}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p
                    className={`font-semibold text-lg ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    {videoDetail.snippet.channelTitle}
                  </p>
                  <p
                    className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Channel
                  </p>
                </div>
              </div>

              {/* Action Buttons and Stats */}
              <div className="flex items-center gap-6">
                {/* Stats */}
                <div className="flex gap-8">
                  <div className="text-center">
                    <p
                      className={`text-sm font-semibold ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Views
                    </p>
                    <p
                      className={`text-lg font-bold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {(videoDetail.statistics.viewCount / 10000).toFixed(2)}K
                    </p>
                  </div>
                  <div className="text-center">
                    <p
                      className={`text-sm font-semibold ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Likes
                    </p>
                    <p
                      className={`text-lg font-bold ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
                    >
                      {(videoDetail.statistics.likeCount / 10000).toFixed(2)}K
                    </p>
                  </div>
                </div>

                {/* Subscribe Button */}
                <button
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Description */}
            <div
              className={`text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <p>{videoDetail.snippet.description.substring(0, 200)}...</p>
            </div>
          </div>
        )}
        <div>
          <CommentsContainer />
        </div>
      </div>
      <div className="mt-10 mr-10 w-full h-[600px]">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
