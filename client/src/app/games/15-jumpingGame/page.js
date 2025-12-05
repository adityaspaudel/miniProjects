"use client";

import { useEffect, useState } from "react";

export default function JumpGame() {
	const [jumping, setJumping] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [paused, setPaused] = useState(false);
	const [obstacleLeft, setObstacleLeft] = useState(500);
	const [playerX, setPlayerX] = useState(50);
	const [playerY, setPlayerY] = useState(0);
	const [score, setScore] = useState(0);
	// Obstacle movement
	useEffect(() => {
		if (gameOver || paused) return;

		const interval = setInterval(() => {
			setScore(score + 1);
			setObstacleLeft((pos) => (pos <= -20 ? 500 : pos - 10));
		}, 50);

		return () => clearInterval(interval);
	}, [gameOver, paused, score]);

	// Collision detection
	useEffect(() => {
		if (paused) return;

		const checkCollision = setInterval(() => {
			if (
				!jumping &&
				obstacleLeft < playerX + 40 &&
				obstacleLeft + 40 > playerX &&
				playerY < 40
			) {
				setGameOver(true);
			}
		}, 50);

		return () => clearInterval(checkCollision);
	}, [jumping, obstacleLeft, playerX, playerY, paused]);

	// Handle jump & horizontal movement
	useEffect(() => {
		const handleKey = (e) => {
			if (gameOver || paused) return;

			if (e.key === "ArrowUp" && !jumping && playerY === 0) {
				setJumping(true);
				setTimeout(() => setJumping(false), 600);
			}
			if (e.key === "ArrowLeft") {
				setPlayerX((x) => Math.max(0, x - 20));
			}
			if (e.key === "ArrowRight") {
				setPlayerX((x) => Math.min(500 - 40, x + 20));
			}
		};

		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [jumping, playerY, gameOver, paused]);

	const restart = () => {
		setGameOver(false);
		setPaused(false);
		setObstacleLeft(500);
		setJumping(false);
		setPlayerX(50);
		setPlayerY(0);
		setScore(0);
	};

	return (
		<div className="flex flex-col items-center min-h-screen  py-10 text-black w-screen bg-pink-200">
			<h1 className="text-3xl font-bold mb-6">Jumping Game</h1>
			<h1 className="text-2xl font-semibold">Score: {score}</h1>
			<div
				className="relative bg-white border border-gray-400 rounded overflow-hidden"
				style={{ width: 500, height: 200 }}
			>
				{/* Player */}
				<div
					className="absolute bg-blue-600 w-6 h-6 transition-all duration-300 rounded-t-md"
					style={{
						left: playerX,
						bottom: jumping ? 100 : 0,
					}}
				>
					<div className="absolute bg-red-600 w-1 h-3 rounded-md mt-2 ml-5"></div>
				</div>
				{/* Obstacle */}
				<div
					className="absolute bg-red-600 w-10 h-10 rounded-tl-2xl rounded-tr-2xl"
					style={{
						bottom: 0,
						left: obstacleLeft,
					}}
				></div>
			</div>
			{gameOver && (
				<p className="text-red-600 font-bold text-xl mt-4">Game Over!</p>
			)}
			<div className="flex gap-4 mt-6">
				<button
					onClick={restart}
					className="px-4 py bg-blue-500 hover:bg-blue-600 text-white rounded shadow hover:shadow-md shadow-black cursor-pointer transition 1s"
				>
					Restart
				</button>
				<button
					onClick={() => setPaused((p) => !p)}
					className="px-4 py bg-yellow-500 hover:bg-yellow-600 rounded-sm text-white \ shadow hover:shadow-md shadow-black cursor-pointer transition 1s"
				>
					{paused ? "Play" : "Pause"}
				</button>
			</div>
			<p className="mt-4 text-gray-600">
				Press ⬆️ to jump, ⬅️ to move left, ➡️ to move right
			</p>
		</div>
	);
}
