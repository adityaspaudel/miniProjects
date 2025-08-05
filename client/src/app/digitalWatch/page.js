"use client";
import React, { useState } from "react";

const DigitalWatch = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  setTimeout(() => {
    setCurrentTime(new Date());
  }, 1000);
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  console.log(`${hours}:${minutes}:${seconds}`);

  return (
    <div className="flex flex-col gap-2 items-center justify-center ">
      <div className="text-green-400">DigitalWatch</div>
      <div className="text-5xl rounded-2xl text-green-400 bg-gray-800 font-bold border-2 p-6 w-64">
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
};

export default DigitalWatch;
