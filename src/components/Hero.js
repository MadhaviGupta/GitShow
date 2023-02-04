import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="md:w-[70%] flex flex-col md:flex-row m-auto rounded-xl">
      <div className="md:w-7/12 md:p-8 flex flex-col mt-32 md:mt-40">
        <h1 className="text-6xl md:text-7xl text-slate-50 font-bold my-10 text-center md:text-left">
          Welcome to{" "}
          <span className="bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text">
            GitShow
          </span>
          🪄
        </h1>
        <h4 className="text-blue-100 text-xl text-center md:text-left font-manrope">
          Show <span className="font-milonga tracking-wide text-2xl">what</span>{" "}
          you are,{" "}
          <span className="font-milonga tracking-wide text-2xl">where</span> it
          is needed.
        </h4>
        <img
          className="w-11/12 mt-16 md:hidden rounded-2xl md:w-5/12 md:h-2/4 m-auto md:rounded-lg shadow-2xl md:mt-60 opacity-20"
          src="https://media3.giphy.com/media/RyLtUMBdogHvO/giphy.gif?cid=ecf05e47i9g5zzurwzcjgcv2fzadnnzh9rb22psgo7ft40hu&rid=giphy.gif&ct=g"
          alt="hermione doing magic"
        ></img>
        <div className="md:mt-10 flex flex-col text-center md:text-left md:w-3/6 relative bottom-44 md:static">
          <h3 className="text-3xl text-blue-200 mb-5 font-manrope font-bold">
            Feeling Excited?
          </h3>
          <Link to={"/home"}>
            <button className="w-3/6 mt-5 md:mt-2 md:w-4/6 p-3 md:p-4 bg-purple-800 bg-opacity-40 border-2 border-white hover:bg-opacity-100 hover:border-purple-800 text-slate-50 rounded-full font-semibold  transition-all ease-out duration-150">
              Get onboard! 🚂
            </button>
          </Link>
        </div>
      </div>
      <img
        className="w-10/12 hidden md:block rounded-2xl md:w-5/12 md:h-2/4 m-auto md:rounded-lg shadow-2xl md:mt-60"
        src="https://media3.giphy.com/media/RyLtUMBdogHvO/giphy.gif?cid=ecf05e47i9g5zzurwzcjgcv2fzadnnzh9rb22psgo7ft40hu&rid=giphy.gif&ct=g"
        alt="hermione doing magic"
      ></img>
    </div>
  );
}
