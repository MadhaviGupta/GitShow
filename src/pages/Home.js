import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
export default function Home() {
  return (
    <>
      <div className="flex bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-full bg-cover">
        {/* part1 */}
        <div className="w-1/5 h-screen bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-8 flex flex-col justify-center items-center text-white text-xl">
          <ul>
            <li className="m-10">
              <Link to={"/home"}>
                <div className="flex hover:text-slate-300">
                  <AiOutlineHome className="m-2" />
                  <span className="m-1">Home</span>
                </div>
              </Link>
            </li>
            <li className="m-10">
              <Link to={"/explore"}>
                <div className="flex hover:text-slate-300">
                  <BiSearchAlt className="m-2" />
                  <span className="m-1">Explore</span>
                </div>
              </Link>
            </li>
            <li className="m-10">
              <Link to={"/notifications"}>
                <div className="flex hover:text-slate-300">
                  <FiBell className="m-2" />
                  <span className="m-1">Notifications</span>
                </div>
              </Link>
            </li>
            <li className="m-10">
              <Link to={"/messages"}>
                <div className="flex hover:text-slate-300">
                  <FiMessageSquare className="m-2" />
                  <span className="m-1">Messages</span>
                </div>
              </Link>
            </li>
            <li className="m-10">
              <Link to={"/profile"}>
                <div className="flex hover:text-slate-300">
                  <FiUser className="m-2" />
                  <span className="m-1">Profile</span>
                </div>
              </Link>
            </li>
            <li className="m-10">
              <Link to={"/network"}>
                <div className="flex hover:text-slate-300">
                  <AiOutlineUsergroupAdd className="m-2" />
                  <span className="m-1">My Network</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {/* part2 */}
        <div className="w-3/5 h-full bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-10 flex flex-col text-center justify-center  ">
          Feed
        </div>
        {/* part3 */}
        <div className="w-1/5 h-full bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-10 flex flex-col text-center justify-center  ">
          Profile
        </div>
      </div>
    </>
  );
}
