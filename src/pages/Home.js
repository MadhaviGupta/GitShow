import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi"
export default function Home() {
  return (
    <>
      <div className="flex bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-full bg-cover">
        {/* part1 */}
        <div className="w-1/5 h-80 bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-10 flex flex-col justify-center  hover:shadow-xl">
          <ul>
            <li className="flex m-4">
              <AiFillHome className="my-3"/>
              <span className="mx-3 my-2">Home</span>
            </li>
            <li className="m-4">
                <BiSearchAlt></BiSearchAlt>
                Explore
            </li>
            <li className="m-4">Notifications</li>
            <li className="m-4">Messages</li>
            <li className="m-4">Profile</li>
            <li className="m-4">Network</li>
          </ul>
        </div>
        {/* part2 */}
        <div className="w-3/5 h-80 bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-10 flex flex-col text-center justify-center  hover:shadow-xl">
          Feed
        </div>
        {/* part3 */}
        <div className="w-1/5 h-80 bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-10 flex flex-col text-center justify-center  hover:shadow-xl">
          Profile
        </div>
      </div>
    </>
  );
}
