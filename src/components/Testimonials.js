import React from "react";
import user from "../assets/user.png";

export default function Testimonials() {
  return (
    <>
      <div className="flex flex-col items-center mt-64">
        <span className="text-3xl md:text-5xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mb-16">
          What customers say about GitShow.
          <hr className="my-2 opacity-25 w-full"></hr>
        </span>
      </div>
      <div className="h-auto mx-48">
        <div className="flex justify-around">
          <div className="w-1/4 h-80 text-orange-600 hover:text-purple-700 cursor-default bg-blue-100 bg-opacity-90 hover:bg-black transition-all duration-500 ease-out rounded-xl my-4 mx-2 p-5 flex shadow-xl">
            <div className="flex flex-col items-center text-center">
              <img src={user} alt="user" className="w-12 h-12" />
              <p className="m-2 text-2xl font-semibold">Ratan Tata</p>
              <p className="text-sm text-gray-500 mb-4">
                CEO, Tata Consultancy Services
              </p>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis dolore, eveniet doloribus sapiente quaerat libero
                fugiat, enim voluptas nisi eos quidem soluta
              </p>
            </div>
          </div>
          <div className="w-1/4 h-80 text-orange-600 hover:text-purple-700 cursor-default bg-blue-100 bg-opacity-90 hover:bg-black transition-all duration-500 ease-out rounded-xl my-4 mx-2 p-5 flex shadow-xl">
            <div className="flex flex-col items-center text-center">
              <img src={user} alt="user" className="w-12 h-12" />
              <p className="m-2 text-2xl font-semibold">Elon Musk</p>
              <p className="text-sm text-gray-500 mb-4">CEO, Tesla</p>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis dolore, eveniet doloribus sapiente quaerat libero
                fugiat, enim voluptas nisi eos quidem soluta
              </p>
            </div>
          </div>
          <div className="w-1/4 h-80 text-orange-600 hover:text-purple-700 cursor-default bg-blue-100 bg-opacity-90 hover:bg-black transition-all duration-500 ease-out rounded-xl my-4 mx-2 p-5 flex shadow-xl">
            <div className="flex flex-col items-center text-center">
              <img src={user} alt="user" className="w-12 h-12" />
              <p className="m-2 text-2xl font-semibold">Robert Kiyosaki</p>
              <p className="text-sm text-gray-500 mb-4">Writer, RDPD</p>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis dolore, eveniet doloribus sapiente quaerat libero
                fugiat, enim voluptas nisi eos quidem soluta
              </p>
            </div>
          </div>
          <div className="w-1/4 h-80 text-orange-600 hover:text-purple-700 cursor-default bg-blue-100 bg-opacity-90 hover:bg-black transition-all duration-500 ease-out rounded-xl my-4 mx-2 p-5 flex shadow-xl">
            <div className="flex flex-col items-center text-center">
              <img src={user} alt="user" className="w-12 h-12" />
              <p className="m-2 text-2xl font-semibold">Dennis Ritchie</p>
              <p className="text-sm text-gray-500 mb-4">
                Developer, C language
              </p>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis dolore, eveniet doloribus sapiente quaerat libero
                fugiat, enim voluptas nisi eos quidem soluta
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
