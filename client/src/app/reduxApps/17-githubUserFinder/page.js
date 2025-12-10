"use client";
import { fetchUser } from "@/lib/redux/slices/userSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function GitHubUserFinder() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  const handleSearch = () => {
    if (username.trim()) {
      dispatch(fetchUser(username));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 text-black bg-green-400 min-h-screen p-4">
      <h1 className="text-2xl font-bold"> GitHub User Finder 🔍<hr className="border border-black"/></h1>

      <div className="flex mb-4 gap-2 ">
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-100 px-4 text-black py-2 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-1 text-white cursor-pointer rounded-md"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {user && (
        <div className="bg-white p-4 flex flex-col gap-2 rounded-sm">
          <img src={user.avatar_url} alt={user.login} className="" />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <div>
            <span>👥 Followers: {user.followers}</span>
            <span>⭐ Repos: {user.public_repos}</span>
          </div>
          <a
            href={user.html_url}
            target="_blank"
            className=" hover:border-blue-600 hover:text-blue-500 hover:underline px-2 py-1 w-48 cursor-pointer"
          >
            View Profile...
          </a>
        </div>
      )}
    </div>
  );
}
