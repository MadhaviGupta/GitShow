import React, { useState, useEffect } from "react";
import { useRef } from "react";

function TopProfileCard(props) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-center items-center w-96 mx-4">
        <div
          className="bg-white/70 w-full h-96 rounded-xl md:m-4 md:p-8 p-3 m-10 flex flex-col justify-center items-center
          transition-all ease-in duration-300 cursor-pointer hover:bg-white/90"
        >
          <img
            src={props.avatar}
            alt="avatar"
            className="w-28 h-28 rounded-full md:mb-4"
          />
          <p className="text-2xl text-blue-600 flex font-bold font-manrope mt-2">
            {props.name}
          </p>
          <p className="text-slate-600 text-md font-medium tracking-wide italic mb-2">
            @{props.username}
          </p>
          <p className="text-blue-900 text-md font-medium tracking-wide text-center">
            {props.followers}+ followers <br />
            {props.contri}+ contributions
            <br />
            Location: {props.location}
          </p>
        </div>
      </div>
    </>
  );
}
export default function TopProfile() {
  const [user, setUser] = useState([]);
  const fetchData = () => {
    return fetch(
      "https://gist.githubusercontent.com/paulmillr/4524946/raw/c462a62ac9f3a072fc4106bbd131335ad730da16/github-users-stats.json"
    )
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const ref = useRef(null);

  return (
    <>
      <div className="text-4xl font-inter text-center md:text-4xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mt-20 md:mb-4 m-4">
        Most Active GitHub Users
      </div>
      <div className="md:flex mx-4 justify-center hidden">
        <img
          src="https://media.giphy.com/media/ffynNaSYx2yTC/giphy.gif"
          alt="find"
          className="rounded-xl my-10"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <ul
          ref={ref}
          className="scrollbar flex list-none w-[25rem] md:w-full overflow-x-scroll md:px-10 mb-10"
        >
          {user.slice(0, 8).map((userObj) => (
            <a href={`https://www.github.com/${userObj.login}`}>
              <TopProfileCard
                key={userObj.name}
                name={userObj.name}
                username={userObj.login}
                location={userObj.location}
                followers={userObj.followers}
                contri={userObj.contributions}
                avatar={userObj.gravatar}
              />
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}
