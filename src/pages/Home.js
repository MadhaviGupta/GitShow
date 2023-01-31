import React from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  let width = window.innerWidth;
  if (width > 768) {
    return (
      <>
        <div className="flex flex-col md:flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-full bg-cover md:px-40">
          {/* part1 navbar*/}
          <Sidebar />
          {/* part2 feed */}
          <div className="w-full px-2 md:w-3/6 m-3 ml-0 md:m-3 text-white">
            <CreatePost />
            <Post />
          </div>
          {/* part3 profile*/}
          <ProfileCard />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-col md:flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-screen bg-cover md:px-40">
          {/* part2 feed */}
          <div className="w-full px-2 md:w-3/6 m-3 ml-0 md:ml-3 text-white">
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
