import React from "react";

export default function TopProjects() {
  return (
    <>
      <div className="flex flex-col md:justify-center items-center md:max-w-7xl max-w-4xl md:mx-20 mx-5">
        <div className="flex flex-col my-5 mx-8 items-center">
          <div
            className="h-auto rounded-xl md:m-3 md:p-10 p-3 flex flex-col justify-center items-center
          hover:bg-opacity-70 transition-all ease-in duration-300 cursor-default hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
          >
            <p className="text-2xl text-blue-200 mb-5 flex font-bold font-manrope">
              To-Do App
            </p>
            <p className="text-white text-md font-medium tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              ipsum assumenda re voluptatum harum fugit! Inventore?.
            </p>
          </div>
        </div>
        <div className="flex flex-col my-5 mx-8 items-center">
          <div
            className="h-auto rounded-xl md:m-3 md:p-10 p-3 flex flex-col justify-center items-center
          hover:bg-opacity-70 transition-all ease-in duration-300 cursor-default hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
          >
            <p className="text-2xl text-blue-200 mb-5 flex font-bold font-manrope">
              To-Do App
            </p>
            <p className="text-white text-md font-medium tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              ipsum assumenda re voluptatum harum fugit! Inventore?.
            </p>
          </div>
        </div>
        <div className="flex flex-col my-5 mx-8 items-center">
          <div
            className="h-auto rounded-xl md:m-3 md:p-10 p-3 flex flex-col justify-center items-center
          hover:bg-opacity-70 transition-all ease-in duration-300 cursor-default hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
          >
            <p className="text-2xl text-blue-200 mb-5 flex font-bold font-manrope">
              Weather App
            </p>
            <p className="text-white text-md font-medium tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              ipsum assumenda re voluptatum harum fugit! Inventore?.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
