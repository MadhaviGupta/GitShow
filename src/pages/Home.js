import React from "react";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

export default function Home() {
  let width = window.innerWidth;
  if (width > 768) {
    return (
      <>
        <div className="flex flex-col md:flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-full bg-cover md:px-40">
          {/* part1 navbar*/}
          <Sidebar />
          {/* part2 feed */}
          <div className="w-full px-2 md:w-3/5 m-3 ml-0 md:ml-3 text-white">
            <CreatePost />
            <Post />
          </div>
          {/* part3 profile*/}
          <div className="hidden w-1/5 h-full bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-10 md:flex flex-col text-center justify-center  ">
            Profile
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col md:flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-screen bg-cover md:px-40">
          {/* part2 feed */}
          <div className="w-full px-2 md:w-3/5 m-3 ml-0 md:ml-3 text-white">
            <CreatePost />
            <Post />
          </div>
          {/* part1 navbar*/}
          <Sidebar />
        </div>
      </>
    );
  }
}
