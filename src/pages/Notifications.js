import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import db from "../firebase.config";
import NotificationCard from "../components/NotificationCard";
import useProtectedRoute from "../hooks/useProtectedRoute";
import { VscLoading } from "react-icons/vsc";

export default function Notifications() {
  useProtectedRoute();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

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
      });
  });

  return (
    <div
      className="w-full font-manrope tracking-wide flex flex-row bg-[#1B2430] bg-cover md:justify-end h-auto min-h-screen text-white"
    >
      <Sidebar />
      <div className="flex md:w-5/6 w-full justify-center">
        <div className="md:w-4/6 w-full md:ml-4 h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl flex flex-col my-3 p-4 md:p-6">
          <h1 className="text-2xl font-bold mb-8">Notifications</h1>
          {loading ? (
            <div className="w-full flex justify-center items-center animate-spin h-96">
              <VscLoading className="w-8 h-8" />
            </div>
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
