import React from "react";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-orange-800 h-screen to-blue-900">
      <Navbar />
      <h3 className="text-4xl text-slate-50 font-bold text-center">
        Team SMG!
      </h3>
      <h1 className="text-6xl text-slate-50 font-bold text-center">
        Welcome to Gitshow!
      </h1>
    </div>
  );
}
