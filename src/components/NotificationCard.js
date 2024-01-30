import { FaRegCommentDots, FaHeart } from "react-icons/fa";
export default function NotificationCard(props) {
  const cookie = document.cookie;
  let i = 0;
  return (
    props.username === cookie && (
      <div className="">
        {props.likedBy.map((user) => {
          return (
            user !== props.username && (
              <p
              key={i++}
              className="p-4 bg-black bg-opacity-40 my-1 rounded-lg flex items-center"
              >
                <FaHeart className="text-red-500 mr-5" />
                {user} has liked your post!
              </p>
            )
            );
        })}
        {props.commentObj.map((user) => {
          return (
            user.username !== props.username && (
              <p
                key={i++}
                className="p-4 bg-black bg-opacity-40 my-1 rounded-lg flex items-center"
              >
                <FaRegCommentDots className="text-blue-400 mr-5" />
                {user.username} has commented on your post
              </p>
            )
          );
        })}
      </div>
    )
  );
}
