import { useState } from "react";
import { FiImage, FiGithub } from "react-icons/fi";
import { HiLink } from "react-icons/hi";
import db from "../../firebase.config";
import firebase from "firebase";

export default function CreatePost(props) {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [clicked, setClicked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Enter something to post!");
    } else {
      db.collection("posts").add({
        logo: props.avatar,
        name: props.name,
        username: props.login,
        bio: props.bio,
        like: 0,
        likedBy: [],
        commentCnt: 0,
        commentObj: [],
        description: input,
        image: image,
        githubLink: githubLink,
        liveLink: liveLink,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
      setImage("");
      setGithubLink("");
      setLiveLink("");
      setClicked(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full font-manrope tracking-wide h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl px-4 py-2 flex flex-col"
    >
      <h1 className="text-xl font-semibold">Home</h1>
      <div className="flex flex-col text-center justify-center items-center">
        <div className="flex w-full items-center">
          <img
            src={props.avatar}
            alt="user"
            className="w-12 h-12 rounded-[50%]"
          />
          <textarea
            rows={2}
            className="w-full m-3 p-3 rounded-md bg-blue-400 bg-opacity-10"
            placeholder="Write something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>

        <div className={`w-full ${clicked ? "static" : "hidden"}`}>
          <div className="flex w-full items-center">
            <FiImage className="w-8 h-8 rounded-[50%] ml-3" />
            <input
              className="w-full h-10 m-3 ml-5 p-3 rounded-md bg-blue-400 bg-opacity-10"
              placeholder="Image link.."
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </div>
          <div className="flex w-full items-center">
            <FiGithub className="w-8 h-8 ml-3 rounded-[50%]" />
            <input
              className="w-full h-10 m-3 p-3 ml-5 rounded-md bg-blue-400 bg-opacity-10"
              placeholder="Github Repo Link..."
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
            ></input>
          </div>

          {/* <div>
            {selectedImage && (
              <div>
                <div className="flex justify-center">
                  <img
                    alt="not found"
                    width={"250px"}
                    src={URL.createObjectURL(selectedImage)}
                    className="m-4"
                  />
                </div>
                <button
                  className="bg-black bg-opacity-80 p-2 rounded-lg text-purple-400 hover:bg-opacity-100 hover:text-purple-500"
                  onClick={() => setSelectedImage(null)}
                >
                  Remove
                </button>
              </div>
            )}
            <label
              htmlFor="file-upload"
              className="bg-black bg-opacity-80 p-2 rounded-lg text-purple-400 hover:bg-opacity-100 hover:text-purple-500"
            >
              Upload image
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              value={selectedImage}
              style={{ display: "none" }}
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
          </div> */}

          <div className="flex w-full items-center">
            <HiLink className="w-8 h-8 ml-3 rounded-[50%]" />
            <input
              className="w-full h-10 m-3 p-3 ml-5 rounded-md bg-blue-400 bg-opacity-10"
              placeholder="Live Link..."
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="flex w-full justify-end items-center">
          <button
            type="button"
            onClick={() => setClicked(!clicked)}
            className="bg-black bg-opacity-80 p-2 rounded-lg text-purple-400 hover:bg-opacity-100 hover:text-purple-500"
          >
            {clicked ? "Hide" : "Add"} Links
          </button>
          <button
            type="submit"
            className="bg-black bg-opacity-80 p-2 mx-3 rounded-lg text-purple-400 hover:bg-opacity-100 hover:text-purple-500"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
