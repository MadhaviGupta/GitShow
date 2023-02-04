import { useState } from "react";
import { FiImage, FiVideo } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import user from "../assets/user.png";
import db from "../firebase.config";
import firebase from "firebase";

export default function CreatePost() {
  const [input, setInput] = useState("");
  const [file, setFile] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      logo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/29/15/hp.jpg?quality=75&width=982&height=726&auto=webp",
      name: "Harry Potter",
      username: "HarryPotter",
      bio: "The boy who lived",
      description: input,
      image:
        "http://assets1.ignimgs.com/vid/thumbnails/user/2013/12/18/20823568_harry-ron-and-hermione-harry-potter-19115125-1500-1843.jpg",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    // alert(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl px-4 py-2 flex flex-col"
    >
      <h1 className="text-xl font-semibold">Home</h1>
      <div className="flex flex-col text-center justify-center items-center">
        <div className="flex w-full items-center">
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/29/15/hp.jpg?quality=75&width=982&height=726&auto=webp"
            alt="user"
            className="w-12 h-12 rounded-[50%]"
          />
          <input
            className="w-full h-14 m-3 p-3 rounded-md bg-blue-400 bg-opacity-10"
            placeholder="Write something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>

        <div className="flex w-11/12 ml-4 justify-between">
          <div className="flex w-2/6 justify-around items-center ml-5">
            <label>
              <FiImage className="text-slate-300 h-5 w-8 cursor-pointer" />
              <input
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <label>
              <FiVideo className="text-slate-300 h-5 w-8 cursor-pointer" />
              <input
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <label>
              <HiOutlineDocumentText className="text-slate-300 h-5 w-8 cursor-pointer" />
              <input
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-black bg-opacity-80 p-2 rounded-lg w-2/12 text-purple-400 hover:bg-opacity-100 hover:font-semibold"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
