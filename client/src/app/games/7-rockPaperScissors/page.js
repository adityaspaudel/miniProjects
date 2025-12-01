"use client";
import React, { useState, useEffect } from "react";

const RockPaperScissors = () => {
	const [computerChoice, setComputerChoice] = useState(null);
	const [yourChoice, setYourChoice] = useState(null);
	const [result, setResult] = useState(null);
	const handleClick = (val) => {
		const randomNumber = Math.round(Math.random(3 - 1 + 1));

		if (randomNumber === 1) {
			setComputerChoice("rock");
		} else if (randomNumber == 2) {
			setComputerChoice("paper");
		} else {
			setComputerChoice("scissors");
		}
		setYourChoice(val);
		console.log("your choice: ", yourChoice, "\n\n");

		console.log("computer choice: ", computerChoice);
	};

	useEffect(() => {
		if (computerChoice === null && yourChoice === null) {
			setResult(null);
		} else if (computerChoice === yourChoice) {
			setResult("match drawn");
		} else if (computerChoice === "rock" && yourChoice == "paper") {
			setResult("you won");
		} else if (computerChoice === "rock" && yourChoice == "scissors") {
			setResult("computer won");
		} else if (computerChoice === "paper" && yourChoice == "rock") {
			setResult("computer won");
		} else if (computerChoice === "paper" && yourChoice == "scissors") {
			setResult("you won");
		}
	}, [yourChoice, computerChoice]);
	return (
		<main className="flex flex-col items-center justify-center gap-4 border-0 bg-amber-100 text-black h-screen w-screen">
			<div className="flex flex-col items-center justify-center gap-4 border-0 bg-amber-300 text-black p-6 rounded-md">
				<div className="text-4xl font-bold">Rock Paper Scissors Game<hr className="border"/></div>
				<div className="flex gap-12">
					<button
						className="p-2 bg-green-400 border-2 rounded-lg border-amber-300 hover:border-green-400"
						onClick={(e) => {
							e.preventDefault();
							handleClick("rock");
						}}
					>
						Rock
					</button>
					<button
						className="p-2 bg-green-400 border-2 rounded-lg border-amber-300 hover:border-green-400"
						onClick={(e) => {
							e.preventDefault();
							handleClick("paper");
						}}
					>
						Paper
					</button>
					<button
						className="p-2 bg-green-400 border-2 rounded-lg border-amber-300 hover:border-green-400"
						onClick={(e) => {
							e.preventDefault();
							handleClick("scissors");
						}}
					>
						Scissors
					</button>{" "}
				</div>
				<div>
					<div>Your Choice: {yourChoice}</div>
					<div>Computer Choice</div>: {computerChoice}
					<div>
						Result:{" "}
						{result && (
							<div>
								{result === "you won" ? (
									<div className="bg-green-500 text-gray-100 px-2 rounded-sm text-center">{result}</div>
								) : (
									<div>
										{result == "computer won" ? (
											<div className="bg-red-500 text-gray-100 px-2 rounded-sm text-center">{result}</div>
										) : (
											<div className="bg-yellow-500 text-gray-100 px-2 rounded-sm text-center">{result}</div>
										)}
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

export default RockPaperScissors;
