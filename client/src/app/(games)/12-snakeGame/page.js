"use client";

import { useEffect, useState } from "react";

export default function SnakeGame() {
	const gridSize = 20;

	const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
	const [food, setFood] = useState({
		x: Math.floor(Math.random() * gridSize),
		y: Math.floor(Math.random() * gridSize),
	});
	const [direction, setDirection] = useState({ x: 1, y: 0 });
	const [gameOver, setGameOver] = useState(false);

	// Handle arrow keys
	useEffect(() => {
		const handleKey = (e) => {
			if (e.key === "ArrowUp" && direction.y !== 1)
				setDirection({ x: 0, y: -1 });
			if (e.key === "ArrowDown" && direction.y !== -1)
				setDirection({ x: 0, y: 1 });
			if (e.key === "ArrowLeft" && direction.x !== 1)
				setDirection({ x: -1, y: 0 });
			if (e.key === "ArrowRight" && direction.x !== -1)
				setDirection({ x: 1, y: 0 });
		};

		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [direction]);

	// Game Loop
	useEffect(() => {
		if (gameOver) return;

		const interval = setInterval(() => {
			setSnake((prevSnake) => {
				const newSnake = [...prevSnake];
				const head = {
					x: newSnake[0].x + direction.x,
					y: newSnake[0].y + direction.y,
				};

				// Hit wall → Game Over
				if (
					head.x < 0 ||
					head.x >= gridSize ||
					head.y < 0 ||
					head.y >= gridSize
				) {
					setGameOver(true);
					clearInterval(interval);
					return prevSnake;
				}

				// Hit itself → Game Over
				for (let part of newSnake) {
					if (head.x === part.x && head.y === part.y) {
						setGameOver(true);
						clearInterval(interval);
						return prevSnake;
					}
				}

				newSnake.unshift(head);

				// If eaten food
				if (head.x === food.x && head.y === food.y) {
					setFood({
						x: Math.floor(Math.random() * gridSize),
						y: Math.floor(Math.random() * gridSize),
					});
				} else {
					newSnake.pop(); // move normally
				}

				return newSnake;
			});
		}, 150);

		return () => clearInterval(interval);
	}, [direction, food, gameOver]);

	const restartGame = () => {
		setSnake([{ x: 10, y: 10 }]);
		setDirection({ x: 1, y: 0 });
		setFood({
			x: Math.floor(Math.random() * gridSize),
			y: Math.floor(Math.random() * gridSize),
		});
		setGameOver(false);
	};

	// Render Grid
	const grid = [];
	for (let y = 0; y < gridSize; y++) {
		for (let x = 0; x < gridSize; x++) {
			const isSnake = snake.some((s) => s.x === x && s.y === y);
			const isFood = food.x === x && food.y === y;

			grid.push(
				<div
					key={`${x}-${y}`}
					className={`w-5 h-5 border border-gray-200 ${
						isSnake ? "bg-green-600" : isFood ? "bg-red-600" : "bg-white"
					}`}
				></div>
			);
		}
	}

	return (
		<div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen text-black">
			<h1 className="text-3xl font-bold mb-4">Snake Game </h1>

			<div
				className="grid"
				style={{
					gridTemplateColumns: `repeat(${gridSize}, 20px)`,
				}}
			>
				{grid}
			</div>

			{gameOver && (
				<p className="text-red-600 font-bold text-xl mt-4">Game Over!</p>
			)}

			<button
				onClick={restartGame}
				className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
			>
				Restart
			</button>
		</div>
	);
}
