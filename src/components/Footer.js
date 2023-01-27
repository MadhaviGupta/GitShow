import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-slate-200 bg-opacity-90 rounded-t-[3rem] text-stone-800">
        <div className=" mt-64 flex flex-col md:flex-row py-16 justify-around">
          <div className="flex w-1/6 m-8 md:ml-20 items-center">
            <span className="text-3xl md:text-5xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mb-5">
              Show, Connect, Proceed.
            </span>
          </div>
          <div className="flex md:p-3 items-center">
            <div className="mx-6 md:mx-12">
              <p className="font-semibold text-xl my-2 underline underline-offset-2 font-milonga tracking-wider">
                Company
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
            <div className="mx-6 md:mx-12">
              <p className="font-semibold text-xl my-2 underline underline-offset-2 font-milonga tracking-wider">
                Services
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
            <div className="mx-6 md:mx-12">
              <p className="font-semibold text-xl my-2 underline underline-offset-2 font-milonga tracking-wider">
                Explore
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
        <div className="w-9/12 h-[1px] bg-slate-700 m-auto"></div>
        <div className="w-9/12 m-auto flex flex-col md:flex-row py-10 px-1 md:p-10 items-center md:justify-between">
          <h2 className="text-4xl font-bold bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text">
            GitShow
          </h2>
          <p className="text-center md:text-right">
            Made with 💖, React.js, Tailwind & Firebase.
            <br />
            Built by <a href="https://www.github.com/SujalSamai">
              Sujal
            </a> and <a href="https://www.github.com/MadhaviGupta">Madhavi</a>.
          </p>
        </div>
      </div>
    </>
  );
}
