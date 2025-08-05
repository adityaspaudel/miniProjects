"use client";
import React, { useEffect, useState } from "react";

const DigitalWatch = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const dayOfWeek = currentTime.getDay();
  const dayOfMonth = currentTime.getDate();
  const month = currentTime.getMonth();
  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, [seconds]);

  console.log(`${hours}:${minutes}:${seconds}`);

  return (
    <div className="flex flex-col gap-2 items-center justify-center bg-black h-screen">
      <div className="text-green-400">DigitalWatch</div>
      <div className="text-5xl rounded-2xl text-green-400 bg-gray-800 font-bold border-2 p-6 w-64">
        {hours}:{minutes}:{seconds}
      </div>
      <div className="text-red-400">
        dayofweek:{dayOfWeek + 1}, month:{month + 1},dayofMonth:{dayOfMonth}
      </div>
    </div>
  );
};

export default DigitalWatch;
