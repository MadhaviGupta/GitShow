import { FiImage, FiVideo } from "react-icons/fi";
import user from "../assets/user.png";
export default function CreatePost() {
  return (
    <div className="w-full h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl p-4 flex flex-col text-center">
      <div className="flex text-center justify-center items-center">
        <img src={user} alt="user" className="w-10 h-10" />
        <input
          className="w-full h-14 m-3 p-3 rounded-md bg-blue-400 bg-opacity-10"
          placeholder="Write something..."
        ></input>
        <FiImage className="text-slate-300 m-2 h-8 w-8" />
        <FiVideo className="text-slate-300 m-2 h-8 w-8" />
      </div>
      <hr className="my-2 opacity-25 w-full"></hr>
    </div>
  );
}
