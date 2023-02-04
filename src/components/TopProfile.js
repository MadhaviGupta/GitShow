import React from "react";

export default function TopProfile() {
  return (
    <>
      to be fetched from
      https://gist.github.com/paulmillr/2657075/a31455729440672467ada20ac10452d74a871e54
      <div className="text-4xl text-center md:text-4xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mt-20 md:mb-4 m-4">
        Most active GitHub users
      </div>
      <div className="flex mx-4 justify-center">
        <img
          // src="https://media.giphy.com/media/17JedU1gYFReg/giphy.gif"
          src="https://media.giphy.com/media/ffynNaSYx2yTC/giphy.gif"
          alt="find"
          className="rounded-xl my-8"
        />
      </div>
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
