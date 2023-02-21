import React, { useState, useEffect } from "react";
function TopProfileCard(props) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-center items-center">
        <div
          className="h-auto rounded-xl md:m-4 md:p-10 p-3 m-10 flex flex-col justify-center items-center
          hover:bg-opacity-70 transition-all ease-in duration-300 cursor-default hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-500/20"
        >
          <img
            src={props.avatar}
            alt="avatar"
            className="w-28 h-28 rounded-lg md:mb-4"
          />
          <p className="text-2xl text-blue-200 flex font-bold font-manrope">
            {props.name}
          </p>
          <p className="text-slate-300 text-md font-medium tracking-wide italic mb-3">
            @{props.username}
          </p>
          <p className="text-white text-md font-medium tracking-wide text-center">
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

  return (
    <>
      <div className="text-4xl font-inter text-center md:text-4xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mt-20 md:mb-4 m-4">
        Most Active GitHub Users
      </div>
      <div className="flex mx-4 justify-center">
        <img
          // src="https://media.giphy.com/media/17JedU1gYFReg/giphy.gif"
          src="https://media.giphy.com/media/ffynNaSYx2yTC/giphy.gif"
          alt="find"
          className="rounded-xl my-10"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        {user.slice(0, 2).map((userObj) => (
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
      </div>
    </>
  );
}
