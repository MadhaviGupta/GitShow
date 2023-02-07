import { Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  let user = username;
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/login"
        element={<Login username={username} setUsername={setUsername} />}
      />
      <Route path="/home" element={<Home user={user} />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
