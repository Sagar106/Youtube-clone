import CommentsList from "./CommentsList";
import { comments } from "../constants/constant";
import { useSelector } from "react-redux";

const CommentsContainer = () => {
  const theme = useSelector((store) => store.theme.mode);

  return (
    <div className="py-4">
      <h1
        className={`text-2xl font-semibold ${theme === "dark" ? "text-amber-100" : ""}`}
      >
        Comments
      </h1>
      <CommentsList data={comments} />
    </div>
  );
};

export default CommentsContainer;
