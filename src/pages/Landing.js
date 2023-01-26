import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Divider from "../components/Divider";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
export default function Landing() {
  return (
    <div className="bg-gradient-to-br from-orange-800 to-blue-900 font-inter h-full bg-cover">
      <Navbar />
      <Hero />
      <Divider desc="Hold on, I'm telling you what we are offering you." />
      <Offers />
      <Divider />
      <Testimonials />
      <Divider />
      <Footer />
    </div>
  );
}
