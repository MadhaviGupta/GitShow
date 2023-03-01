import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import db from "../firebase.config";
import { FaRegCommentDots, FaHeart } from "react-icons/fa";

const cookie = document.cookie;

export default function Notifications() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="w-full font-manrope tracking-wide flex flex-row bg-[#1B2430] bg-cover md:justify-end h-full text-white">
      <Sidebar />
      <div className="flex md:w-5/6 w-full justify-center">
        <div className="md:w-4/6 w-full md:ml-4 h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl flex flex-col my-3 p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-8">Notifications</h1>
          {post.map(({ id, data: { name, username, likedBy, commentObj } }) => {
            return (
              <NotificationCard
                key={id}
                id={id}
                name={name}
                username={username}
                likedBy={likedBy}
                commentObj={commentObj}
              />
            );
          })}
          <div className="pb-7 md:hidden"></div>
        </div>
      </div>
    </div>
  );
}

function NotificationCard(props) {
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
                {user} has liked your post
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
