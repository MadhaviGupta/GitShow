import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import user from "../assets/user.png";
import logo from "../assets/logo1.png";
import { MdOutlineCreate } from "react-icons/md";
import { FiImage, FiVideo, FiHeart, FiSend } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="flex bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-full bg-cover md:px-40">
        {/* part1 navbar*/}
        <div className="w-1/6 md:w-1/5 h-screen bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl my-3 mr-3 ml-1 md:p-3 flex flex-col items-center text-white text-xl">
          <ul className="w-full">
            <li>
              <div className="flex items-center">
                <img
                  className="w-5/6 md:w-2/6 md:ml-5 mt-4"
                  src={logo}
                  alt="Gitshow logo"
                ></img>
              </div>
            </li>
            <li className="md:mx-5 mt-10 mb-2">
              <Link to={"/home"}>
                <div className="flex hover:text-orange-700 hover:bg-black hover:rounded-full p-2 ">
                  <AiOutlineHome className="md:m-2 m-auto" />
                  <span className="m-1 hidden md:block">Home</span>
                </div>
              </Link>
            </li>
            <li className="mx-5 mb-2">
              <Link to={"/explore"}>
                <div className="flex hover:text-orange-700 hover:bg-black hover:rounded-full p-2">
                  <BiSearchAlt className="md:m-2 m-auto" />
                  <span className="m-1 hidden md:block">Explore</span>
                </div>
              </Link>
            </li>
            <li className="mx-5 mb-2">
              <Link to={"/notifications"}>
                <div className="flex hover:text-orange-700 hover:bg-black hover:rounded-full p-2">
                  <FiBell className="m-auto md:m-2" />
                  <span className="m-1 hidden md:block">Notifications</span>
                </div>
              </Link>
            </li>
            <li className="mx-5 mb-2">
              <Link to={"/messages"}>
                <div className="flex hover:text-orange-700 hover:bg-black hover:rounded-full p-2">
                  <FiMessageSquare className="m-auto md:m-2" />
                  <span className="m-1 hidden md:block">Messages</span>
                </div>
              </Link>
            </li>
            <li className="mx-5 mb-2">
              <Link to={"/profile"}>
                <div className="flex hover:text-orange-700 hover:bg-black hover:rounded-full p-2">
                  <FiUser className="m-auto md:m-2" />
                  <span className="m-1 hidden md:block">Profile</span>
                </div>
              </Link>
            </li>
            <li className="mx-5 mb-6">
              <Link to={"/network"}>
                <div className="flex hover:text-orange-700 hover:bg-black hover:rounded-full p-2">
                  <AiOutlineUsergroupAdd className="m-auto md:m-2" />
                  <span className="m-1 hidden md:block">My Network</span>
                </div>
              </Link>
            </li>
            <li className="mx-5">
              <Link to={"#"}>
                <div className="flex text-orange-500 bg-black rounded-full p-2">
                  <MdOutlineCreate className="m-auto md:m-2" />
                  <span className="m-1 hidden md:block">Write Post</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {/* part2 feed */}
        <div className="w-4/5 md:w-3/5 m-3 ml-0 md:ml-3 text-white">
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
          {/* part3 profile*/}
          <div className="hidden w-1/5 h-full bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-10 md:flex flex-col text-center justify-center  ">
            Profile
          </div>
        </div>

        {/* part3 profile*/}
        <div className="hidden w-1/5 h-full bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-10 md:flex flex-col text-center justify-center  ">
          Profile
        </div>
      </>
    );
  }
}
