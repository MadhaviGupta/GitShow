import Navbar from "../components/landing/Navbar";
import "../App.css";
import Offers from "../components/landing/Offers";
import Testimonials from "../components/landing/Testimonials";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";
import { useEffect, useState } from "react";

export default function Landing(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-[#1B2430] h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl text-white mt-14 font-extrabold font-inter text-center">
            Are you Ready?
          </h1>
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
