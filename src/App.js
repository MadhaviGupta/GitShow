import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Offers from "./components/Offers";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-full">
      <Navbar />
      <Hero />
      <h3 className="text-slate-400 w-3/6 m-auto text-center my-20">
        Hold on, I'm telling you what we are offering you.
      </h3>
      <Offers />
    </div>
  );
}

{
  /* <li>👉 Show Github Projects.</li>
          <li>👉 Check what others are creating.</li>
          <li>👉 Chat with fellow coders.</li>
          <li>👉 Get hired based on your skills.</li> */
}
