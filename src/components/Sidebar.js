import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { BiSearchAlt } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import logo from "../assets/logo1.png";
import { useEffect, useState } from "react";
export default function Sidebar() {
  const [active, setActive] = useState("");
  const path = window.location.pathname;
  useEffect(() => {
    if (path === "/home") {
      setActive("home");
    }
    if (path === "/explore") {
      setActive("explore");
    }
    if (path === "/notifications") {
      setActive("notifications");
    }
    if (path === "/messages") {
      setActive("messages");
    }
    if (path === "/profile") {
      setActive("profile");
    }
  }, []);
  return (
    <div className="w-full font-manrope tracking-wide z-50 fixed bottom-0 mt-10 md:top-0 md:left-48 md:w-1/6 md:h-auto bg-slate-600 bg-opacity-10 backdrop-blur-lg rounded-2xl md:m-3 md:p-3 flex flex-row md:flex-col md:items-center text-white text-xl">
      <ul className="w-full flex justify-around items-center md:items-start md:flex-col p-2 md:p-0">
        <li className="md:flex hidden">
          <div className="flex items-center">
            <img
              className="w-1/6 md:w-2/6 md:ml-5 mt-4"
              src={logo}
              alt="Gitshow logo"
            ></img>
          </div>
        </li>
        <li className="w-full md:mt-10 md:mb-2 mx-2 md:mx-0">
          <Link to={"/home"}>
            <div
              className={`flex ${
                active === "home"
                  ? "text-purple-400 bg-black rounded-lg"
                  : "hover:text-purple-400 hover:bg-black hover:rounded-lg"
              } p-2`}
            >
              <TiHomeOutline className="md:m-2 m-auto" />
              <span className="m-1 hidden md:block">Home</span>
            </div>
          </Link>
        </li>
        <li className="w-full md:mb-2 mx-2 md:mx-0">
          <Link to={"/explore"}>
            <div
              className={`flex ${
                active === "explore"
                  ? "text-purple-400 bg-black rounded-lg"
                  : "hover:text-purple-400 hover:bg-black hover:rounded-lg"
              } p-2`}
            >
              <BiSearchAlt className="md:m-2 m-auto" />
              <span className="m-1 hidden md:block">Explore</span>
            </div>
          </Link>
        </li>
        <li className="w-full md:mb-2 mx-2 md:mx-0">
          <Link to={"/notifications"}>
            <div
              className={`flex ${
                active === "notifications"
                  ? "text-purple-400 bg-black rounded-lg"
                  : "hover:text-purple-400 hover:bg-black hover:rounded-lg"
              } p-2`}
            >
              <FiBell className="m-auto md:m-2" />
              <span className="m-1 hidden md:block">Notifications</span>
            </div>
          </Link>
        </li>
        <li className="w-full md:mb-2 mx-2 md:mx-0">
          <Link to={"/messages"}>
            <div
              className={`flex ${
                active === "messages"
                  ? "text-purple-400 bg-black rounded-lg"
                  : "hover:text-purple-400 hover:bg-black hover:rounded-lg"
              } p-2`}
            >
              <FiMessageSquare className="m-auto md:m-2" />
              <span className="m-1 hidden md:block">Messages</span>
            </div>
          </Link>
        </li>
        <li className="w-full md:mb-2 mx-2 md:mx-0">
          <Link to={"/profile"}>
            <div
              className={`flex ${
                active === "profile"
                  ? "text-purple-400 bg-black rounded-lg"
                  : "hover:text-purple-400 hover:bg-black hover:rounded-lg"
              } p-2`}
            >
              <FiUser className="m-auto md:m-2" />
              <span className="m-1 hidden md:block">Profile</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
