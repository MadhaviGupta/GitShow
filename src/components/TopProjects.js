import React, { useState } from "react";
import TopProjectCard from "./TopProjectCard";

export default function TopProjects() {
  let projects = [
    {
      name: "TensorFlow",
      desc: "Tensorflow is an open-source software library by Google created for tasks with heavy numerical computations. It helps support machine learning. And because of its phenomenal support and use in Machine Learning & Deep Neural Networks, it has many contributors. Also, now most developers use this library, and as it is open-sourced, they keep contributing to it.",
    },
    {
      name: "d3",
      desc: "It is a JavaScript library for visualizing data with the help of web standards. Also, it helps you bring data to life using SVG, Canvas, and HTML. Moreover, It combines powerful visualization and interaction techniques with a data-driven approach to DOM manipulation. This will provide you with the full capabilities of modern browsers and the freedom to design the right visual interface for your data.",
    },
    // {
    //   name: "React Native",
    //   desc: "Now, you must have heard of it, and in fact, most developers are using this amazing framework. But you need to understand the difference between React and React native. Where React is a library, React Native is a framework that we use for building native apps with react. Looking to build amazing native apps with React? Look no further than our free React Native courses. With hours of content, you will learn everything you need to get started with React Native and be well on your way to becoming a pro!",
    // },
    // {
    //   name: "Linux",
    //   desc: "You all must know about Linux. It is one of the most used operating systems which is open-sourced. And no other than Linus Torvalds is one such hero who started this initiative, and because of him, we can use Linux these days. This invention of Torvalds changed the world completely. And one more interesting thing is that he also created Git in 2005 to develop the Linux Kernel. Can we even imagine the world without his life-changing contributions?",
    // },
  ];

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
        ></img>
      </div>
      <div className="flex w-full">
        {projects.map((project) => (
          <TopProjectCard name={project.name} desc={project.desc} />
        ))}
      </div>
    </>
  );
}
