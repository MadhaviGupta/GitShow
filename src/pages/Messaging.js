import Sidebar from "../components/Sidebar";

export default function Messaging() {
  return (
    <div className="w-full font-manrope tracking-wide flex flex-row bg-[#1B2430] bg-cover md:justify-end h-auto min-h-screen text-white">
      <Sidebar />
      <div className="flex w-full md:w-5/6 justify-center ">
        <div className="w-full md:w-8/12 bg-black/20 my-3 p-4 md:p-6 rounded-2xl flex">
          <div className="w-4/12 md:w-5/12 border-r border-slate-600">
            <h1 className="md:text-2xl font-extrabold ">Messages</h1>
          </div>
          <div className="w-7/12 flex items-center justify-center">
            This feature is yet to be added
          </div>
        </div>
      </div>
    </div>
  );
}
