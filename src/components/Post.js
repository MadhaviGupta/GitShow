import user from "../assets/user.png";
import { FiHeart, FiSend } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";

export default function Post() {
  return (
    <div className="my-2 flex flex-col items-center w-full h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl">
      <div className="flex justify-items-start m-3">
        <img src={user} alt="user" className="w-8 h-8" />
        <p className="my-1 mx-2">George Weasely</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1618944847023-38aa001235f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        alt="feed"
        className="w-4/5 h-4/6 mx-5 my-3"
      />
      <div className="flex p-2">
        <div className="flex mx-5">
          <FiHeart className="mx-3 text-2xl text-white" />
          <p className="text-white">3</p>
        </div>
        <div className="flex mx-5">
          <FaRegCommentDots className="mx-3 text-2xl text-white" />
          <p className="text-white">3</p>
        </div>
        <div className="mx-4">
          <FiSend className="text-2xl text-white" />
        </div>
      </div>
      <hr className="my-2 opacity-25 w-full"></hr>
    </div>
  );
}
