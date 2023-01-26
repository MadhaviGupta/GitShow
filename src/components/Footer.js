import React from "react";

export default function Footer() {
  return (
    <>
      <hr className="my-2 opacity-25 w-full"></hr>
      <div className="flex text-white">
        <div className="flex flex-col flex-start w-60 my-5 mx-48">
          <span className="text-3xl md:text-4xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-semibold mb-5">
            Some line describing the developers.
          </span>
        </div>
        <div className="flex p-3 items-center">
          <div className="mx-12">
            <p className="font-semibold text-xl my-2 underline underline-offset-2">
              COMPANY
            </p>
            <ul>
              <a href="#">
                <li className="hover:text-slate-400 my-4">Lorem, ipsum.</li>
              </a>
              <a href="#">
                <li className="hover:text-slate-400 my-4">
                  Lorem, ipsum dolor.
                </li>
              </a>
              <a href="#">
                <li className="hover:text-slate-400 my-4">Lorem, ipsum.</li>
              </a>
            </ul>
          </div>
          <div className="mx-12">
            <p className="font-semibold text-xl my-2 underline underline-offset-2">
              SERVICES
            </p>
            <ul>
              <a href="#">
                <li className="hover:text-slate-400 my-4">Lorem, ipsum.</li>
              </a>
              <a href="#">
                <li className="hover:text-slate-400 my-4">
                  Lorem, ipsum dolor.
                </li>
              </a>
              <a href="#">
                <li className="hover:text-slate-400 my-4">Lorem, ipsum.</li>
              </a>
            </ul>
          </div>
          <div className="mx-12">
            <p className="font-semibold text-xl my-2 underline underline-offset-2">
              EXPLORE
            </p>
            <ul>
              <a href="#">
                <li className="hover:text-slate-400 my-4">Lorem, ipsum.</li>
              </a>
              <a href="#">
                <li className="hover:text-slate-400 my-4">
                  Lorem, ipsum dolor.
                </li>
              </a>
              <a href="#">
                <li className="hover:text-slate-400 my-4">Lorem, ipsum.</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
