import React from "react";
import { useRef } from "react";
import { TbExternalLink } from "react-icons/tb";

function TopProjectCard(props) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-center items-center">
        <div className="bg-transparent/70 w-80 h-80 rounded-xl border-4 border-slate-800 md:m-3 md:p-2 p-3 m-8 flex flex-col justify-end items-center transition-all ease-in duration-300 hover:bg-white/90 text-white/70 hover:text-black">
          <div className="p-2 flex flex-col ">
            <p className="text-2xl text-blue-600 mb-5 flex items-center justify-between font-extrabold font-manrope">
              {props.name}
              <a href={props.github} target="_blank">
                <TbExternalLink className="text-slate-600 cursor-pointer" />
              </a>
            </p>
            <p className="text-sm md:text-[0.9rem] font-medium tracking-wide">
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default function TopProjects() {
  const ref = useRef(null);
  let projects = [
    {
      name: "TensorFlow",
      github: "https://github.com/tensorflow/tensorflow",
      desc: "Tensorflow is an open-source software library by Google created for tasks with heavy numerical computations. It helps support machine learning. And because of its phenomenal support and use in Machine Learning & Deep Neural Networks, it has many contributors.",
    },
    {
      name: "d3",
      github: "https://github.com/d3/d3",
      desc: "It is a JavaScript library for visualizing data with the help of web standards. Also, it helps you bring data to life using SVG, Canvas, and HTML. Moreover, It combines powerful visualization and interaction techniques with a data-driven approach to DOM manipulation. ",
    },
    {
      name: "React Native",
      github: "https://github.com/facebook/react-native",
      desc: "Now, you must have heard of it, and in fact, most developers are using this amazing framework. But you need to understand the difference between React and React native. Where React is a library, React Native is a framework that we use for building native apps with react.",
    },
    {
      name: "Linux",
      github: "https://github.com/torvalds/linux",
      desc: "You all must know about Linux. It is one of the most used operating systems which is open-sourced. And no other than Linus Torvalds is one such hero who started this initiative, and because of him, we can use Linux these days. This invention of Torvalds changed the world completely. ",
    },
  ];
  return (
    <>
      <div
        id="projects"
        className="flex justify-center items-center text-2xl font-inter md:text-center md:text-4xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mt-20 md:mb-4 m-4 md:w-[48rem]"
      >
        Find Top GitHub Projects
      </div>
      <div className="hidden md:flex mx-4 justify-center">
        <img
          src="https://media.giphy.com/media/I7sbqlUBc4hSE/giphy.gif"
          alt="find"
          className="rounded-xl my-10"
        ></img>
      </div>
      <div className="flex flex-col md:flex-row mx-4 w-[23rem] md:w-[48rem]">
        <ul
          ref={ref}
          className="scrollbar flex list-none md:w-full overflow-x-scroll mb-10"
        >
          {projects.map((project) => (
            <TopProjectCard
              key={project.name}
              name={project.name}
              github={project.github}
              desc={project.desc}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
