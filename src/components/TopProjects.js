import React from "react";

export default function TopProjects() {
  return (
    <>
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
      <div className="flex flex-col lg:flex-row lg:justify-center items-center max-w-7xl">
        <div
          className="h-auto rounded-xl w-2xl md:m-4 md:p-10 p-3 m-10 flex flex-col justify-center items-center
          hover:bg-opacity-70 transition-all ease-in duration-300 cursor-default hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
        >
          <p className="text-2xl text-blue-200 mb-5 flex font-bold font-manrope">
            To-Do App
          </p>
          <p className="text-white text-md font-medium tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum
            assumenda re voluptatum harum fugit! Inventore?.
          </p>
        </div>
        <div
          className="h-auto rounded-xl md:m-4 md:p-10 p-3 m-10 flex flex-col justify-center items-center
          hover:bg-opacity-70 transition-all ease-in duration-300 cursor-default hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
        >
          <p className="text-2xl text-blue-200 mb-5 flex font-bold font-manrope">
            Weather App
          </p>
          <p className="text-white text-md font-medium tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum
            assumenda re voluptatum harum fugit! Inventore?.
          </p>
        </div>
        <div
          className="h-auto rounded-xl md:m-4 md:p-10 p-3 m-10 flex flex-col justify-center items-center
          hover:bg-opacity-70 transition-all ease-in duration-300 cursor-default hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
        >
          <p className="text-2xl text-blue-200 mb-5 flex font-bold font-manrope">
            Live Chat App
          </p>
          <p className="text-white text-md font-medium tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum
            assumenda re voluptatum harum fugit! Inventore?.
          </p>
        </div>
      </div>
    </>
  );
}
