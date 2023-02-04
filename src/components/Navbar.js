import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

export default function Navbar() {
  let Links = [
    { name: "Features", link: "#" },
    { name: "People", link: "#" },
    { name: "Support", link: "#" },
    { name: "Blog", link: "#" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex px-2 items-center justify-between md:justify-around h-20 md:h-28 bg-slate-900 bg-opacity-30 backdrop-blur-lg drop-shadow-2xl md:mb-20 z-50 fixed w-full">
      <div className="w-2/12 h-full md:w-4/6 flex justify-start font-manrope">
        <div className="md:p-0 md:w-2/12 w-7/12 p-0.5 md:flex content-center items-center">
          <img
            className="md:w-28 md:h-28 md:p-4 p-1"
            src={logo}
            alt="Gitshow logo"
          ></img>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-slate-100 md:hidden absolute right-4 top-6 cursor-pointer text-3xl"
        >
          {open ? <RxCross1 /> : <HiMenuAlt3 />}
        </div>
        <ul
          className={`md:flex md:justify-end md:bg-none bg-gradient-to-br from-orange-800 to-blue-900 text-slate-200 md:items-center font-semibold md:text-lg text-xl md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100 opacity-20 rounded-lg`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:my-0 my-6">
              <a
                className="md:m-5 text-white hover:bg-gradient-to-br hover: from-blue-400 to-orange-500 hover:text-transparent bg-clip-text hover:text-lg"
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/12 flex items-center justify-around w-4/12 mx-4">
        <Link
          className="text-blue-100 mx-2 py-1 md:py-2 px-2 md:px-4 border-2 rounded-full border-blue-50 hover:bg-black hover:text-white hover:border-black transition-all ease-out duration-150"
          to={"/home"}
        >
          <button className="flex items-center justify-evenly w-20 m-auto">
            Login <FiGithub />
          </button>
        </Link>
      </div>
    </nav>
  );
}
