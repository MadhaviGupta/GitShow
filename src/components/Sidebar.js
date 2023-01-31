import { Link } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { BiSearchAlt } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import logo from "../assets/logo1.png";
import { MdOutlineCreate } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="w-full z-50 fixed bottom-0 mt-10 md:top-0 md:left-48 md:w-1/6 md:h-screen bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl md:m-3 md:p-3 flex flex-row md:flex-col md:items-center text-white text-xl">
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
        <li className="w-full md:mt-10 md:mb-2">
          <Link to={"/home"}>
            <div className="flex hover:text-orange-600 hover:bg-black hover:rounded-lg p-2">
              <TiHomeOutline className="md:m-2 m-auto" />
              <span className="m-1 hidden md:block">Home</span>
            </div>
          </Link>
        </li>
        <li className="w-full md:mb-2">
          <Link to={"/explore"}>
            <div className="flex hover:text-orange-600 hover:bg-black hover:rounded-lg p-2">
              <BiSearchAlt className="md:m-2 m-auto" />
              <span className="m-1 hidden md:block">Explore</span>
            </div>
          </Link>
        </li>
        <li className="w-full md:mb-2">
          <Link to={"/notifications"}>
            <div className="flex hover:text-orange-600 hover:bg-black hover:rounded-lg p-2">
              <FiBell className="m-auto md:m-2" />
              <span className="m-1 hidden md:block">Notifications</span>
            </div>
          </Link>
        </li>
        <li className="w-full md:mb-2">
          <Link to={"/messages"}>
            <div className="flex hover:text-orange-600 hover:bg-black hover:rounded-lg p-2">
              <FiMessageSquare className="m-auto md:m-2" />
              <span className="m-1 hidden md:block">Messages</span>
            </div>
          </Link>
        </li>
        <li className="w-full md:mb-2">
          <Link to={"/profile"}>
            <div className="flex hover:text-orange-600 hover:bg-black hover:rounded-lg p-2">
              <FiUser className="m-auto md:m-2" />
              <span className="m-1 hidden md:block">Profile</span>
            </div>
          </Link>
        </li>
        <li className="w-full md:mb-6">
          <Link to={"/network"}>
            <div className="flex hover:text-orange-600 hover:bg-black hover:rounded-lg p-2">
              <AiOutlineUsergroupAdd className="m-auto md:m-2" />
              <span className="m-1 hidden md:block">My Network</span>
            </div>
          </Link>
        </li>
        <li className="md:block hidden w-full">
          <Link to={"#"}>
            <div className="flex text-orange-500 bg-black rounded-lg p-2 justify-center">
              {/* <MdOutlineCreate className="m-auto md:m-2" /> */}
              <span className="m-1 hidden md:block">Write Post</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
