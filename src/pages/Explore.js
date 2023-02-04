import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import TopProfile from "../components/TopProfile";
import TopProjects from "../components/TopProjects";
import Sidebar from "../components/Sidebar";
export default function Explore() {
  return (
    <>
      <div className="w-full flex flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-auto bg-cover md:justify-end">
        <Sidebar />
        <div className="flex md:w-5/6 justify-center">
          <div className="md:w-4/6 w-full md:ml-4 mx-2 h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl flex flex-col my-3">
            <div className="flex justify-center w-full md:mt-10">
              <input
                className="h-12 w-full md:w-3/5 m-3 p-2 md:p-3 rounded-xl bg-blue-400 bg-opacity-10"
                placeholder="Search here..."
              ></input>
              <button>
                <BiSearchAlt className="my-5 w-8 h-8 text-white hover:text-blue-200" />
              </button>
            </div>

            <TopProjects />
            <TopProfile />
          </div>
        </div>
      </div>
    </>
  );
}
