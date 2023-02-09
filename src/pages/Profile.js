import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FiLink } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { BsFolder } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";

export default function Profile(props) {
  const navigate = useNavigate();
  function githubSignout() {
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

  const user = useSelector(selectUser);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.github.com/users/${user.username}`
    );
    const data = await response.json();
    return setUserData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  let link = `${userData.blog}`;
  if (link.substring(0, 8) !== "https://") {
    link = "https://" + link;
  }
  return (
    <>
      <div className="w-full flex flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-auto bg-cover md:justify-end">
        <Sidebar />
        <div className="flex md:w-5/6 justify-center">
          <div className="md:w-4/6 w-full md:ml-4 mx-2 h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl flex flex-col my-3 p-6 items-center">
            <div className="text-4xl text-center md:text-4xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold m-4">
              Your Profile
            </div>
            <div className="flex flex-col items-center text-white md:w-3/5 w-full p-5 m-2">
              <img
                src={userData.avatar_url}
                alt="Avatar not available."
                className="w-28 h-28 rounded-full m-6"
              />
              <div
                key={userData.id}
                className="tracking-wide text-3xl font-semibold  text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text"
              >
                {userData.name}
              </div>
              <div className="md:text-lg italic tracking-wide flex m-2">
                @
                <a
                  href={`https://github.com/${userData.login}`}
                  className="underline"
                >
                  {userData.login}
                </a>
              </div>
              {userData.blog && (
                <div className="flex md:text-lg m-1.5">
                  <FiLink className="m-1 md:w-5 md:h-5" />
                  <a href={link} className="underline">
                    {userData.blog}
                  </a>
                </div>
              )}
              {userData.location && (
                <div className="flex text-lg m-1.5">
                  <TfiLocationPin className="m-1 md:w-5 md:h-5" />
                  {userData.location}
                </div>
              )}
              {userData.company && (
                <div className="flex text-lg m-1.5">
                  <ImOffice className="m-1 md:w-5 md:h-5" />
                  {userData.company}
                </div>
              )}
              {userData.bio && (
                <div className="flex text-lg m-1.5 justify-center text-center">
                  <FaRegUser className="m-1 mx-2 md:w-5 md:h-5" />
                  {userData.bio}
                </div>
              )}
              {userData.twitter_username && (
                <div className="flex text-lg m-1.5">
                  <FaTwitter className="m-1 mx-2 md:w-5 md:h-5" />
                  {userData.twitter_username}
                </div>
              )}
              <div className="flex text-lg m-1.5">
                <BsFolder className="m-1 mx-2 md:w-5 md:h-5" />{" "}
                {userData.public_repos} Repos
              </div>
              <div className="text-lg m-1.5">
                <span className="mx-2">Followers: {userData.followers}</span> |{" "}
                <span className="mx-2">Following: {userData.following}</span>
              </div>
            </div>
            <button
              onClick={githubSignout}
              className="bg-black bg-opacity-50 hover:bg-opacity-100 text-purple-500 p-4 rounded-lg"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
