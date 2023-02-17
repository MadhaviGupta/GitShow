import React from "react";
import { RxCross1 } from "react-icons/rx";
import user from "../assets/user.png";
export default function Modal(props) {
  return (
    <>
      {props.showModal ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="md:w-4/12 w-10/12 my-6 mx-auto">
            <div className="rounded-lg flex flex-col w-full bg-black font-manrope tracking-wide bg-opacity-70 backdrop-blur-md outline-none focus:outline-none">
              <div className="flex items-start justify-between p-6 border-b border-solid border-slate-700 rounded-t">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <img src={user} className="md:w-8 md:h-8 w-6 h-6 mr-4"></img>
                    <span className="font-semibold text-lg">Sujal Samai</span>
                  </div>
                  <div className="text-md text-white mt-3">
                    updated my twitter banner. now looking very clean
                  </div>
                </div>
                <button
                  className="bg-slate-600 bg-opacity-50 hover:bg-slate-700 rounded-full p-2 text-white"
                  onClick={props.closeModal}
                >
                  <RxCross1 />
                </button>
              </div>
              {/* other users comment section */}
              <div className="flex py-2 px-4 text-white border-slate-700 border-b">
                <div className="flex items-center">
                  <img src={user} className="md:w-8 md:h-8 w-6 h-6 mr-2"></img>
                </div>
                <div className="flex flex-col ml-2">
                  <span className="text-sm">User Name</span>
                  <div className="text-xs text-white mt-1">
                    lodfkdsjfdsnjdbfadjfbdufb dfdsofdfofbdoifbou
                  </div>
                </div>
              </div>
              <div className="flex py-2 px-4 text-white border-slate-700 border-b">
                <div className="flex items-center">
                  <img src={user} className="md:w-8 md:h-8 w-6 h-6 mr-2"></img>
                </div>
                <div className="flex flex-col ml-2">
                  <span className="text-sm">User Name</span>
                  <div className="text-xs text-white mt-1">
                    lodfkdsjfdsnjdbfadjfbdufb dfdsofdfofbdoifbou
                  </div>
                </div>
              </div>
              <div className="flex py-2 px-4 text-white border-slate-700 border-b">
                <div className="flex items-center">
                  <img src={user} className="md:w-8 md:h-8 w-6 h-6 mr-2"></img>
                </div>
                <div className="flex flex-col ml-2">
                  <span className="text-sm">User Name</span>
                  <div className="text-xs text-white mt-1">
                    lodfkdsjfdsnjdbfadjfbdufb dfdsofdfofbdoifbou
                  </div>
                </div>
              </div>
              {/* add new comment section */}
              <div className="border-b border-slate-700 p-3">
                <form
                  onSubmit={props.handleSubmit}
                >
                  <div className="flex">
                    <textarea
                      rows={1}
                      cols={2}
                      required
                      className="bg-black bg-opacity-10 p-2 rounded-md border-[1px] border-slate-500 w-full"
                      type="text"
                      value={props.commentValue}
                      onChange={(e) => props.setCommentValue(e.target.value)}
                      placeholder="Add your comment.."
                    ></textarea>
                    <div className="flex justify-end items-center mx-3">
                      <button
                        type="submit"
                        className="bg-black bg-opacity-80 p-2 rounded-lg border-[1px] border-purple-400 text-purple-400 hover:bg-opacity-100 hover:text-purple-500 hover:border-purple-500"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
