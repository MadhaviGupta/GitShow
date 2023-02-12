import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineCode } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BiGitRepoForked } from "react-icons/bi";
export default function RepoInfo(props) {
  const navigate = useNavigate();
  function githubSignout() {
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          console.log("Signout successful!");
          navigate("/");
        },
        function (error) {
          console.log("Signout failed");
        }
      );
  }
  return (
    <>
      <div className="bg-black font-manrope tracking-wide bg-opacity-20 w-full md:w-5/6 md:rounded-2xl p-5 md:mt-6 mx-auto text-slate-100">
        {/* commitcount remaining to add */}
        <div className="flex justify-between">
          <div>
            <a href={props.html_url} className="flex">
              <span className="text-2xl hover:underline">{props.name}</span>
              <HiOutlineExternalLink className="md:my-[3px] mx-1.5 text-2xl" />
            </a>
            {props.desc && (
              <div className="flex md:mt-2 text-slate-400">{props.desc}</div>
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex my-1">
              <BsStarFill className="md:my-[3px] mx-1.5" />
              Star: {props.star_count}
            </div>
            <div className="flex my-1">
              <BiGitRepoForked className="md:my-[3px] mx-1" />
              Forks: {props.forks_count}
            </div>
          </div>
        </div>
        <div className="flex my-4">
          <div className="flex">
            <BsCodeSlash className="md:my-[3px] mx-1.5" />
            Language: {props.language}
          </div>
          <div className="flex mx-5">
            <AiOutlineCode className="md:my-[3px] mx-1.5" />
            <a href={props.clone_url} className="hover:underline">
              Clone URL
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
