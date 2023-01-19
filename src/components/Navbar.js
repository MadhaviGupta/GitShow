import logo from "../assets/logo1.png";
export default function Navbar() {
  return (
    <nav className="flex justify-around mx-auto max-h-24 bg-slate-900 bg-opacity-25 drop-shadow-2xl mb-20">
      <div className="w-4/6 flex justify-start">
        <div className="w-2/12 flex content-center items-center">
          <img className="w-4/6 p-4" src={logo}></img>
          {/* <span className="text-blue-300 text-2xl text-bold">gitshow</span> */}
        </div>
        <ul className="w-4/12 font-manrope flex justify-around text-slate-200 items-center font-medium">
          <li>
            <a className="hover:text-blue-400" href="">
              Features
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="">
              People
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="">
              Support
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[15%] flex items-center justify-between">
        <a className="text-slate-200 p-4 w-full hover:text-blue-400" href="">
          Join Now{" "}
        </a>

        <a
          className="text-slate-200 p-4 w-full border-2 border-blue-300 rounded-full text-center hover:bg-orange-900"
          href=""
        >
          Sign In
        </a>
      </div>
    </nav>
  );
}
