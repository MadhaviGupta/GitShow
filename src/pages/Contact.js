import React, { useState } from "react";
import Navbar from "../components/landing/Navbar";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function FAQs(props) {
  return (
    <div className="flex flex-col bg-black bg-opacity-30 backdrop-blur-lg h-auto md:w-2/3 w-5/6 md:p-4 p-3 my-2 m-auto rounded-lg tracking-wide">
      <div
        className="flex justify-between text-white text-lg cursor-pointer hover:bg-slate-50 p-2 my-2 hover:bg-opacity-5 rounded-lg"
        onClick={props.handleOpen}
      >
        <span className="mx-3">
          {props.question}
        </span>
        {props.open ? (
          <TiArrowSortedUp className="text-3xl" />
        ) : (
          <TiArrowSortedDown className="text-3xl" />
        )}
      </div>
      {/* answers */}
      {props.open ? (
        <div className=" text-slate-200 text-md tracking-wide my-3">
          <div className="mx-3">{props.answer}</div>
        </div>
      ) : (
        <></>
      )}
      <hr className="w-full" />
    </div>
  );
}

function ContactUs() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center bg-black bg-opacity-30 backdrop-blur-lg h-auto md:w-2/3 w-5/6 md:py-14 py-10 m-auto rounded-lg my-5">
      <div className="md:m-8 m-3 md:w-2/5 w-3/5 flex justify-center">
        <img
          src="https://i.gifer.com/fr7.gif"
          alt="mail"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col text-white md:w-2/6 w-4/6">
        <form onSubmit={{}}>
          <div className="flex flex-col my-2">
            <span className="text-md my-1.5">Name</span>
            <input
              type="text"
              placeholder="Harry Potter"
              className="bg-blue-100 placeholder-slate-600 h-12 p-4 rounded-lg text-sm text-black"
            ></input>
          </div>
          <div className="flex flex-col my-2">
            <span className="text-md my-1.5">Email</span>
            <input
              type="email"
              placeholder="harrypotter934@gmail.com"
              className="bg-blue-100 placeholder-slate-600 h-12 p-4 rounded-lg text-sm text-black"
            ></input>
          </div>
          <div className="flex flex-col my-2">
            <span className="text-md my-1.5">Your Message</span>
            <textarea
              className="bg-blue-100 placeholder-slate-600 p-3 rounded-lg text-sm text-black"
              placeholder="Your message here"
            ></textarea>
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="bg-blue-800 p-3 rounded-lg hover:text-slate-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Contact() {
  const [content, setContent] = useState(true);
  const [open, setOpen] = useState(false);
  // content == true ? show FAQs : show Contact Form
  const handleContent = () => {
    setContent(!content);
  };
  // open == true ? show answers + arrowup : show questions only + aarrowdown
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <Navbar />
      <div className="bg-[#1B2430] font-manrope h-full w-screen bg-cover">
        <div className="flex justify-center text-center text-4xl font-bold tracking-wide overflow-y-hidden ">
          <div className="flex flex-col mt-28">
            <span className="m-4 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text">
              How can we help you?
            </span>
          </div>
        </div>
        <div className="flex justify-around my-8 m-auto w-3/5">
          <div
            className={`text-white my-6 text-2xl cursor-pointer hover:text-slate-400 ${
              content ? "border-b-2" : ""
            } border-white`}
            onClick={handleContent}
          >
            FAQs
          </div>
          <div
            className={`text-white my-6 text-2xl cursor-pointer hover:text-slate-400 ${
              content ? "" : "border-b-2"
            } border-white`}
            onClick={handleContent}
          >
            Contact Us
          </div>
        </div>
        {content ? (
          <>
            <FAQs
              open={open}
              handleOpen={handleOpen}
              question={"How to use GitShow?"}
              answer={
                "You first need to login to GitShow using your GitHub account."
              }
            />
            <FAQs
              open={open}
              handleOpen={handleOpen}
              question={"What is GitShow?"}
              answer={
                "You first need to login to GitShow using your GitHub account."
              }
            />
          </>
        ) : (
          <ContactUs />
        )}
      </div>
    </>
  );
}
