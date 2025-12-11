"use client";

import { useEffect, useState } from "react";

export default function AimTrainer() {
	const [targetPos, setTargetPos] = useState({ x: 100, y: 100 });
	const [score, setScore] = useState(0);
	const [timeLeft, setTimeLeft] = useState(30);
	const [playing, setPlaying] = useState(false);

	const gameAreaSize = { width: 500, height: 500 };

	// Generate new random target
	const moveTarget = () => {
		const x = Math.floor(Math.random() * (gameAreaSize.width - 50));
		const y = Math.floor(Math.random() * (gameAreaSize.height - 50));

		setTargetPos({ x, y });
	};

	// Countdown timer
	useEffect(() => {
		if (!playing) return;

		if (timeLeft === 0) {
			setPlaying(false);
			return;
		}

		const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
		return () => clearTimeout(timer);
	}, [timeLeft, playing]);

	const startGame = () => {
		setScore(0);
		setTimeLeft(30);
		setPlaying(true);
		moveTarget();
	};

	const handleHit = () => {
		if (!playing) return;
		setScore(score + 1);
		moveTarget();
	};

	return (
		<div className="flex flex-col items-center py-10 min-h-screen bg-blue-200 text-black">
			<h1 className="text-3xl font-bold mb-4">Aim Trainer Game</h1>

			<div className="flex gap-8 text-xl font-semibold mb-4">
				<span>Score: {score}</span>
				<span>Time: {timeLeft}s</span>
			</div>

			{/* Game Box */}
			<div
				className="relative bg-white border border-gray-400 rounded"
				style={{
					width: gameAreaSize.width,
					height: gameAreaSize.height,
				}}
			>
				{/* Target */}
				{playing && (
					<div
						onClick={handleHit}
						className="absolute w-10 h-10 bg-red-500 rounded-full cursor-pointer shadow-lg"
						style={{
							left: targetPos.x,
							top: targetPos.y,
						}}
					></div>
				)}
			</div>

			{!playing && (
				<button
					onClick={startGame}
					className="mt-6 px-4 py-2 bg-blue-600 text-white rounded shadow"
				>
					Start Game
				</button>
			)}
		</div>
	);
}
