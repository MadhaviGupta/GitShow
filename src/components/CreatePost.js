import { FiImage, FiVideo } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import user from "../assets/user.png";
export default function CreatePost() {
  return (
    <div className="w-full h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl px-4 py-2 flex flex-col">
      <h1 className="text-xl font-semibold">Home</h1>
      <div className="flex flex-col text-center justify-center items-center">
        <div className="flex w-full items-center">
          <img src={user} alt="user" className="w-10 h-10" />
          <input
            className="w-full h-14 m-3 p-3 rounded-md bg-blue-400 bg-opacity-10"
            placeholder="Write something..."
          ></input>
        </div>
        <div className="flex w-11/12 ml-4 justify-between">
          <div className="flex items-center ml-5">
            <FiImage className="text-slate-300 h-5 w-8" />
            <FiVideo className="text-slate-300 h-5 w-8" />
            <HiOutlineDocumentText className="text-slate-300 h-5 w-8" />
          </div>
          <button className="bg-black p-2 rounded-lg w-2/12 text-orange-500">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
