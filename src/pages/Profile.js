import React from "react";
import Sidebar from "../components/Sidebar";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-auto bg-cover md:px-40">
        <Sidebar />
      </div>
    </>
  );
}
