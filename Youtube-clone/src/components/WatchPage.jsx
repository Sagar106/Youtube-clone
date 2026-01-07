import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const videoByIdUrl = import.meta.env.VITE_LIST_BY_VIDEO_API;
const apiKey = import.meta.env.VITE_YOUTUBE_VIDEO_API;

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const fetchByVideoId = async () => {
    try {
      const response = await fetch(`${videoByIdUrl}${videoId}${apiKey}`);
      const data = await response?.json();
      setVideoDetail(data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchByVideoId();
  }, []);

  return (
    <div className="p-13">
      <iframe
        width="850"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      />
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
