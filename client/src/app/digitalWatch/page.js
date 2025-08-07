"use client";
import React, { useEffect, useState } from "react";

const DigitalWatch = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [year, setYear] = useState(currentTime.getFullYear());
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const [dayOfWeek, setDayOfWeek] = useState(currentTime.getDay());
  const dayOfMonth = currentTime.getDate();
  const [month, setMonth] = useState(currentTime.getMonth());

  useEffect(() => {
    setTimeout(() => {
      setCurrentTime(new Date());
      setYear(currentTime.getFullYear());
      switch (dayOfWeek) {
        case 0:
          setDayOfWeek("sunday");
          break;
        case 1:
          setDayOfWeek("monday");
          break;
        case 2:
          setDayOfWeek("tuesday");
          break;
        case 3:
          setDayOfWeek("wednesday");
          break;
        case 4:
          setDayOfWeek("thursday");
          break;
        case 5:
          setDayOfWeek("friday");
          break;
        case 6:
          setDayOfWeek("Saturday");
          break;
      }

      switch (month) {
        case 0:
          setMonth("january");
          break;
        case 1:
          setMonth("february");
          break;
        case 2:
          setMonth("march");
          break;
        case 3:
          setMonth("april");
          break;
        case 4:
          setMonth("may");
          break;
        case 5:
          setMonth("june");
          break;
        case 6:
          setMonth("july");
          break;
        case 7:
          setMonth("august");
          break;
        case 8:
          setMonth("september");
          break;
        case 9:
          setMonth("october");
          break;
        case 10:
          setMonth("november");
          break;
        case 11:
          setMonth("december");
          break;
      }
    }, 1000);
  }, [seconds]);

  console.log(`${hours}:${minutes}:${seconds}`);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 bg-black">
      <div className="text-green-400">DigitalWatch</div>
      <div className="w-64 p-6 text-5xl font-bold text-green-400 bg-gray-800 border-2 rounded-2xl">
        {hours}:{minutes}:{seconds}
      </div>
      <div className="text-red-400">
        {dayOfWeek}, {dayOfMonth}/{month}/{year}
      </div>
    </div>
  );
};

export default DigitalWatch;
