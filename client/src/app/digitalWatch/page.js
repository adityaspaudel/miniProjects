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
    <div>
      <div>DigitalWatch</div>
      {hours}:{minutes}:{seconds}
    </div>
  );
};

export default DigitalWatch;
