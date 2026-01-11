import { useSelector } from "react-redux";

const useSearchedVideos = () => {
  const searchedVideos = useSelector((store) => store.searchedVideos.videos);
  return { searchedVideos };
};

export default useSearchedVideos;
