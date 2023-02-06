import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../src/firebase.config";

export default function App() {
  let userName;
  const navigate = useNavigate();
  function authenticateUser() {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // setUserName(result.additionalUserInfo.profile.login);
        userName = result.additionalUserInfo.profile.login;
        console.log(userName);
        navigate("/home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Landing authenticateUser={authenticateUser} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
