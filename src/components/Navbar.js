import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex justify-around mx-auto max-h-24 bg-slate-900 bg-opacity-25 drop-shadow-2xl md:mb-20">
      <div className="w-4/6 flex justify-start">
        <div className="w-2/12 flex content-center items-center">
          <img className="w-4/6 p-4" src={logo} alt="Gitshow logo"></img>
        </div>
        <ul className="w-4/12 flex justify-around text-slate-200 items-center font-semibold text-md">
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
      <div className="w-[15%] flex items-center justify-between">
        <Link
          className="text-slate-200 p-4 w-full font-semibold hover:text-blue-400"
          to={"/join"}
        >
          <button>Join Now</button>
        </Link>
        <Link
          className="text-slate-200 p-4 w-full bg-blue-200 bg-opacity-20 rounded-full text-center hover:bg-purple-400 hover:bg-opacity-80 hover:font-semibold transition-all duration-200"
          to={"/login"}
        >
          <button>Sign In</button>
        </Link>
      </div>
    </nav>
  );
}
