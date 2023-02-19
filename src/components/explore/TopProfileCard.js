import React from "react";

export default function TopProfileCard(props) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-center items-center">
        <div
          className="h-auto rounded-xl md:m-4 md:p-10 p-3 m-10 flex flex-col justify-center items-center
          hover:bg-opacity-70 transition-all ease-in duration-300 cursor-default hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
        >
          <img src={props.avatar} alt="avatar" className="w-28 h-28 rounded-lg md:mb-4" />
          <p className="text-2xl text-blue-200 flex font-bold font-manrope">
            {props.name}
          </p>
          <p className="text-slate-300 text-md font-medium tracking-wide italic mb-3">
            @{props.username}
          </p>
          <p className="text-white text-md font-medium tracking-wide text-center">
            {props.followers}+ followers <br/>
            {props.contri}+ contributions
            <br />
            Location: {props.location}
          </p>
        </div>
      </div>
    </>
  );
}
