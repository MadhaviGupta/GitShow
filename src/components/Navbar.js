import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex justify-around mx-auto max-h-24 bg-slate-900 bg-opacity-25 drop-shadow-2xl md:mb-20">
      <div className="w-4/6 flex justify-start">
        <div className="w-2/12 flex content-center items-center">
          <img className="w-4/6 p-4" src={logo} alt="Gitshow logo"></img>
          {/* <span className="text-blue-300 text-2xl text-bold">gitshow</span> */}
        </div>
        <ul className="w-4/12 font-manrope flex justify-around text-slate-200 items-center font-medium">
          <li>
            <a className="hover:text-blue-400" href="#features">
              Features
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="#people">
              People
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="#support">
              Support
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="#blog">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[15%] flex items-center justify-between">
        <a
          className="text-slate-200 p-4 w-full hover:text-blue-400"
          href="join"
        >
          Join Now{" "}
        </a>
        <Link
          className="text-slate-200 p-4 w-full border-2 border-blue-300 rounded-full text-center hover:bg-orange-900 hover:bg-opacity-40 hover:font-semibold"
          to={"/login"}
        >
          <button>Sign In</button>
        </Link>
      </div>
    </nav>
  );
}
