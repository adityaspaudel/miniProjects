"use client";

import React, { useState } from "react";

const UserLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [newUser, setNewUser] = useState("");
  const userList = [
    {
      id: 1,
      username: "john123",
      email: "john123@example.com",
      fullName: "John Doe",
      password: "john1234",
    },
    {
      id: 2,
      username: "emma456",
      email: "emma456@example.com",
      fullName: "Emma Watson",
      password: "emma4567",
    },
    {
      id: 3,
      username: "mike789",
      email: "mike789@example.com",
      fullName: "Michael Smith",
      password: "mike7890",
    },
    {
      id: 4,
      username: "sara101",
      email: "sara101@example.com",
      fullName: "Sara Johnson",
      password: "sara1010",
    },
    {
      id: 5,
      username: "alex202",
      email: "alex202@example.com",
      fullName: "Alex Brown",
      password: "alex2020",
    },
    {
      id: 6,
      username: "lisa303",
      email: "lisa303@example.com",
      fullName: "Lisa Taylor",
      password: "lisa3033",
    },
    {
      id: 7,
      username: "david404",
      email: "david404@example.com",
      fullName: "David Wilson",
      password: "david4044",
    },
    {
      id: 8,
      username: "nina505",
      email: "nina505@example.com",
      fullName: "Nina Martin",
      password: "nina5055",
    },
    {
      id: 9,
      username: "ryan606",
      email: "ryan606@example.com",
      fullName: "Ryan Clark",
      password: "ryan6066",
    },
    {
      id: 10,
      username: "olivia707",
      email: "olivia707@example.com",
      fullName: "Olivia Lewis",
      password: "olivia7077",
    },
  ];
  // console.log(userList);
  const handleChange = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted successfully " + JSON.stringify(formData));

    const x = userList.filter(
      (v, k) => v.email === formData.email && v.password === formData.password
    );
    setNewUser(x);
    console.log("new User: ", x);
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-yellow-200 h-screen w-screen text-black">
      <h1 className="text-4xl font-bold">
        Login
        <hr className="border-black" />
      </h1>
      <form
        className="bg-red-300 flex flex-col gap-2 p-4"
        onSubmit={handleSubmit}
      >
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="bg-green-400 hover:bg-green-500">
          login
        </button>
      </form>

      {JSON.stringify(newUser)}
    </div>
  );
};

export default UserLogin;
