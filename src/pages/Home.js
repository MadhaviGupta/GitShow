import React, { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import NoPost from "../components/NoPost";
import db from "../firebase.config";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export default function Home() {
  let width = window.innerWidth;
  const [userData, setUserData] = useState([]);
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

  const cookie = document.cookie;
  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${cookie}`);
    const data = await response.json();
    return setUserData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (width > 768) {
    return (
      <>
        <div className="flex flex-col justify-center md:flex-row bg-[#1B2430] h-auto bg-cover md:px-40">
          <Sidebar />
          <div className="md:w-6/12 m-3 ml-0 md:m-3 text-white px-4 py-1 rounded-2xl">
            <CreatePost
              avatar={userData.avatar_url}
              name={userData.name}
              login={userData.login}
              bio={userData.bio}
            />
            {post.map(
              ({
                id,
                data: {
                  logo,
                  name,
                  username,
                  bio,
                  like,
                  likedBy,
                  commentCnt,
                  commentObj,
                  description,
                  image,
                  githubLink,
                  liveLink,
                },
              }) => {
                return (
                  <Post
                    key={id}
                    id={id}
                    logo={logo}
                    name={name}
                    username={username}
                    like={like}
                    likedBy={likedBy}
                    commentCnt={commentCnt}
                    commentObj={commentObj}
                    bio={bio}
                    description={description}
                    image={image}
                    githubLink={githubLink}
                    liveLink={liveLink}
                    width={"full"}
                  />
                );
              }
            )}
            <NoPost />
          </div>
          <ProfileCard
            avatar={userData.avatar_url}
            id={userData.id}
            name={userData.name}
            login={userData.login}
            blog={userData.blog}
            company={userData.company}
            email={userData.email}
            location={userData.location}
            bio={userData.bio}
            twitter_username={userData.twitter_username}
            public_repos={userData.public_repos}
            followers={userData.followers}
            following={userData.following}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col items-center md:flex-row bg-[#1B2430] font-inter h-auto bg-cover md:px-40">
          <div className="w-full mt-3 px-2 md:w-3/6 ml-0 md:ml-3 text-white">
            <CreatePost
              avatar={userData.avatar_url}
              name={userData.name}
              login={userData.login}
              bio={userData.bio}
            />
            {post.map(
              ({
                id,
                data: {
                  logo,
                  name,
                  username,
                  bio,
                  like,
                  likedBy,
                  commentCnt,
                  commentObj,
                  description,
                  image,
                  githubLink,
                  liveLink,
                },
              }) => {
                return (
                  <Post
                    key={id}
                    id={id}
                    logo={logo}
                    name={name}
                    username={username}
                    bio={bio}
                    like={like}
                    likedBy={likedBy}
                    commentCnt={commentCnt}
                    commentObj={commentObj}
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
