import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Offers from "../components/Offers";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
export default function Landing() {
  return (
    <div className="bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-full bg-cover">
      <Navbar />
      {/* <Hero /> */}
      <Hero />
      <Offers />
      <Testimonials />
      <Footer />
    </div>
  );
}
