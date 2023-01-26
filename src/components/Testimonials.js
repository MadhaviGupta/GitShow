import React from "react";
import user from "../assets/user.png";

export default function Testimonials() {
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mb-16">
          What customers say about GitShow.
          <hr className="my-2 opacity-25 w-full"></hr>
        </span>
      </div>
      <div className="h-auto mx-48">
        <div className="flex justify-around">
          <div className="w-1/4 h-80 bg-blue-200 hover:bg-blue-100 rounded-2xl my-4 mx-2 p-3 flex shadow-xl">
            <div className="flex flex-col items-center text-center">
              <img src={user} alt="user" className="w-12 h-12" />
              <p className="m-2 text-2xl text-orange-700">Ratan Tata</p>
              <p className="text-sm text-gray-500 mb-4">
                CEO, Tata Consultancy Services
              </p>
              <p className="text-orange-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis dolore, eveniet doloribus sapiente quaerat libero
                fugiat, enim voluptas nisi eos quidem soluta commodi
              </p>
            </div>
          </div>
          <div className="w-1/4 h-80 bg-blue-200 hover:bg-blue-100 rounded-2xl my-4 mx-2 p-3 flex shadow-xl">
            <div className="flex flex-col items-center text-center">
              <img src={user} alt="user" className="w-12 h-12" />
              <p className="m-2 text-2xl text-orange-700">Elon Musk</p>
              <p className="text-sm text-gray-500 mb-4">CEO, Tesla</p>
              <p className="text-orange-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis dolore, eveniet doloribus sapiente quaerat libero
                fugiat, enim voluptas nisi eos quidem soluta
              </p>
            </div>
          </div>
          <div className="w-1/4 h-80 bg-blue-200 hover:bg-blue-100 rounded-2xl my-4 mx-2 p-3 flex shadow-xl">
            <div className="flex flex-col items-center text-center">
              <img src={user} alt="user" className="w-12 h-12" />
              <p className="m-2 text-2xl text-orange-700">Robert Kiyosaki</p>
              <p className="text-sm text-gray-500 mb-4">Writer, RDPD</p>
              <p className="text-orange-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reiciendis dolore, eveniet doloribus sapiente quaerat libero
                fugiat, enim voluptas nisi eos quidem soluta
              </p>
            </div>
          </div>
          <div className="w-1/4 h-80 bg-blue-200 hover:bg-blue-100 rounded-2xl my-4 mx-2 p-3 flex shadow-xl">
            <div className="flex flex-col items-center text-center">
              <img src={user} alt="user" className="w-12 h-12" />
              <p className="m-2 text-2xl text-orange-700">Dennis Ritchie</p>
              <p className="text-sm text-gray-500 mb-4">
                Developer, C language
              </p>
              <p className="text-orange-700">
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
