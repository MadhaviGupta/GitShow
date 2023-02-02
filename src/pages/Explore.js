import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
export default function Explore() {
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-auto bg-cover md:px-40">
        <Sidebar />
        <div className="flex">
          <BiSearchAlt className="my-5 w-8 h-8 text-white" />
          <input
            className="h-12 w-11/12 m-3 p-3 rounded-md bg-blue-400 bg-opacity-10"
            placeholder="Search here..."
          ></input>
        </div>
      </div>
    </>
  );
}
