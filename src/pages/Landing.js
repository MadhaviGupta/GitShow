import Navbar from "../components/landing/Navbar";
import "../App.css";
import Offers from "../components/landing/Offers";
import Testimonials from "../components/landing/Testimonials";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";
import { useEffect, useState } from "react";
import harry_animate from "../assets/harry-animate.png";

export default function Landing(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-[#1B2430] h-screen flex items-center justify-center">
          <div className="w-5/6 m-auto flex flex-col items-center">
            <img src={harry_animate} className="move-right"></img>
            <h1 className="text-5xl font-extrabold text-white mt-6">
              Loading...
            </h1>
          </div>
        </div>
      ) : (
        <div className="bg-[#1B2430] font-inter h-full bg-cover ">
          <Navbar authenticateUser={props.authenticateUser} />
          <Hero authenticateUser={props.authenticateUser} />
          <Offers />
          <Testimonials />
          <Footer />
        </div>
      )}
    </>
  );
}
