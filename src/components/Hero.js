import harry from "../assets/harry.png";

export default function Hero(props) {
  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     // navigate("/home");
  //     console.log("User is signed in");
  //   } else {
  //     // navigate("/");
  //     console.log("User is signed out");
  //   }
  // });

  return (
    <div className="md:w-full flex flex-col md:flex-row m-auto rounded-xl">
      <img
        className="w-full m-auto rounded-md h-[44rem] md:h-[50rem] opacity-[0.15] md:opacity-25"
        src="https://cdn.pixabay.com/photo/2018/06/15/11/16/hogwarts-3476786_960_720.png"
        alt="hero-img"
      ></img>
      <div className="md:w-6/12 px-10 py-6 absolute top-20 md:top-44 md:left-64">
        <h1 className="text-6xl md:text-7xl text-slate-50 font-bold my-16 text-center md:text-left">
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
        <div className="md:mt-10 mt-20 flex flex-col text-center md:text-left md:w-3/6 md:static">
          <h3 className="text-3xl text-blue-200 mb-5 font-manrope font-bold">
            Feeling Excited?
          </h3>
          <div>
            <button
              onClick={props.authenticateUser}
              className="w-3/6 mt-5 md:mt-2 md:w-4/6 p-3 md:p-4 bg-purple-800 bg-opacity-40 border-2  hover:bg-opacity-100 hover:border-purple-800 text-slate-50 rounded-full font-semibold  transition-all ease-out duration-150"
            >
              Get onboard! 🚂
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:absolute top-48 right-40">
        <img alt="harry-illustration" src={harry}></img>
      </div>
    </div>
  );
}
