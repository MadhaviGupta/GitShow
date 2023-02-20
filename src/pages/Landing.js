import Navbar from "../components/landing/Navbar";
import "../App.css";
import Offers from "../components/landing/Offers";
import Testimonials from "../components/landing/Testimonials";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";

export default function Landing(props) {
  return (
    <div className="bg-[#1B2430] font-inter h-full bg-cover">
      <Navbar authenticateUser={props.authenticateUser} />
      <Hero authenticateUser={props.authenticateUser} />
      <Offers />
      <Testimonials />
      <Footer />
    </div>
  );
}
