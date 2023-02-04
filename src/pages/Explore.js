import React from "react";
import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";
import { BiSearchAlt } from "react-icons/bi";
import TopProfile from "../components/TopProfile";
import TopProjects from "../components/TopProjects";
export default function Explore() {
  return (
    <>
      <div className="md:flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-auto bg-cover">
        <Sidebar />
        <div className="flex justify-end w-10/12">
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
            <div className="text-4xl text-center md:text-4xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mt-20 md:mb-4 m-4">
              Find Top GitHub Projects
            </div>
            <div className="flex mx-4 justify-center">
              <img
                src="https://media.giphy.com/media/I7sbqlUBc4hSE/giphy.gif"
                alt="find"
                className="rounded-xl my-8"
              />
            </div>
            <TopProjects />
            <TopProfile />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
