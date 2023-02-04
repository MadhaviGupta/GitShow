import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import TopProfile from "../components/TopProfile";
import TopProjects from "../components/TopProjects";
export default function Explore() {
  return (
    <>
      <div className="w-full md:flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-auto bg-cover">
        {/* <Sidebar /> */}
        <div className="flex justify-center w-full">
          <div className="md:w-3/5 w-5/6 h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl flex flex-col my-3">
            <div className="flex justify-center w-full md:mt-10">
              <input
                className="h-12 w-3/5 m-3 p-3 rounded-xl bg-blue-400 bg-opacity-10"
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
