"use client";
import { useState, useEffect } from "react";

export default function SimonSays() {
	const COLORS = ["RED", "GREEN", "BLUE", "YELLOW"];
	const MAX_LEVEL = 5; // Level to win the game

	/* =====================
     STATE
  ====================== */
	const [sequence, setSequence] = useState([]);
	const [userSequence, setUserSequence] = useState([]);
	const [message, setMessage] = useState("Press Start to Play");
	const [level, setLevel] = useState(0);
	const [isUserTurn, setIsUserTurn] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [winner, setWinner] = useState(false);

	const addColorToSequence = () => {
		const nextColor = COLORS[Math.floor(Math.random() * COLORS.length)];
		setSequence((seq) => [...seq, nextColor]);
		setMessage("Watch the sequence...");
		setIsUserTurn(false);
	};

	const startGame = () => {
		setSequence([]);
		setUserSequence([]);
		setLevel(0);
		setGameOver(false);
		setWinner(false);
		addColorToSequence();
	};

	useEffect(() => {
		if (sequence.length === 0) return;

		let i = 0;
		const interval = setInterval(() => {
			setMessage(`Simon says: ${sequence[i]}`);
			i++;
			if (i >= sequence.length) {
				clearInterval(interval);
				setMessage("Your turn!");
				setUserSequence([]);
				setIsUserTurn(true);
			}
		}, 800);

		return () => clearInterval(interval);
	}, [sequence]);

	const handleUserClick = (color) => {
		if (!isUserTurn || gameOver || winner) return;

		const nextUserSequence = [...userSequence, color];
		setUserSequence(nextUserSequence);

		const currentIndex = nextUserSequence.length - 1;
		if (color !== sequence[currentIndex]) {
			setMessage("Wrong! Game Over.");
			setGameOver(true);
			setIsUserTurn(false);
			return;
		}

		if (nextUserSequence.length === sequence.length) {
			const nextLevel = level + 1;
			setLevel(nextLevel);

			if (nextLevel >= MAX_LEVEL) {
				setMessage("Congratulations! You Won! 🎉");
				setWinner(true);
				setIsUserTurn(false);
			} else {
				setMessage("Correct! Next Level...");
				setTimeout(() => addColorToSequence(), 1000);
			}
		}
	};

	return (
		<div className="flex justify-center items-center h-screen w-screen bg bg-green-600">
			<div className="p-4 w-xl mx-auto space-y-4 text-center font-mono bg-gray-200">
				<h1 className="text-2xl font-bold">Simon Says</h1>
				<p>Level: {level}</p>
				<p className="mb-2">{message}</p>
				<p>color order: {sequence}</p>
				<div className="grid grid-cols-2 gap-2">
					{COLORS.map((color) => (
						<button
							key={color}
							className={`p-6 font-bold text-white rounded ${
								color === "RED"
									? "bg-red-500"
									: color === "GREEN"
										? "bg-green-500"
										: color === "BLUE"
											? "bg-blue-500"
											: "bg-yellow-400"
							}`}
							onClick={() => handleUserClick(color)}
							disabled={gameOver || winner}
						>
							{color}
						</button>
					))}
				</div>
				<button
					className="mt-4 border px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white"
					onClick={startGame}
				>
					Start Game
				</button>
				{(gameOver || winner) && (
					<p className="mt-2 font-bold text-lg">
						{gameOver ? "You Lost! 😢" : "You Won! 🎉"}
					</p>
				)}
			</div>
		</div>
	);
}
