import { useEffect, useState } from "react";
import user from "../assets/user.png";

export default function Comments(props) {
  //   const [userData, setUserData] = useState([]);

  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://api.github.com/users/${props.username}`
  //     );
  //     const data = await response.json();
  //     return setUserData(data);
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, [props.username]);
  return (
    <div className="flex py-2 px-4 text-white border-slate-600 border-b">
      <div className="flex items-center">
        <img
          src={user}
          className="md:w-8 md:h-8 w-6 h-6 mr-2 rounded-full"
        ></img>
      </div>
      <div className="flex flex-col ml-2">
        <span className="text-sm">{props.username}</span>
        <div className="text-xs text-white mt-1">{props.comment}</div>
      </div>
    </div>
  );
}
