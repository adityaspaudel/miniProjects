"use client";

import React, { useState } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("red");

  const toggleTheme = () => {
    if (theme === "red") {
      setTheme("gray");
      console.log(theme);
    } else if (theme === "gray") {
      setTheme("red");
      console.log(theme);
    }
  };

  return (
    <div
      className={`h-96 w-96 ${theme === "red" ? "bg-red-400" : "bg-gray-400"}`}
    >
      <div>ThemeToggler</div>
      <div>some contents</div>
      <button
        className={`${theme === "red" ? "bg-gray-400" : "bg-red-400"}`}
        onClick={toggleTheme}
      >
        {theme === "red" ? <div>gray</div> : <div>red</div>}
      </button>
      <ul className={` `}>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cucumber</li>
        <li>Date</li>
      </ul>
    </div>
  );
};

export default ThemeToggler;
