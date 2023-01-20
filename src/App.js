import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}
