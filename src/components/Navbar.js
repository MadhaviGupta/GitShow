import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="flex px-2 items-center justify-between md:justify-around h-20 md:h-24 bg-slate-900 bg-opacity-30 backdrop-blur-lg drop-shadow-2xl md:mb-20 z-50 fixed w-full">
      <div className="w-2/12 h-full md:w-4/6 flex justify-start font-manrope">
        <div className="w-full md:p-0 md:w-2/12 flex content-center items-center">
          <img className="md:w-7/12 md:p-4" src={logo} alt="Gitshow logo"></img>
        </div>
        <ul className="w-0 md:w-4/12 md:flex justify-around text-slate-200 items-center font-semibold text-md hidden">
          <li>
            <a className="m-5 hover:text-blue-400" href="#features">
              Features
            </a>
          </li>
          <li>
            <a className="m-5 hover:text-blue-400" href="#people">
              People
            </a>
          </li>
          <li>
            <a className="m-5 hover:text-blue-400" href="#support">
              Support
            </a>
          </li>
          <li>
            <a className="m-5 hover:text-blue-400" href="#blog">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="md:w-1/12 flex items-center justify-around">
        <Link
          className="text-blue-100 mx-2 py-1 md:py-2 px-2 md:px-4 border-2 rounded-full border-blue-50 hover:bg-black hover:text-white hover:border-black transition-all ease-out duration-150"
          to={"/home"}
        >
          <button className="flex items-center justify-evenly w-20 m-auto">
            Login <FiGithub />
          </button>
        </Link>
        <HiMenuAlt3 className="text-slate-100 md:hidden w-10 text-3xl" />
      </div>
    </nav>
  );
}
