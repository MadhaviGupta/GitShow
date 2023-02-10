import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import TopProfile from "../components/TopProfile";
import TopProjects from "../components/TopProjects";
import Sidebar from "../components/Sidebar";
import SearchProfile from "../components/SearchProfile";
export default function Explore() {
  const [searchip, setSearchIp] = useState();

  const [user, setUser] = useState();
  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/${value}`);
    const data = await response.json();
    return setUser(data);
  };
  let value;
  const handleSearch = (e) => {
    e.preventDefault();
    value = searchip;
    fetchData();
    setSearchIp("");
  };
  return (
    <>
      <div className="w-full font-manrope tracking-wide flex flex-row bg-gradient-to-br from-orange-800 to-blue-900 h-auto bg-cover md:justify-end">
        <Sidebar />
        <div className="flex md:w-5/6 justify-center">
          <div className="md:w-4/6 w-full md:ml-4 mx-2 h-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-2xl flex flex-col my-3 p-6">
            <form
              onSubmit={handleSearch}
              className="flex justify-center w-full md:mt-10"
            >
              <input
                className="h-12 w-full md:w-3/5 m-1 p-2 md:p-3 rounded-xl bg-blue-400 bg-opacity-10 text-slate-50"
                placeholder="Search here..."
                value={searchip}
                onChange={(e) => setSearchIp(e.target.value)}
              ></input>
              <button type="submit">
                <BiSearchAlt className="m-3 w-8 h-8 text-white hover:text-blue-200" />
              </button>
            </form>
            {user && (
              <SearchProfile
                avatar={user.avatar_url}
                id={user.id}
                name={user.name}
                login={user.login}
                blog={user.blog}
                company={user.company}
                email={user.email}
                location={user.location}
                bio={user.bio}
                twitter_username={user.twitter_username}
                public_repos={user.public_repos}
                followers={user.followers}
                following={user.following}
              />
            )}

            <TopProjects />
            <TopProfile />
          </div>
        </div>
      </div>
    </>
  );
}
