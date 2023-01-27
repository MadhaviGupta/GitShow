import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="flex justify-around mx-auto h-24 md:max-h-24 bg-slate-900 bg-opacity-30 backdrop-blur-lg drop-shadow-2xl md:mb-20 z-50 fixed w-full">
      <div className="w-4/6 flex justify-start">
        <div className="w-3/12 p-2 md:p-0 md:w-2/12 flex content-center items-center">
          <img className="md:w-4/6 md:p-4" src={logo} alt="Gitshow logo"></img>
        </div>
        <ul className="w-4/12 md:flex justify-around text-slate-200 items-center font-semibold text-md hidden">
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
      <div className="md:w-1/12 flex items-center justify-between">
        <Link
          className="text-blue-800 p-4 w-full bg-blue-100 bg-opacity-90 rounded-full text-center hover:bg-black hover:text-blue-50 hover:bg-opacity-80 hover:font-semibold transition-all duration-200"
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
