import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./firebase.config";
import Notifications from "./pages/Notifications";
import Contact from "./pages/Contact";
export default function App() {
  const navigate = useNavigate();
  let githubUsername;
  function authenticateUser() {
    auth
      .signInWithPopup(provider)
      .then((userAuth) => {
        githubUsername = userAuth.additionalUserInfo.username;
        document.cookie = githubUsername;

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
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
