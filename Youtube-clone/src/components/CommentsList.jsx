import Comment from "./Comment";

const CommentsList = ({ data }) => {
  return (
    <div className="w-[61%]">
      {data.map((c) => (
        <div key={c.id}>
          <Comment comment={c} />
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
