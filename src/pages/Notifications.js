import Sidebar from "../components/Sidebar";

export default function Notifications() {
  return (
    <div className="w-full font-manrope tracking-wide flex flex-row bg-[#1B2430] bg-cover md:justify-end h-screen text-white">
      <Sidebar />
      <div className="flex md:w-5/6 justify-center">
        <div className="md:w-4/6 w-full md:ml-4 mx-2 h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl flex flex-col my-3 p-6">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
}
