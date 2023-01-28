import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import user from "../assets/user.png";
import { MdOutlineCreate } from "react-icons/md";
import { FiImage, FiVideo, FiHeart, FiSend } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <div className="flex bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-full bg-cover px-40">
        {/* part1 navbar*/}
        <div className="w-1/5 h-screen bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-6 flex flex-col items-center text-white text-xl">
          <ul>
            {/* <li>
              <div className="flex items-center">
                <img
                  className="md:w-3/6"
                  src={logo}
                  alt="Gitshow logo"
                ></img>
              </div>
            </li> */}
            <li className="m-5">
              <Link to={"/home"}>
                <div className="flex hover:text-orange-700 hover:bg-black hover:rounded-md p-2">
                  <AiOutlineHome className="m-2" />
                  <span className="m-1">Home</span>
                </div>
              </Link>
            </li>
            <li className="m-5">
              <Link to={"/explore"}>
                <div className="flex hover:text-orange-700 hover:bg-black hover:rounded-md p-2">
                  <BiSearchAlt className="m-2" />
                  <span className="m-1">Explore</span>
                </div>
              </Link>
            </li>
            <li className="m-5">
              <Link to={"/notifications"}>
                <div className="flex hover:text-orange-700 hover:bg-black hover:rounded-md p-2">
                  <FiBell className="m-2" />
                  <span className="m-1">Notifications</span>
                </div>
              </Link>
            </li>
            <li className="m-5">
              <Link to={"/messages"}>
                <div className="flex hover:text-orange-700 hover:bg-black hover:rounded-md p-2">
                  <FiMessageSquare className="m-2" />
                  <span className="m-1">Messages</span>
                </div>
              </Link>
            </li>
            <li className="m-5">
              <Link to={"/profile"}>
                <div className="flex hover:text-orange-700 hover:bg-black hover:rounded-md p-2">
                  <FiUser className="m-2" />
                  <span className="m-1">Profile</span>
                </div>
              </Link>
            </li>
            <li className="m-5">
              <Link to={"/network"}>
                <div className="flex hover:text-orange-700 hover:bg-black hover:rounded-md p-2">
                  <AiOutlineUsergroupAdd className="m-2" />
                  <span className="m-1">My Network</span>
                </div>
              </Link>
            </li>
            <li className="m-5">
              <Link to={"#"}>
                <div className="flex text-orange-500 bg-black rounded-md p-2">
                  <MdOutlineCreate className="m-2" />
                  <span className="m-1">Write Post</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {/* part2 feed */}
        <div className="w-3/5 m-3 text-white">
          <div className="w-full h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl p-4 flex flex-col text-center">
            <div className="flex text-center justify-center items-center">
              <img src={user} alt="user" className="w-10 h-10" />
              <input
                className="w-full h-14 m-3 p-3 rounded-md bg-blue-400 bg-opacity-10"
                placeholder="Write something..."
              ></input>
              <FiImage className="text-slate-300 m-2 h-8 w-8" />
              <FiVideo className="text-slate-300 m-2 h-8 w-8" />
            </div>
            <hr className="my-2 opacity-25 w-full"></hr>
          </div>
          <div className="my-2 flex flex-col items-center w-full h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl">
            <div className="flex justify-items-start m-3">
              <img src={user} alt="user" className="w-8 h-8" />
              <p className="my-1 mx-2">George Weasely</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1618944847023-38aa001235f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="feed"
              className="w-4/5 h-4/6 mx-5 my-3"
            />
            <div className="flex p-2">
              <div className="flex mx-5">
                <FiHeart className="mx-3 text-2xl text-white" />
                <p className="text-white">3</p>
              </div>
              <div className="flex mx-5">
                <FaRegCommentDots className="mx-3 text-2xl text-white" />
                <p className="text-white">3</p>
              </div>
              <div className="mx-4">
                <FiSend className="text-2xl text-white" />
              </div>
            </div>
            <hr className="my-2 opacity-25 w-full"></hr>
          </div>
        </div>

        {/* part3 profile*/}
        <div className="w-1/5 h-full bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-10 flex flex-col text-center justify-center  ">
          Profile
        </div>
      </div>
    </>
  );
}
