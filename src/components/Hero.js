import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="md:w-[70%] flex flex-col md:flex-row m-auto rounded-xl">
      <div className="md:w-7/12 p-8 flex flex-col mt-32 md:mt-40">
        <h1 className="text-6xl md:text-7xl text-slate-50 font-bold my-10">
          Welcome to{" "}
          <span className="bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text">
            Gitshow
          </span>
          🪄
        </h1>
        <h4 className="text-blue-100 text-xl">
          Show{" "}
          <span className="font-bold font-milonga tracking-wide">what</span> you
          are,{" "}
          <span className="font-bold font-milonga tracking-wide">where</span> it
          is needed.
        </h4>
        <div className="mt-10 flex flex-col w-4/6 md:w-3/6">
          <h3 className="text-3xl tracking-wider text-blue-200 mb-5 font-milonga">
            Feeling Excited?
          </h3>
          <Link to={"/login"}>
            <button className="w-4/6 p-4 bg-purple-900 bg-opacity-90 text-slate-50 rounded-full font-semibold hover:bg-black hover:bg-opacity-80">
              Get onboard! 🚂
            </button>
          </Link>
        </div>
      </div>
      <img
        className="w-10/12 rounded-2xl md:w-5/12 md:h-2/4 m-auto md:rounded-lg shadow-2xl md:mt-60"
        src="https://media3.giphy.com/media/RyLtUMBdogHvO/giphy.gif?cid=ecf05e47i9g5zzurwzcjgcv2fzadnnzh9rb22psgo7ft40hu&rid=giphy.gif&ct=g"
        alt="hermione doing magic"
      ></img>
    </div>
  );
}
