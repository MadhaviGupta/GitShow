import Sidebar from "../components/Sidebar";

export default function Messaging() {
  return (
    <div className="w-full font-manrope tracking-wide flex flex-row bg-[#1B2430] bg-cover md:justify-end h-auto min-h-screen text-white">
      <Sidebar />
      <div className="flex w-full md:w-5/6 justify-center ">
        <div className="w-full md:w-8/12 bg-black/20 my-3 p-4 md:p-6 rounded-2xl">
          <h1 className="md:text-2xl font-extrabold ">Messages</h1>
          <div className="flex justify-center items-center py-40">
            <img src="https://media.tenor.com/X-e49-s6nXgAAAAC/fredandgeorge-georgeandfred.gif"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
