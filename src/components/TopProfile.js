import React, { useState, useEffect } from "react";
import TopProfileCard from "./TopProfileCard";

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
      <div className="text-4xl text-center md:text-4xl text-slate-50 bg-gradient-to-br from-blue-400 to-orange-500 text-transparent bg-clip-text font-bold mt-20 md:mb-4 m-4">
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
