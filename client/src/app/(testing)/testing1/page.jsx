"use client";

import React, { useState } from "react";

const MyApp = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>MyApp</div>
      <MyButton onClick={handleClick} count={count}></MyButton>
      <MyButton onClick={handleClick} count={count}></MyButton>
    </div>
  );
};

export default MyApp;

const MyButton = ({ onClick, count }) => {
  return <button onClick={onClick}>you clicked {count} times</button>;
};
