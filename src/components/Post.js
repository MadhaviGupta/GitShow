import user from "../assets/user.png";
import { FiHeart, FiSend } from "react-icons/fi";
import { FaRegCommentDots, FaHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";

export default function Post() {
  const [like, setLike] = useState(false);
  const [comnt, setComment] = useState(false);
  const [repost, setRepost] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [repostCount, setRepostCount] = useState(0);
  const handleLike = () => {
    setLike(!like);
    like ? setLikeCount(0) : setLikeCount(likeCount + 1);
  };
  const handleComment = () => {
    setComment(!comnt);
    comnt ? setCommentCount(0) : setCommentCount(commentCount + 1);
  };
  const handleRepost = () => {
    setRepost(!repost);
    repost ? setRepostCount(0) : setRepostCount(repostCount + 1);
  };

  return (
    <div className="flex flex-col p-4 bg-black bg-opacity-20 rounded-2xl mt-2 mb-4 md:mb-3">
      <div className="w-full flex items-center">
        <img src={user} alt="user" className="w-1/12" />
        <div className="w-9/12 flex flex-col ml-4">
          <div className="flex items-center">
            <h4 className="mr-2">George Weasely</h4>
            <p className="text-slate-500 text-sm font-manrope">@g.weasely12</p>
          </div>
          <p className="text-slate-300 text-xs">Born Prankster and Inventor</p>
        </div>
        <BsThreeDots className="m-auto" />
      </div>
      <div className="flex flex-col md:w-11/12 p-2 md:p-4 md:ml-12">
        <p className="my-3 md:mb-2 md:mt-0 text-sm font-manrope">
          George Weasley (born 1 April 1978) is a major character in the Harry
          Potter series written by J.K. Rowling. He was a pure-blood wizard, a
          son of Molly and Arthur Weasley, a brother of Bill, Charlie, Percy,
          Ron, Ginny, and twin brother of the late Fred Weasley.
        </p>
        <img
          src="https://images.unsplash.com/photo-1618944847023-38aa001235f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt="feed"
          className="rounded-xl"
        />
      </div>
      <div className="md:w-11/12 md:ml-12 px-4 flex justify-between bg-black bg-opacity-10 py-2">
        <div className="flex items-center text-xs">
          <BiHeart className=" text-red-700" />
          <h5 className="text-slate-200 ml-1">{likeCount}</h5>
        </div>
        <div className="flex items-center text-xs">
          <p>{commentCount} comments</p>
          <RxDotFilled />
          <p>{repostCount} reposts</p>
        </div>
      </div>
      <div className="flex md:w-11/12 md:ml-12 mt-4 justify-around text-sm">
        <div onClick={handleLike} className="flex ">
          {like ? (
            <FaHeart className="text-xl mr-2 text-red-600" />
          ) : (
            <FiHeart className="text-xl mr-2 text-white" />
          )}
          <p className="text-white">Like</p>
        </div>
        <div onClick={handleComment} className="flex">
          {comnt ? (
            <FaRegCommentDots className="text-xl mr-2 text-blue-400" />
          ) : (
            <FaRegCommentDots className="text-xl mr-2 text-white" />
          )}

          <p className="text-white">Comment</p>
        </div>
        <div onClick={handleRepost} className="flex">
          {repost ? (
            <AiOutlineRetweet className="text-xl mr-2 text-green-500" />
          ) : (
            <AiOutlineRetweet className="text-xl mr-2 text-white" />
          )}

          <p className="text-white">Repost</p>
        </div>
        <div className="flex">
          <FiSend className="text-xl mr-2 text-white" />
          <p className="text-white">Share</p>
        </div>
      </div>
    </div>
  );
}
