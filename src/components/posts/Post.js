import { FiGithub, FiHeart } from "react-icons/fi";
import { FaRegCommentDots, FaHeart } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { useEffect, useState } from "react";
import { HiLink } from "react-icons/hi";
import { MdOutlineDelete } from "react-icons/md";
import db from "../../firebase.config";
import firebase from "firebase";
import CommentModal from "./CommentModal";

export default function Post(props) {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(props.like);
  const [comnt, setComment] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const cookie = document.cookie;

  // handling like functionality
  const handleLike = () => {
    setLike(!like);
    like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    like && props.likedBy.push(cookie);
  };

  let isLiked;
  like
    ? (isLiked = firebase.firestore.FieldValue.arrayUnion(cookie))
    : (isLiked = firebase.firestore.FieldValue.arrayRemove(cookie));

  useEffect(() => {
    props.likedBy.includes(cookie) ? setLike(true) : setLike(false);
  }, []);

  useEffect(() => {
    const postLike = db.collection("posts").doc(props.id);
    postLike.update({
      like: likeCount,
      likedBy: isLiked,
    });
  }, [likeCount, isLiked]);

  //handling comment section
  const handleComment = () => {
    setComment(!comnt);
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  let addComment = firebase.firestore.FieldValue.arrayUnion({
    username: cookie,
    comment: commentValue,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const postComment = db.collection("posts").doc(props.id);
    console.log(props.commentCnt);
    postComment.update({
      commentCnt: props.commentCnt === 0 ? 1 : props.commentCnt + 1,
      commentObj: addComment,
    });
    setCommentValue("");
  };

  //handling delete
  const handleDelete = () => {
    db.collection("posts").doc(props.id).delete();
  };

  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  //JSX for the links present in the post
  let linkDiv;
  if (props.githubLink || props.liveLink) {
    linkDiv = (
      <div className="flex my-2 bg-opacity-10 rounded-full justify-between">
        {props.githubLink && (
          <a
            href={props.githubLink}
            target="_blank"
            rel="noreferrer"
            className="m-1 rounded-full bg-purple-500 hover:bg-purple-700 p-2 transition-all duration-200 ease-out"
          >
            <FiGithub className="h-4 w-4" />
          </a>
        )}
        {props.liveLink && (
          <a
            href={props.liveLink}
            target="_blank"
            rel="noreferrer"
            className="m-1 rounded-full bg-purple-500 hover:bg-purple-700 p-2 transition-all duration-200 ease-out flex justify-end"
          >
            <HiLink className="h-4 w-4" />
          </a>
        )}
      </div>
    );
  }

  return (
    <div
      className={`bg-black font-manrope tracking-wide bg-opacity-20 w-full md:w-${props.width} rounded-2xl p-4 mt-4 md:mt-6 md:mx-auto text-slate-100 `}
    >
      <div className="w-full flex items-center">
        <img src={props.logo} alt="user" className="w-12 h-12 rounded-[50%]" />
        <div className="w-9/12 flex flex-col">
          <div className="md:flex items-center ml-4">
            <h4 className="mr-2">{props.name}</h4>
            <p className="text-slate-400 md:text-sm text-xs font-manrope">
              @{props.username}
            </p>
          </div>
          <p className="text-slate-300 text-xs ml-4 mt-1">{props.bio}</p>
        </div>
        <div className="flex w-2/6 items-center justify-end">
          {linkDiv}
          {props.username === cookie && (
            <div
              onClick={handleDelete}
              className="m-1 rounded-full bg-purple-500 hover:bg-purple-700 p-2 transition-all duration-200 ease-out cursor-pointer h-max"
            >
              <MdOutlineDelete className="" />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col py-4">
        <p className="my-3 md:mb-2 md:mt-0 text-sm tracking-wide">
          {props.description}
        </p>
        {props.image && (
          <img
            src={props.image}
            alt="feed"
            className="rounded-xl max-h-[22rem]"
          />
        )}
      </div>
      {/* count section for likes, comments */}
      <div className=" px-4 flex justify-between bg-black bg-opacity-10 py-2">
        <div className="flex items-center text-xs">
          <BiHeart className=" text-red-700" />
          <h5 className="text-slate-200 ml-1">{props.like}</h5>
        </div>
        <div className="flex items-center text-xs">
          <p>
            {props.commentCnt == null ? "0" : props.commentCnt}{" "}
            {props.commentCnt < 2 || props.commentCnt == null
              ? "comment"
              : "comments"}
          </p>
        </div>
      </div>
      {/* section where like, comment, share, repost button are present */}
      <div className="flex flex-col">
        <div className="flex mt-4 justify-around text-sm w-full">
          <div onClick={handleLike} className="flex cursor-pointer">
            {like ? (
              <FaHeart className="text-xl mr-2 text-red-600" />
            ) : (
              <FiHeart className="text-xl mr-2 text-white" />
            )}
            <p className="text-white">Like</p>
          </div>
          <div onClick={handleComment} className="flex cursor-pointer">
            {showModal ? (
              <FaRegCommentDots className="text-xl mr-2 text-blue-300" />
            ) : (
              <FaRegCommentDots className="text-xl mr-2 text-white hover:text-blue-300" />
            )}

            <p className="text-white hover:text-blue-300 hover:underline">
              Comment
            </p>
          </div>
        </div>
      </div>
      <CommentModal
        logo={props.logo}
        name={props.username}
        description={props.description}
        commentObj={props.commentObj}
        showModal={showModal}
        setShowModal={setShowModal}
        handleSubmit={handleSubmit}
        commentValue={commentValue}
        setCommentValue={setCommentValue}
        closeModal={closeModal}
      />

      {/* <div onClick={handleRepost} className="flex">
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
        </div> */}
    </div>
  );
}
