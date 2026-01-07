import CommentsList from "./CommentsList";
import { comments } from "../constants/constant";

const CommentsContainer = () => {
  return (
    <div className="py-4">
      <h1 className="text-2xl font-semibold">Comments</h1>
      <CommentsList data={comments} />
    </div>
  );
};

export default CommentsContainer;
