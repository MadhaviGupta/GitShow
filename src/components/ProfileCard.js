import { SlLocationPin } from "react-icons/sl";
import { BsLink45Deg } from "react-icons/bs";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";
export default function ProfileCard(props) {
  const navigate = useNavigate();
  function githubSignout() {
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          console.log("Signout successful!");
          navigate("/");
        },
        function (error) {
          console.log("Signout failed");
        }
      );
  }
  return (
    <div className="w-2/12 fixed right-48 bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-6 md:flex flex-col text-center justify-center">
      <div className="flex flex-col items-center text-white">
        <div className="rounded-full bg-black bg-opacity-30 p-2">
          <img
            src={props.avatar}
            alt="user"
            className="w-16 h-16 rounded-[50%]"
          />
        </div>
        <p className="text-xl m-1">{props.name}</p>
        <p className="text-slate-400 italic text-sm">@{props.login}</p>
        <div className="m-5 flex">
          <p className="text-sm">{props.bio}</p>
        </div>
        <div className="flex text-sm">
          <SlLocationPin className="mx-1.5 w-4 h-4 my-0.5" /> {props.location}
        </div>
        <div className="flex text-sm my-2">
          <BsLink45Deg className="mx-1.5 w-4 h-4 my-1" />{" "}
          <a href={props.blog}>{props.blog}</a>
        </div>
        <div className="flex text-sm m-5">
          <span className="font-semibold mx-1.5">
            {props.followers} followers
          </span>
          <span className="font-semibold mx-1.5">
            {props.following} following
          </span>
        </div>
      </div>
      <button
        onClick={githubSignout}
        className="bg-black bg-opacity-50 hover:bg-opacity-100 text-purple-500 p-4 rounded-lg"
      >
        Log Out
      </button>
    </div>
  );
}
