"use client";
import React, { useEffect, useState } from "react";

const SnakeAndLadder = () => {
	const [counter, setCounter] = useState(0); // Tracks the number of updates
	const [value, setValue] = useState(0); // State being updated
	const snakes = {
		16: 6,
		48: 26,
		49: 11,
		56: 53,
		62: 19,
		64: 60,
		87: 24,
		93: 73,
		95: 75,
		98: 78,
	};
	const ladders = {
		1: 38,
		4: 14,
		9: 31,
		21: 42,
		28: 84,
		36: 44,
		51: 67,
		71: 91,
		80: 100,
	};
	useEffect(() => {
		// Start a timer to update the state
		const interval = setInterval(() => {
			setCounter((prevCounter) => {
				if (prevCounter < 100) {
					setValue((prevValue) => prevValue + 1); // Update value
					return prevCounter + 1; // Increment counter
				} else {
					clearInterval(interval); // Stop updates after 100 times
					return prevCounter;
				}
			});
		}, 0); // Update every 100ms
	}, []);

	return (
		<div>
			<h2>Snake and Ladder</h2>
			<div></div>
		</div>
	);
};

export default SnakeAndLadder;
