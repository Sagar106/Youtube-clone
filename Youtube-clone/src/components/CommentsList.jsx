import { useSelector } from "react-redux";
import Comment from "./Comment";

const CommentsList = ({ data }) => {
  const theme = useSelector((store) => store.theme.mode);

  return (
    <div
      className={`w-full my-5 rounded-2xl ${theme === "dark" ? "bg-[#000000]" : "bg-gray-100"}`}
    >
      {data.map((c) => (
        <div key={c.id}>
          <Comment comment={c} />
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
