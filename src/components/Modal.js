import React from "react";
import { RxCross1 } from "react-icons/rx";
import user from "../assets/user.png";
export default function Modal(props) {
  return (
    <>
      {props.showModal ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-5/12 my-6 mx-auto">
            <div className="rounded-lg flex flex-col w-full bg-black font-manrope tracking-wide bg-opacity-70 backdrop-blur-md outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <img src={user} className="w-8 h-8 mr-4"></img>
                    <span className="font-semibold text-lg">Sujal Samai</span>
                  </div>
                  <div className="text-lg font-semibold text-white mt-4">
                    updated my twitter banner. now looking very clean
                  </div>
                </div>
                <button
                  className="bg-slate-600 bg-opacity-50 hover:bg-slate-700 rounded-full p-2 text-white"
                  onClick={() => props.setShowModal(false)}
                >
                  <RxCross1 />
                </button>
              </div>
              <div className="flex p-6 text-white border-white border-b">
                <div className="flex items-center">
                  <img src={user} className="w-8 h-8 mr-2"></img>
                </div>
                <div className="flex flex-col ml-2">
                  <span>User Name</span>
                  <div className="text-sm text-white mt-1">
                    lodfkdsjfdsnjdbfadjfbdufb dfdsofdfofbdoifbou
                  </div>
                </div>
              </div>
              <div className="flex p-6 text-white">
                <div className="flex items-center">
                  <img src={user} className="w-8 h-8 mr-2"></img>
                </div>
                <div className="flex flex-col ml-2">
                  <span>User Name</span>
                  <div className="text-sm text-white mt-1">
                    lodfkdsjfdsnjdbfadjfbdufb dfdsofdfofbdoifbou
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
