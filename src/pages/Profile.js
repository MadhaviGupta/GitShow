import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { MdGridOn } from "react-icons/md";
import { BsFolder2Open } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";
import RepoInfo from "../components/RepoInfo";
import Post from "../components/Post";
import db from "../firebase.config";

export default function Profile(props) {
  const navigate = useNavigate();
  function githubSignout() {
    document.cookie = "";
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          console.log("Signout successful!");
          navigate("/");
        },
        function (error) {
          console.log("Signout failed");
        }
      );
  }
  const [userData, setUserData] = useState([]);
  const [repo, setRepo] = useState([]);
  const [content, setContent] = useState("post");
  const [post, setPost] = useState([]);

  const user = useSelector(selectUser);

  const cookie = document.cookie;

  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${cookie}`);
    const data = await response.json();
    return setUserData(data);
  };
  useEffect(() => {
    fetchData();
    fetchDataRepo();
  }, []);

  useEffect(() => {
    db.collection("posts")
      .where("username", "==", cookie)
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

  const fetchDataRepo = async () => {
    const response = await fetch(
      `https://api.github.com/users/${cookie}/repos`
    );
    const data = await response.json();
    return setRepo(data);
  };
  let link = `${userData.blog}`;
  if (link.substring(0, 8) !== "https://") {
    link = "https://" + link;
  }
  return (
    <>
      <div className="flex flex-col md:justify-center md:flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-auto bg-cover md:px-40">
        <Sidebar />
        <div className="bg-black font-manrope tracking-wide bg-opacity-20 w-full md:w-4/6 md:rounded-2xl p-5 md:mt-3 mx-auto md:mx-0 md:ml-56 text-slate-100">
          <div className="flex flex-col mt-8">
            <div className="flex items-start justify-around">
              <div className="w-3/6 md:w-2/6 flex flex-col justify-center items-center">
                <img
                  src={userData.avatar_url}
                  alt="Avatar not available."
                  className="w-28 h-28 rounded-full m-6"
                />
                <button
                  onClick={githubSignout}
                  className="bg-black bg-opacity-50 hover:bg-opacity-100 text-purple-500 p-4 rounded-lg w-3/6 m-auto hidden md:block"
                >
                  Log Out{" "}
                </button>
              </div>
              <div className="flex flex-col ml-8 md:ml-20 w-4/6">
                <div className="flex flex-col w-4/5 justify-between mt-7">
                  <div
                    key={userData.id}
                    className="tracking-wider text-2xl font-semibold "
                  >
                    {userData.name}
                  </div>

                  <div className="italic tracking-wide flex mt-1">
                    (@
                    <a
                      href={`https://github.com/${userData.login}`}
                      className=""
                    >
                      {userData.login}
                    </a>
                    )
                  </div>
                  <button
                    onClick={githubSignout}
                    className="bg-black bg-opacity-50 hover:bg-opacity-100 text-purple-500 p-2  mt-4 rounded-lg w-3/5 block md:hidden"
                  >
                    Log Out{" "}
                  </button>
                </div>
                <div className="md:flex items-center mt-6 hidden">
                  <div className="">Repositories: {userData.public_repos}</div>
                  <div className="m-1.5">
                    <span className="mx-2">
                      Followers: {userData.followers}
                    </span>{" "}
                    <span className="mx-2">
                      Following: {userData.following}
                    </span>
                  </div>
                </div>
                <div className="hidden md:block">
                  {userData.blog && (
                    <div className="flex">
                      Website:{" "}
                      <a href={link} className="ml-1 text-blue-400">
                        {userData.blog}
                      </a>
                    </div>
                  )}
                  {userData.company && (
                    <div className="flex">Company: {userData.company}</div>
                  )}
                  {userData.bio && (
                    <div className="flex mt-5">{userData.bio}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-4 md:hidden text-lg">
              {userData.blog && (
                <div className="flex">
                  Website:{" "}
                  <a href={link} className="ml-1 text-blue-400">
                    {userData.blog}
                  </a>
                </div>
              )}
              {userData.company && (
                <div className="flex">Company: {userData.company}</div>
              )}
              {userData.bio && <div className="flex mt-2">{userData.bio}</div>}
            </div>
          </div>
          <div className="flex items-center mt-6 justify-center md:hidden">
            <div className="p-4 bg-black bg-opacity-50 rounded-l-lg">
              Repositories: {userData.public_repos}
            </div>
            <span className="p-4 border-x-[1px] border-slate-600 bg-black bg-opacity-50">
              Followers: {userData.followers}
            </span>{" "}
            <span className="p-4 bg-black bg-opacity-50 rounded-r-lg">
              Following: {userData.following}
            </span>
          </div>
          <div className="mt-4 md:mt-20 h-[1px] bg-slate-700 md:w-5/6 mx-auto"></div>
          <div className="flex w-full md:w-4/5 mx-auto justify-around">
            <div
              className={`flex items-center p-2 cursor-pointer hover:text-slate-300 ${
                content === "post" && "border-b-[1px] border-white"
              }`}
              onClick={() => setContent("post")}
            >
              <MdGridOn className="text-3xl md:text-lg md:mx-2" />
              <span className="hidden md:block">Posts</span>
            </div>
            <div
              className={`flex items-center p-2 cursor-pointer hover:text-slate-300 ${
                content === "repo" && "border-b-[1px] border-white"
              }`}
              onClick={() => setContent("repo")}
            >
              <BsFolder2Open className="text-3xl md:text-lg md:mx-2" />
              <span className="hidden md:block">Repositories </span>
            </div>
          </div>
          {content === "post"
            ? post.map(
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
                      width={"5/6"}
                    />
                  );
                }
              )
            : repo.map((repos) => (
                <RepoInfo
                  key={repos.id}
                  name={repos.name}
                  desc={repos.description}
                  url={repos.html_url}
                  star_count={repos.stargazers_count}
                  forks_count={repos.forks_count}
                  language={repos.language}
                  clone_url={repos.clone_url}
                />
              ))}
        </div>
      </div>
    </>
  );
}
