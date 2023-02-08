import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser, selectUser } from "./features/userSlice";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebase.config";
import { useEffect } from "react";

export default function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  let githubUsername;
  function authenticateUser() {
    auth
      .signInWithPopup(provider)
      .then((userAuth) => {
        githubUsername = userAuth.additionalUserInfo.username;
        console.log("App: " + githubUsername);
        dispatch(
          loginUser({
            username: githubUsername,
          })
        );
        navigate("/home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
  }

  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     console.log("Github2" + githubUsername);
  //     if (userAuth) {
  //       dispatch(
  //         loginUser({
  //           username: githubUsername,
  //         })
  //       );
  //     } else {
  //       dispatch(logoutUser());
  //     }
  //   });
  // }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Landing authenticateUser={authenticateUser} />}
      />
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
