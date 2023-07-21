import React from "react";
import user from "../../assets/user.png";
import { useRef } from "react";

function TestimonialCard(props) {
  return (
    <div className="h-[20rem] min-w-[19rem] text-blue-800 hover:text-blue-400 cursor-default bg-blue-100 bg-opacity-90 hover:bg-black transition-all duration-1000 ease-out rounded-xl my-4 mx-6 p-5 shadow-xl">
      <div className="flex flex-col items-center text-center">
        <img src={user} alt="user" className="w-12 h-12" />
        <p className="m-2 text-2xl font-semibold">{props.name}</p>
        <p className="text-sm text-gray-600 font-semibold mb-4">{props.desg}</p>
        <p className="max-h-36 text-justify text-sm py-1 font-semibold">
          {props.desc}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  let people = [
    {
      name: "Utkarsh Chourasia",
      desg: "GoLang Developer",
      desc: "I think GitShow is a great extension of GitHub's Explore page. Apart from finding new new project, with GitShow, I can get updates directly from some of favourite projects.",
    },
    {
      name: "Shristi Gupta",
      desg: "Full Stack Developer",
      desc: "The UI/UX of project is very creative & eye-catching. The animation on the 'Get onboard' button is my favourite. I personally think that such themes make people interested in working upon it's environment. A big appreciation for the creators from my side.",
    },
    {
      name: "Sunidhi Vyas",
      desg: "Frontend Developer",
      desc: "This app is really very helpful ,with the help of this I have just come to know about others project and can get an excellent idea for my project.",
    },
  ];
  return (
    <>
      <div
        id="people"
        className="flex flex-col items-center md:mt-64 w-10/12 m-auto md:w-full"
      >
        <span className="text-2xl md:text-5xl md:text-left text-center text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mb-16">
          What users say about us.
          <hr className="my-2 opacity-25 w-full"></hr>
        </span>
      </div>
      <div className="h-auto mx-10 md:mx-56">
        <div className="flex flex-col md:flex-row w-full h-auto">
          <ul
            ref={ref}
            className="scrollbar flex w-full list-none overflow-x-scroll pb-6"
          >
            {people.map((obj) => (
              <TestimonialCard
                key={obj.name}
                name={obj.name}
                desg={obj.desg}
                desc={obj.desc}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
