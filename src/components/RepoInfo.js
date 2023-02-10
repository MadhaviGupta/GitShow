import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";

export default function RepoInfo() {
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
  const [userData, setUserData] = useState([]);

  const user = useSelector(selectUser);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.github.com/users/${user.username}/repos`
    );
    const data = await response.json();
    console.log(data);
    return setUserData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-black font-manrope tracking-wide bg-opacity-20 w-full md:w-4/6 md:rounded-2xl p-5 md:mt-3 mx-auto text-slate-100">
        {/* name language starcount cloneurl htmlurl description commitcount */}
        {/* {userData[0].name} */}
      </div>
    </>
  );
}
