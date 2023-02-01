import { FiHeart, FiSend } from "react-icons/fi";
import { FaRegCommentDots, FaHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import { useState } from "react";

export default function Post(props) {
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

  // let descLen = props.description.length;
  return (
    <div className="flex flex-col p-4 bg-black bg-opacity-20 rounded-2xl mt-2 mb-4 md:mb-3">
      <div className="w-full flex items-center">
        <img src={props.logo} alt="user" className="w-12 h-12 rounded-[50%]" />
        <div className="w-9/12 flex flex-col">
          <div className="flex items-center ml-4">
            <h4 className="mr-2">{props.name} </h4>
            <p className="text-slate-500 text-sm font-manrope">
              @{props.username}
            </p>
          </div>
          <p className="text-slate-300 text-xs ml-4">{props.bio}</p>
        </div>
        <div className="w-1/6 flex justify-end">
          <BsThreeDots className="" />
        </div>
      </div>
      <div className="flex flex-col py-4">
        <p className="my-3 md:mb-2 md:mt-0 text-sm tracking-wide">
          {props.description}
        </p>
        {props.image && (
          <img src={props.image} alt="feed" className="rounded-xl" />
        )}
      </div>
      <div className=" px-4 flex justify-between bg-black bg-opacity-10 py-2">
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
      <div className="flex mt-4 justify-around text-sm">
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
