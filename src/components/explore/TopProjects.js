import React from "react";
import { useRef } from "react";

function TopProjectCard(props) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-center items-center w-96">
        <div
          className="h-96 w-96 rounded-xl md:m-4 md:p-8 p-3 m-10 flex flex-col justify-center items-center
          hover:bg-opacity-70 transition-all ease-in duration-300 cursor-pointer hover:shadow-2xl hover:shadow-gray-500/30"
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
export default function TopProjects() {
  const ref = useRef(null);
  let projects = [
    {
      name: "TensorFlow",
      desc: "Tensorflow is an open-source software library by Google created for tasks with heavy numerical computations. It helps support machine learning. And because of its phenomenal support and use in Machine Learning & Deep Neural Networks, it has many contributors. Also, now most developers use this library, and as it is open-sourced, they keep contributing to it.",
    },
    {
      name: "d3",
      desc: "It is a JavaScript library for visualizing data with the help of web standards. Also, it helps you bring data to life using SVG, Canvas, and HTML. Moreover, It combines powerful visualization and interaction techniques with a data-driven approach to DOM manipulation. This will provide you with the freedom to design the right visual interface for your data.",
    },
    {
      name: "React Native",
      desc: "Now, you must have heard of it, and in fact, most developers are using this amazing framework. But you need to understand the difference between React and React native. Where React is a library, React Native is a framework that we use for building native apps with react.",
    },
    {
      name: "Linux",
      desc: "You all must know about Linux. It is one of the most used operating systems which is open-sourced. And no other than Linus Torvalds is one such hero who started this initiative, and because of him, we can use Linux these days. This invention of Torvalds changed the world completely. And one more interesting thing is that he also created Git in 2005 to develop the Linux Kernel.",
    },
  ];

  return (
    <>
      <div
        id="#projects"
        className="text-4xl font-inter text-center md:text-4xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mt-20 md:mb-4 m-4"
      >
        Find Top GitHub Projects
      </div>
      <div className="flex mx-4 justify-center">
        <img
          src="https://media.giphy.com/media/I7sbqlUBc4hSE/giphy.gif"
          alt="find"
          className="rounded-xl my-10"
        ></img>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <ul
          ref={ref}
          className="flex md:flex-row flex-col list-none md:overflow-x-scroll md:px-10"
        >
          {projects.map((project) => (
            <TopProjectCard
              key={project.name}
              name={project.name}
              desc={project.desc}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
