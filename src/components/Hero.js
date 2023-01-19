import heroImg from "../assets/project.svg";

export default function Hero() {
  return (
    <div className="w-4/6 m-auto flex bg-black bg-opacity-25 backdrop-blur-2xl h-[32rem] rounded-xl">
      <div className="w-3/6  p-10 flex flex-col justify-center">
        <h3 className="text-2xl text-blue-200">
          Ever wanted a platform to showcase your coding skills?
        </h3>
        <h1 className="text-6xl text-slate-50 font-bold my-6">
          Welcome to{" "}
          <span className="bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text">
            Gitshow!
          </span>
        </h1>
        <ul className="text-blue-200">
          <li>👉 Show Github Projects.</li>
          <li>👉 Check what others are creating.</li>
          <li>👉 Chat with fellow coders.</li>
          <li>👉 Get hired based on your skills.</li>
        </ul>
      </div>
      <img className="w-3/6 m-auto opacity-90 z-10" src={heroImg}></img>
    </div>
  );
}
