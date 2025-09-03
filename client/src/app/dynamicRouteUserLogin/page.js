"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [newUser, setNewUser] = useState(null);

  const router = useRouter();
  const userList = [
    {
      id: 1,
      username: "john123",
      email: "john123@gmail.com",
      fullName: "John Doe",
      password: "john1234",
    },
    {
      id: 2,
      username: "emma456",
      email: "emma456@gmail.com",
      fullName: "Emma Watson",
      password: "emma4567",
    },
    {
      id: 3,
      username: "mike789",
      email: "mike789@gmail.com",
      fullName: "Michael Smith",
      password: "mike7890",
    },
    {
      id: 4,
      username: "sara101",
      email: "sara101@gmail.com",
      fullName: "Sara Johnson",
      password: "sara1010",
    },
    {
      id: 5,
      username: "alex202",
      email: "alex202@gmail.com",
      fullName: "Alex Brown",
      password: "alex2020",
    },
    {
      id: 6,
      username: "lisa303",
      email: "lisa303@gmail.com",
      fullName: "Lisa Taylor",
      password: "lisa3033",
    },
    {
      id: 7,
      username: "david404",
      email: "david404@gmail.com",
      fullName: "David Wilson",
      password: "david4044",
    },
    {
      id: 8,
      username: "nina505",
      email: "nina505@gmail.com",
      fullName: "Nina Martin",
      password: "nina5055",
    },
    {
      id: 9,
      username: "ryan606",
      email: "ryan606@gmail.com",
      fullName: "Ryan Clark",
      password: "ryan6066",
    },
    {
      id: 10,
      username: "olivia707",
      email: "olivia707@gmail.com",
      fullName: "Olivia Lewis",
      password: "olivia7077",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = userList.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (foundUser) {
      setNewUser(foundUser);
      console.log("Logged in user:", foundUser);
      router.push(`/dynamicRouteUserLogin/${foundUser.id}`);
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-yellow-200 h-screen w-screen text-black">
      <h1 className="text-4xl font-bold">
        Login
        <hr className="border-black" />
      </h1>
      <form
        className="bg-red-300 flex flex-col justify-center items-center gap-4 p-8 w-96 rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full">
          <label htmlFor="email">Enter email</label>
          <input
            name="email"
            type="email"
          
            value={formData.email}
            onChange={handleChange}
            className="px-2 rounded-sm w-full"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="password"> Enter password</label>
          <input
            name="password"
            type="password"
          
            value={formData.password}
            onChange={handleChange}
            className="px-2 rounded-sm w-full"
          />
        </div>
        <button type="submit" className="bg-green-400 hover:bg-green-500 w-20">
          Login
        </button>
      </form>

      {newUser && (
        <p className="mt-4">
          Welcome, <strong>{newUser.fullName}</strong> 🎉
        </p>
      )}
    </div>
  );
};

export default UserLogin;
