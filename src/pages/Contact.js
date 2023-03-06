import React, { useState } from "react";
import Navbar from "../components/landing/Navbar";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
const faqs = [
  {
    // id: 1,
    name: "WhatIsGitShow",
    question: "What is GitShow?",
    answer:
      "GitShow is a GitHub based social media application in which you can showcase your repositories and projects to fellow coders and followers. You can make posts, check what fellow coders are creating, chat with them and much more!",
  },
  {
    // id: 2,
    name: "HowToUse",
    question: "How to use GitShow?",
    answer:
      "You first need to login to GitShow using your GitHub account. Here, you can make posts regarding your projects. You can like others' posts and review them via making comments.",
  },
  {
    // id: 3,
    name: "CreatePost",
    question: "How to create a post in GitShow?",
    answer:
      "Once you log in to GitShow, you'll be directed to the Home feed. There, click on the 'Write something' section, write about your project there, click on 'Add Links' to add image, GitHub and Live link of your project and then click on 'Post' button, to post the content.",
  },
  {
    // id: 4,
    name: "SearchProfile",
    question: "How to search a profie in GitShow?",
    answer:
      "After logging in to GitShow, click on the 'Explore' button in the sidebar, you'll be navigated to the Explore page, click on 'Search here' section and then enter the username of user you want to search and then hit enter!",
  },
  {
    id: 5,
    name: "ViewProfile",
    question: "How to view my profie in GitShow?",
    answer:
      "After logging in to GitShow, click on the 'Profile' button in the sidebar, you'll be navigated to the Profile page, where you'll find your profile, your posts and repositories.",
  },
  {
    id: 6,
    name: "DeletePost",
    question: "How to delete a post in GitShow?",
    answer:
      "Go to the post you want to delete, click on the 'Delete' icon at the top right of your post and then your post will be deleted.",
  },
];
function FAQs(props) {
  return (
    <>
      <details className="text-white text-lg cursor-pointer hover:bg-slate-50 p-2 my-2 hover:bg-opacity-5 rounded-lg">
        <summary className="mb-3 font-medium">{props.question}</summary>
        <span className="text-purple-300 text-base tracking-wide">
          {props.answer}
        </span>
      </details>
      <hr className="w-full" />
    </>
  );
}

function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-11/12 md:w-4/6 mx-auto bg-black md:h-full bg-opacity-30 backdrop-blur-lg px-8 py-12 rounded-3xl">
      <img
        src="https://media.tenor.com/lyQua8yOW_4AAAAM/harry-potter-letter.gif"
        alt="mail"
        className="rounded-lg hidden md:block md:w-5/12"
      />

      <form
        target="_blank"
        // action="https://formsubmit.co/gitshowbysmg@gmail.com"
        action="https://usebasin.com/f/854c7ce9e472"
        method="POST"
        className="text-white md:w-3/6"
      >
        <div className="flex flex-col my-2">
          <span className="text-md my-1.5 font-bold">Name</span>
          <input
            type="text"
            name="name"
            placeholder="Harry Potter"
            className="bg-blue-100 placeholder-slate-600 h-12 p-4 rounded-lg text-sm text-black"
          ></input>
        </div>
        <div className="flex flex-col my-2">
          <span className="text-md my-1.5 font-bold">Email</span>
          <input
            type="email"
            name="email"
            placeholder="harrypotter934@gmail.com"
            className="bg-blue-100 placeholder-slate-600 h-12 p-4 rounded-lg text-sm text-black"
          ></input>
        </div>
        <div className="flex flex-col my-2">
          <span className="text-md my-1.5 font-bold">Your Message</span>
          <textarea
            className="bg-blue-100 placeholder-slate-600 p-3 rounded-lg text-sm text-black"
            placeholder="Your message here"
            name="message"
            required
          ></textarea>
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="bg-black bg-opacity-50 hover:bg-opacity-100 text-purple-500 p-4 rounded-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Contact() {
  const [content, setContent] = useState(true);
  const [data, setData] = useState(faqs);
  // content == true ? show FAQs : show Contact Form
  const handleContent = () => {
    setContent(!content);
  };
  return (
    <>
      <Navbar />
      <div className="bg-[#1B2430] font-manrope h-full bg-cover pb-40">
        <div className="flex justify-center text-center text-4xl font-bold tracking-wide overflow-y-hidden ">
          <div className="flex flex-col mt-36">
            <span className="m-4 bg-gradient-to-br text-4xl md:text-5xl font-bold text-white font-inter">
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
          <div className="flex flex-col bg-black bg-opacity-30 backdrop-blur-lg h-auto md:w-2/3 w-11/12 md:p-4 p-3 my-2 m-auto rounded-3xl tracking-wide">
            {faqs.map((faq) => (
              <FAQs
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
