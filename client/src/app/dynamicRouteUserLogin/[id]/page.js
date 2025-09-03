"use client";

import { useParams } from "next/navigation";
import React from "react";

const UserProfile = () => {
  const params = useParams();
  console.log(params);
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

  const user = userList.find((u) => u.id == params.id);

  return (
    <div>
      <div>UserProfile</div>
      {params.id}

      <div>{JSON.stringify(user)}</div>
    </div>
  );
};

export default UserProfile;
