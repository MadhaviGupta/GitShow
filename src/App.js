import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-orange-800 h-screen to-blue-900 font-inter">
      <Navbar />
      <Hero />
    </div>
  );
}
