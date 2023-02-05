import React, { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import NoPost from "../components/NoPost";
import db from "../firebase.config";

export default function Home() {
  let width = window.innerWidth;

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

  if (width > 768) {
    return (
      <>
        <div className="flex flex-col justify-center md:flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-auto bg-cover md:px-40">
          <Sidebar />
          <div className="md:w-6/12 m-3 ml-0 md:m-3 text-white px-4 py-1 rounded-2xl">
            <CreatePost />
            {post.map(
              ({
                id,
                data: {
                  logo,
                  name,
                  username,
                  bio,
                  description,
                  image,
                  githubLink,
                  liveLink,
                },
              }) => {
                return (
                  <Post
                    key={id}
                    logo={logo}
                    name={name}
                    username={username}
                    bio={bio}
                    description={description}
                    image={image}
                    githubLink={githubLink}
                    liveLink={liveLink}
                  />
                );
              }
            )}
            <NoPost />
          </div>
          <ProfileCard />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col items-center md:flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-auto bg-cover md:px-40">
          <div className="w-full mt-3 px-2 md:w-3/6 ml-0 md:ml-3 text-white">
            <CreatePost />
            {post.map(
              ({
                id,
                data: {
                  logo,
                  name,
                  username,
                  bio,
                  description,
                  image,
                  githubLink,
                  liveLink,
                },
              }) => {
                return (
                  <Post
                    key={id}
                    logo={logo}
                    name={name}
                    username={username}
                    bio={bio}
                    description={description}
                    image={image}
                    githubLink={githubLink}
                    liveLink={liveLink}
                  />
                );
              }
            )}
            <NoPost />
          </div>
          <Sidebar />
        </div>
      </>
    );
  }
}
