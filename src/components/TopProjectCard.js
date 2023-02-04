import React from "react";

export default function TopProjectCard(props) {
  return (
    <>
      <div className="flex md:flex-row md:justify-center items-center">
        <div
          className="h-auto rounded-xl md:m-4 md:p-10 p-5 flex flex-col justify-center items-center
          hover:bg-opacity-70 transition-all ease-in duration-300 cursor-default hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
        >
          <p className="text-2xl text-blue-200 mb-5 flex font-bold font-manrope">
            {props.name}
          </p>
          <p className="text-white text-md font-medium tracking-wide">
            {props.desc}
          </p>
        </div>
      </div>
    </>
  );
}
