export default function Hero() {
  return (
    <div className="w-[70%] flex m-auto rounded-xl">
      <div className="w-7/12 p-8 flex flex-col justify-center">
        <h1 className="text-7xl text-slate-50 font-bold my-6">
          Welcome to{" "}
          <span className="bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text">
            Gitshow🪄
          </span>
        </h1>
        <h4 className="text-blue-100 text-xl">
          Show <span className="font-bold">what</span> you are,{" "}
          <span className="font-bold">where</span> it is needed.
        </h4>
        <div className="mt-10  flex flex-col w-3/6">
          <h3 className="text-3xl text-blue-200 mb-5 font-manrope">
            Feeling Excited?
          </h3>
          <button className="w-4/6 p-4 bg-blue-300 bg-opacity-20 text-slate-50 rounded-full font-semibold">
            Get onboard! 🚂
          </button>
        </div>
      </div>
      <img
        className="w-5/12 h-2/4 m-auto rounded-lg shadow-2xl"
        src="https://media3.giphy.com/media/RyLtUMBdogHvO/giphy.gif?cid=ecf05e47i9g5zzurwzcjgcv2fzadnnzh9rb22psgo7ft40hu&rid=giphy.gif&ct=g"
      ></img>
    </div>
  );
}
{
  /* <img className="w-3/6 m-auto opacity-90 z-10" src={heroImg}></img> */
}
