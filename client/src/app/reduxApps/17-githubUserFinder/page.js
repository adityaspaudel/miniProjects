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
    <div className="flex flex-col  text-black bg-gray-100 ">
      <h1 className="text-2xl ">🔍 GitHub User Finder</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          
        />
        <button
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {loading && <p >Loading...</p>}
      {error && <p >{error}</p>}

      {user && (
        <div className="bg-white ">
          <img
            src={user.avatar_url}
            alt={user.login}
            className=""
          />
          <h2 >{user.name || user.login}</h2>
          <p >{user.bio}</p>
          <div >
            <span>👥 Followers: {user.followers}</span>
            <span>⭐ Repos: {user.public_repos}</span>
          </div>
          <a
            href={user.html_url}
            target="_blank"
          
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
