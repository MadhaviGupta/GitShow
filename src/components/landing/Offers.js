import chat from "../../assets/chat.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Offers() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        id="features"
        className="flex flex-col items-center mt-44 w-10/12 md:w-11/12 m-auto"
      >
        <span className="text-[1.6rem] text-left md:text-5xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mb-5">
          Discover what we offer.
          <hr className="my-2 opacity-25 w-full"></hr>
        </span>
      </div>
      <div className="flex flex-col">
        {/* card1 */}
        <div className="mx-4 md:flex md:flex-row md:mx-0 my-6 justify-center items-center">
          <div
            className="md:w-1/3 h-80 rounded-2xl md:my-32 p-10 flex flex-col justify-center items-left
          hover:bg-opacity-70 transition-all ease-in duration-300 cursor-default hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-500/20"
            data-aos="fade-right"
          >
            <p className="text-2xl md:text-5xl text-blue-200 mb-5 flex justify-center font-bold font-manrope w-2/3">
              Show your Github Projects.
            </p>
            <p className="text-white text-lg font-medium w-4/6 tracking-wide">
              Showcase others all your projects, what you're building and what
              you're working on.
            </p>
          </div>
          <img
            src="https://media.giphy.com/media/zCR9qJMsMkIrQbbHFI/giphy.gif"
            alt="harry"
            className="rounded-2xl shadow-xl md:w-1/3 h-80 md:m-3 opacity-25 md:opacity-100 relative md:static bottom-80"
          />
        </div>
        {/* card2 */}
        <div className="mx-4 md:flex md:my-6 md:mx-0 justify-center items-center -my-56 md:bg-black md:h-screen">
          <img
            src="https://media1.giphy.com/media/BJmTtZL4hova8/giphy.gif?cid=ecf05e477mlnbtni0phqh48ekfkxjp7i3pjy9jmgp51fn6qs&rid=giphy.gif&ct=g"
            alt="harry"
            className="rounded-2xl shadow-xl md:w-1/3 h-80 md:m-3 opacity-25 md:opacity-100 relative bottom-16 md:static z-30"
          />
          <div
            className="md:w-1/3 h-80 md:bg-black bg-opacity-20 cursor-default rounded-2xl md:m-3 p-10 flex flex-col justify-center items-end text-right hover:bg-opacity-70 transition-all ease-in duration-300 delay-90 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-800/80 relative bottom-96 md:static"
            data-aos={`${window.innerWidth > 768 ? "fade-left" : "fade-right"}`}
          >
            <p className="text-2xl md:text-5xl text-blue-200 mb-5 font-bold font-manrope flex justify-center w-2/3">
              Check what others are creating.
            </p>
            <p className="text-white text-lg font-medium w-4/6 tracking-wide">
              You can also see what others are building and how you can learn
              from it.
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="mx-4 md:flex md:mx-0 md:my-32 justify-center -my-24">
          <div
            className="md:w-1/3 h-80 transition-all ease-in duration-300 cursor-default backdrop-blur-lg rounded-2xl md:m-3 p-10 flex flex-col justify-center items-left delay-90 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-500/20"
            data-aos="fade-right"
          >
            <p className="text-2xl md:text-5xl text-blue-200 mb-5 font-bold font-manrope flex justify-center w-2/3">
              Chat with fellow coders.
            </p>
            <p className="text-white text-lg font-medium w-4/6 tracking-wide">
              Get connected with your peers and chat with them about what new
              stuff can be created.
            </p>
          </div>
          <img
            src={chat}
            alt="harry"
            className="rounded-2xl shadow-xl md:w-1/3 h-80 md:m-3 opacity-25 md:opacity-100 relative md:static bottom-80"
          />
        </div>
      </div>
    </>
  );
}

/* <li>👉 Show Github Projects.</li>
          <li>👉 Check what others are creating.</li>
          <li>👉 Chat with fellow coders.</li>
          <li>👉 Get hired based on your skills.</li> */
