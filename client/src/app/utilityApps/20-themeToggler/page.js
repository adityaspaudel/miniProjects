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
			className={`h-screen w-screen p-4 gap-2 flex flex-col content-center items-center ${theme === "red" ? "bg-red-500" : "bg-gray-500"}`}
		>
			<h1 className="text-2xl font-bold">
				ThemeToggler <hr className="border-2 border-black" />
			</h1>
			{/* <div>some contents</div> */}
			<button
				className={`p-2 text-white rounded-sm ${theme === "red" ? "bg-gray-500 hover:bg-gray-600" : "bg-red-500 hover:bg-red-600"}`}
				onClick={toggleTheme}
			>
				{theme === "red" ? <div>Switch to Gray</div> : <div>Switch to Red</div>}
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
