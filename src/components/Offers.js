import chat from "../assets/chat.gif";

export default function Offers() {
  return (
    <>
      <div className="flex flex-col items-center mt-64">
        <span className="text-4xl md:text-5xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mb-5">
          Discover what we offer.
          <hr className="my-2 opacity-25 w-full"></hr>
        </span>
      </div>
      {/* card1 */}
      <div className="flex flex-col justify-center">
        <div className="md:flex md:flex-row mx-8 md:mx-20 my-6 justify-center">
          <div
            className="md:w-1/2 h-80 bg-black bg-opacity-[0.2] backdrop-blur-lg rounded-2xl md:m-3 p-10 flex flex-col md:text-center justify-center 
          hover:bg-opacity-70 transition-all ease-in duration-300 cursor-default hover:-translate-y-2 hover:shadow-xl"
          >
            <p className="text-3xl tracking-widest text-blue-200 mb-5 flex justify-center font-bold font-milonga">
              <span className="hidden md:block">👉</span> Show your Github
              Projects.
            </p>
            <p className="text-white text-xl font-medium">
              Showcase others all your projects, what you're building and what
              you're working on.
            </p>
          </div>
          <img
            src="https://media.giphy.com/media/zCR9qJMsMkIrQbbHFI/giphy.gif"
            alt="harry"
            className="rounded-2xl shadow-xl md:w-1/3 h-80 md:m-3 opacity-20 md:opacity-100 relative md:static bottom-80"
          />
        </div>
        {/* card2 */}
        <div className="md:flex mx-8 md:mx-20 md:my-6 justify-center -my-56">
          <img
            src="https://media1.giphy.com/media/BJmTtZL4hova8/giphy.gif?cid=ecf05e477mlnbtni0phqh48ekfkxjp7i3pjy9jmgp51fn6qs&rid=giphy.gif&ct=g"
            alt="harry"
            className="rounded-2xl shadow-xl md:w-1/3 h-80 md:m-3 opacity-20 md:opacity-100 relative bottom-16 md:static z-30"
          />
          <div className="md:w-1/2 h-80 bg-black bg-opacity-20 cursor-default rounded-2xl md:m-3 p-10 flex flex-col md:text-center justify-center hover:bg-opacity-70 transition-all ease-in duration-300 delay-90 hover:-translate-y-2 hover:shadow-xl relative bottom-96 md:static">
            <p className="text-3xl tracking-widest text-blue-200 mb-5 font-bold font-milonga ">
              <span className="hidden md:block">👉</span> Check what others are
              creating.
            </p>
            <p className="text-white text-xl font-medium">
              You can also see what others are building and how you can learn
              from it.
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="md:flex mx-8 md:mx-20 md:my-6 justify-center -my-24">
          <div className="md:w-1/2 h-80 bg-black bg-opacity-20 hover:bg-opacity-70 transition-all ease-in duration-300 cursor-default backdrop-blur-lg rounded-2xl md:m-3 p-10 flex flex-col md:text-center justify-center delay-90 hover:-translate-y-2 hover:shadow-xl">
            <p className="text-3xl tracking-widest text-blue-200 mb-5 font-bold font-milonga">
              <span className="hidden md:block">👉</span> Chat with fellow
              coders.
            </p>
            <p className="text-white text-xl font-medium">
              Get connected with your peers and chat with them about what new
              stuff can be created.
            </p>
          </div>
          <img
            src={chat}
            alt="harry"
            className="rounded-2xl shadow-xl md:w-1/3 h-80 md:m-3 opacity-20 md:opacity-100 relative md:static bottom-80"
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
