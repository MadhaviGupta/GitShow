import Navbar from "../components/Navbar";
import "../App.css";
import Offers from "../components/Offers";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase.config";

export default function Landing(props) {
  const navigate = useNavigate();
  function authenticateUser() {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.additionalUserInfo.username);
        props.setUsername(result.additionalUserInfo.username);
        navigate("/home");
        // console.log(username);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
  }
  return (
    <div className="bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-full bg-cover">
      <Navbar authenticateUser={authenticateUser} />
      <Hero authenticateUser={authenticateUser} />
      <Offers />
      <Testimonials />
      <Footer />
    </div>
  );
}
