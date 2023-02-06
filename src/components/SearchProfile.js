import React from "react";
import { FiLink } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { BsFolder } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { HiUser } from "react-icons/hi";
export default function SearchProfile(props) {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-white bg-black bg-opacity-5 backdrop-blur-lg rounded-2xl w-3/5 p-5 m-10">
          <img
            src={props.avatar}
            alt="Avatar not available."
            className="w-28 h-28 rounded-full m-6"
          />
          <div key={props.id} className="tracking-wider text-2xl font-semibold">
            {props.name}
          </div>
          <div className="text-lg italic tracking-wide flex m-2">
            @
            <a href={`https://github.com/${props.login}`} className="underline">
              {props.login}
            </a>
          </div>
          <div className="flex text-lg m-1.5">
            <FiLink className="m-1 w-5 h-5" />
            <a href={`${props.blog}`} className="underline">
              {props.blog}
            </a>
          </div>
          <div className="flex text-lg m-1.5">
            <TfiLocationPin className="m-1 w-5 h-5" />
            {props.location}
          </div>
          <div className="flex text-lg m-1.5">
            <ImOffice className="m-1 w-5 h-5" />
            {props.company}
          </div>
          <div className="flex text-lg m-1.5">
            <HiUser className="m-1 w-5 h-5" />
            {props.bio}
          </div>
          <div className="flex text-lg m-1.5">
            <FaTwitter className="m-1 w-5 h-5" />
            {props.twitter_username}
          </div>
          <div className="flex text-lg m-1.5">
            <BsFolder className="m-1 w-5 h-5" /> {props.public_repos} Repos
          </div>
          <div className="text-lg m-1.5">
            <span className="mx-2">Followers: {props.followers}</span> |{" "}
            <span className="mx-2">Following: {props.following}</span>
          </div>

          {/* Repo info if needed to add */}
          {/* <div>
                  <a href={`https://api.github.com/users/${user.login}/repos`}>
                    Get Repo Information
                  </a>
                </div> */}
        </div>
      </div>
    </>
  );
}
