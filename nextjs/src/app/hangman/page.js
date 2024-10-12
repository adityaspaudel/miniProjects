"use client";

import { Button } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const HangmanGame = () => {
	const [count, setCount] = useState(0);
	// const [imageAttributes, setImageAttributes] = useState();
	const [selection, setSelection] = [""];

	const answer = ["C", "R", "I", "S", "T", "I", "A", "N"];
	const question = ["C", "_", "I", "_", "T", "_", "_", "N"];
	const keyboardKeys = [
		["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
		["A", "S", "D", "F", "G", "H", "J", "K", "L"],
		["Z", "X", "C", "V", "B", "N", "M"],
	];

	const handleCount = () => {
		setCount(count + 1);
	};
	const handleClick = (props) => {
		setSelection(props);
	};
	if (count === 1) {
		document.getElementsByClassName("imageHangman")[0].src =
			"/hangman-images/hangman-1.svg";
	}
	if (count === 2) {
		document.getElementsByClassName("imageHangman")[0].src =
			"/hangman-images/hangman-2.svg";
	}
	if (count === 3) {
		document.getElementsByClassName("imageHangman")[0].src =
			"/hangman-images/hangman-3.svg";
	}
	if (count === 4) {
		document.getElementsByClassName("imageHangman")[0].src =
			"/hangman-images/hangman-4.svg";
	}
	if (count === 5) {
		document.getElementsByClassName("imageHangman")[0].src =
			"/hangman-images/hangman-5.svg";
	}
	if (count === 6) {
		document.getElementsByClassName("imageHangman")[0].src =
			"/hangman-images/hangman-6.svg";
	}
	if (count === 7) {
		document.getElementsByClassName("imageHangman")[0].src =
			"/hangman-images/lost.gif";

		document.getElementsByClassName("btn1")[0].style = "visibility:hidden";
	}

	return (
		<div className="flex gap-8">
			<div className="flex flex-col gap-4 content-center items-center">
				<h1>HangmanGame</h1>
				<div>
					<div className="text-[50px]">{question}</div>
					<div className="text-[14px] text-green-200 italic">
						Hint: religion
					</div>
				</div>
				<div className="flex flex-col gap-4">
					{keyboardKeys.map((row) => {
						// return <span>{row} </span>;
						return (
							<div className="flex gap-4">
								{row.map((key) => {
									return (
										<span className="flex gap-4 h-10 w-10 bg-red-400 text-center p-8 hover:bg-green-400">
											{key}
										</span>

										// onClick={() => handleClick(key)}
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
			<div className="bg-red-400">
				<button
					className="btn1"
					onClick={handleCount}>
					here, hangman is hanged
				</button>
				<div>{count}</div>
				<Image
					className="imageHangman"
					src="/hangman-images/hangman-0.svg"
					height={100}
					width={100}
				/>
			</div>
			{selection}
		</div>
	);
};

export default HangmanGame;
