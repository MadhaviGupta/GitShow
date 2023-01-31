import harry from "../assets/harry.png";
import { SlLocationPin } from "react-icons/sl";
import { BsLink45Deg } from "react-icons/bs";
export default function ProfileCard() {
  return (
    <div className="w-3/12 h-full bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl m-3 p-6 md:flex flex-col text-center justify-center">
      <div className="flex flex-col items-center text-white">
        <div className="rounded-full bg-black bg-opacity-30 p-2">
          <img src={harry} alt="user" className="w-16 h-16" />
        </div>
        <p className="text-xl m-1">Harry Potter</p>
        <p className="text-slate-400 italic text-sm">@HarryPotter</p>
        <div className="m-5 flex">
          <p className="text-sm">
            The boy who lived!
            <br />
            Seeker.
          </p>
        </div>
        <div className="flex text-sm">
          <SlLocationPin className="mx-1.5 w-4 h-4 my-0.5" /> Little Whinging,
          Surrey
        </div>
        <div className="flex text-sm my-2">
          <BsLink45Deg className="mx-1.5 w-4 h-4 my-1" />{" "}
          <a href="#">harrypotter.com</a>
        </div>
        <div className="flex text-sm m-5">
          <span className="font-semibold mx-1.5">19 followers</span>
          <span className="font-semibold mx-1.5">15 following</span>
        </div>
      </div>
    </div>
  );
}
