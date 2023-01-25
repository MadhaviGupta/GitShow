import chat from "../assets/chat.gif";
import show from "../assets/show.gif";
export default function Offers() {
  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-semibold mb-5">
          Discover what we offer.
          <hr className="my-2 opacity-25 w-full"></hr>
        </span>
      </div>
      {/* card1 */}
      <div className="flex flex-col justify-center">
        <div className="flex mx-20 my-6 justify-center">
          <div
            className="w-1/2 h-80 bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-3 flex flex-col text-center justify-center 
          transition ease-in-out delay-90 hover:-translate-y-2 hover:shadow-xl"
          >
            <p className="text-3xl tracking-wider text-blue-200 mb-5">
              👉 Show your Github Projects.
            </p>
            <p className="text-orange-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis dolore, eveniet doloribus sapiente quaerat libero
              fugiat, enim voluptas nisi eos quidem soluta commodi eaque at
              consequatur accusamus doloremque, accusantium architecto neque
              magni ipsam! Adipisci dolorum repellat excepturi eligendi debitis
              ipsam quos. Dicta nostrum quibusdam deserunt.
            </p>
          </div>
          <img
            src={show}
            alt="harry"
            className="rounded-2xl shadow-xl w-1/3 h-80 m-3"
          />
        </div>
        {/* card2 */}
        <div className="flex mx-20 my-6 justify-center">
          <img
            src="https://media.giphy.com/media/mz1kJeDVueKC4/giphy.gif"
            alt="harry"
            className="rounded-2xl shadow-xl w-1/3 h-80 m-3"
          />
          <div className="w-1/2 h-80 bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-5 flex flex-col text-center justify-center transition ease-in-out delay-90 hover:-translate-y-2 hover:shadow-xl">
            <p className="text-2xl tracking-wider text-blue-200 mb-5">
              👉 Check what others are creating.
            </p>
            <p className="text-orange-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis dolore, eveniet doloribus sapiente quaerat libero
              fugiat, enim voluptas nisi eos quidem soluta commodi eaque at
              consequatur accusamus doloremque, accusantium architecto neque
              magni ipsam! Adipisci dolorum repellat excepturi eligendi debitis
              ipsam quos. Dicta nostrum quibusdam deserunt.
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="flex mx-20 my-6 justify-center">
          <div className="w-1/2 h-80 bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-5 flex flex-col text-center justify-center transition ease-in-out delay-90 hover:-translate-y-2 hover:shadow-xl">
            <p className="text-2xl tracking-wider text-blue-200 mb-5">
              👉 Chat with fellow coders.
            </p>
            <p className="text-orange-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis dolore, eveniet doloribus sapiente quaerat libero
              fugiat, enim voluptas nisi eos quidem soluta commodi eaque at
              consequatur accusamus doloremque, accusantium architecto neque
              magni ipsam! Adipisci dolorum repellat excepturi eligendi debitis
              ipsam quos. Dicta nostrum quibusdam deserunt.
            </p>
          </div>
          <img
            src={chat}
            alt="harry"
            className="rounded-2xl shadow-xl w-1/3 h-80 m-3"
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
