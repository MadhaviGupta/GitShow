import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import db from "../firebase.config";
import NotificationCard from "../components/NotificationCard";
import useProtectedRoute from "../hooks/useProtectedRoute";
import { VscLoading } from "react-icons/vsc";
import { AiFillNotification } from "react-icons/ai";
function NoNotification() {
  return (
    <div>
      <div className="flex justify-center text-2xl mt-20">
        <AiFillNotification className="m-2" />
        <div className="m-1 font-bold">No notifications</div>
      </div>
    </div>
  );
}
export default function Notifications() {
  useProtectedRoute();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postLen, setPostLen] = useState(0);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
        setPostLen(post.length);
      });
  });

  return (
    <div className="w-full font-manrope tracking-wide flex flex-row bg-[#1B2430] bg-cover md:justify-end h-auto min-h-screen text-white">
      <Sidebar />
      <div className="flex md:w-5/6 w-full justify-center">
        <div className="md:w-4/6 w-full md:ml-4 h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl flex flex-col my-3 p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-8">Notifications</h1>
          {post.length === 0 ? (
            <NoNotification />
          ) : (
            post.map(
              ({ id, data: { name, username, likedBy, commentObj } }) => {
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
              }
            )
          )}
          <div className="pb-7 md:hidden"></div>
        </div>
      </div>
    </div>
  );
}
