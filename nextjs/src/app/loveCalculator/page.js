"use client";

import React, { useState } from "react";

const Love = () => {
	const [lovePercentage, setLovePercentage] = useState([]);
	const obj = {
		A: 1,
		B: 2,
		C: 3,
		D: 4,
		E: 5,
		F: 6,
		G: 7,
		H: 8,
		I: 9,
		J: 10,
		K: 11,
		L: 12,
		M: 13,
		N: 14,
		O: 15,
		P: 16,
		Q: 17,
		R: 18,
		S: 19,
		T: 20,
		U: 21,
		V: 22,
		W: 23,
		X: 24,
		Y: 25,
		Z: 26,
	};
	const loveCalculate = () => {
		debugger;
		let totalLoveCap =
			document.getElementsByClassName("love-percentage")[0].value +
			document.getElementsByClassName("love-percentage")[1].value;
		let urLove = document.getElementsByClassName("love-percentage")[0].value;
		let urPartnerLove =
			document.getElementsByClassName("love-percentage")[1].value;
		let totalLove = urLove + urPartnerLove;
		let totalLoveUpper = totalLove.toUpperCase();

		setLovePercentage(totalLoveUpper);
		let totalLoveUpperObject = JSON.parse(totalLoveUpper);
		setLovePercentage(totalLoveUpperObject);
	};
	return (
		<div className="flex flex-col gap-10 justify-center items-center m-auto w-[600px]">
			<h1>Love Calculator</h1>
			<div className="flex gap-4 m-auto w-[400px]">
				<input
					className="love-percentage p-2 text-black rounded-md"
					type="text"
					placeholder="Your Name"
					required
				/>
				<span className="text-3xl">❤️</span>
				<input
					className="love-percentage p-2 text-black rounded-md"
					type="text"
					placeholder="Your partner Name"
					required
				/>
			</div>

			<button onClick={() => loveCalculate()}>Calculate love</button>
			<div className="text-4xl text-red-600">{lovePercentage}</div>
		</div>
	);
};

export default Love;
