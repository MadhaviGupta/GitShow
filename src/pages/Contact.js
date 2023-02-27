import React, { useState } from "react";
import Navbar from "../components/landing/Navbar";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
const faqs = [
  {
    id: 1,
    name: "WhatIsGitShow",
    question: "What is GitShow?",
    answer:
      "GitShow is a GitHub based social media application in which you can showcase your repositories and projects to fellow coders and followers. You can make posts, check what fellow coders are creating, chat with them and much more!",
    state: false,
  },
  {
    id: 2,
    name: "HowToUse",
    question: "How to use GitShow?",
    answer:
      "You first need to login to GitShow using your GitHub account. Here, you can make posts regarding your projects. You can like others' posts and review them via making comments.",
    state: false,
  },
  {
    id: 3,
    name: "CreatePost",
    question: "How to create a post in GitShow?",
    answer:
      "Once you log in to GitShow, you'll be directed to the Home feed. There, click on the 'Write something' section, write about your project there, click on 'Add Links' to add image, GitHub and Live link of your project and then click on 'Post' button, to post the content.",
    state: false,
  },
  {
    id: 4,
    name: "SearchProfile",
    question: "How to search a profie in GitShow?",
    answer:
      "After logging in to GitShow, click on the 'Explore' button in the sidebar, you'll be navigated to the Explore page, click on 'Search here' section and then enter the username of user you want to search and then hit enter!",
    state: false,
  },
  {
    id: 5,
    name: "ViewProfile",
    question: "How to view my profie in GitShow?",
    answer:
      "After logging in to GitShow, click on the 'Profile' button in the sidebar, you'll be navigated to the Profile page, where you'll find your profile, your posts and repositories.",
    state: false,
  },
  {
    id: 6,
    name: "DeletePost",
    question: "How to delete a post in GitShow?",
    answer:
      "Go to the post you want to delete, click on the 'Delete' icon at the top right of your post and then your post will be deleted.",
    state: false,
  },
];
function FAQs(props) {
  return (
    <>
      <div
        key={props.key}
        className="flex justify-between text-white text-lg cursor-pointer hover:bg-slate-50 p-2 my-2 hover:bg-opacity-5 rounded-lg"
        onClick={props.handleOpen}
      >
        <span className="mx-3">{props.question}</span>
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
      ) : null}
      <hr className="w-full" />
    </>
  );
}

function ContactUs() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center bg-black md:h-full bg-opacity-30 backdrop-blur-lg h-auto md:w-2/3 w-5/6 md:py-14 py-10 m-auto rounded-3xl my-5">
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
              className="p-3 rounded-lg hover:text-slate-300 bg-blue-900 tracking-wider"
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
  const [open, setOpen] = useState({
    state1: false,
    state2: false,
    state3: false,
    state4: false,
    state5: false,
    state6: false,
  });
  const [data, setData] = useState(faqs);
  // content == true ? show FAQs : show Contact Form
  const handleContent = () => {
    setContent(!content);
  };
  // open == true ? show answers + arrowup : show questions only + aarrowdown
  const handleOpen = () => {
    const newState = faqs.map((obj) => {
      if (obj.id === 1) {
        setOpen((prev) => {
          return {
            ...prev,
            state1: !prev.state1,
          };
        });
      }
      if (obj.id === 2) {
        setOpen((prev) => {
          return {
            ...prev,
            state2: !prev.state2,
          };
        });
      }
      if (obj.id === 3) {
        setOpen((prev) => {
          return {
            ...prev,
            state3: !prev.state3,
          };
        });
      }
      return obj;
    });
    setData(newState);
  };
  return (
    <>
      <Navbar />
      <div className="bg-[#1B2430] font-manrope md:h-full h-screen bg-cover pb-40">
        <div className="flex justify-center text-center text-4xl font-bold tracking-wide overflow-y-hidden ">
          <div className="flex flex-col mt-36">
            <span className="m-4 bg-gradient-to-br text-5xl from-blue-400 to-orange-500 text-transparent bg-clip-text">
              How can we help you?
            </span>
          </div>
        </div>
        <div className="flex justify-around my-5 m-auto md:w-2/5 w-full">
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
          <div className="flex flex-col bg-black bg-opacity-30 backdrop-blur-lg h-auto md:w-2/3 w-5/6 md:p-4 p-3 my-2 m-auto rounded-3xl tracking-wide">
            {faqs.map((faq) => (
              <FAQs
                open={open.state1}
                handleOpen={handleOpen}
                key={faq.name}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        ) : (
          <ContactUs />
        )}
      </div>
    </>
  );
}
