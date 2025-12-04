"use client";
import { useEffect, useState } from "react";

export default function BrickBreaker() {
	const gameWidth = 350;
	const gameHeight = 450;

	const [ball, setBall] = useState({ x: 160, y: 200, dx: 2, dy: -2 });
	const [paddleX, setPaddleX] = useState(140);
	const [bricks, setBricks] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [gameWon, setGameWon] = useState(false);

	const paddleWidth = 80;
	const paddleHeight = 12;
	const ballSize = 12;

	useEffect(() => {
		const rows = 3;
		const cols = 6;
		const brickW = 50;
		const brickH = 20;
		const padding = 8;

		const temp = [];
		for (let r = 0; r < rows; r++) {
			for (let c = 0; c < cols; c++) {
				temp.push({
					x: c * (brickW + padding) + 10,
					y: r * (brickH + padding) + 10,
					hit: false,
				});
			}
		}
		setBricks(temp);
	}, []);

	useEffect(() => {
		function handleKey(e) {
			if (e.key === "ArrowLeft" && paddleX > 0) setPaddleX(paddleX - 20);
			if (e.key === "ArrowRight" && paddleX < gameWidth - paddleWidth)
				setPaddleX(paddleX + 20);
		}
		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [paddleX]);

	useEffect(() => {
		if (gameOver || gameWon) return;

		const interval = setInterval(() => {
			setBall((prev) => {
				let newX = prev.x + prev.dx;
				let newY = prev.y + prev.dy;

				if (newX <= 0 || newX >= gameWidth - ballSize) prev.dx *= -1;
				if (newY <= 0) prev.dy *= -1;

				if (
					newY >= gameHeight - paddleHeight - ballSize &&
					newX + ballSize > paddleX &&
					newX < paddleX + paddleWidth
				) {
					prev.dy *= -1;
				}

				if (newY >= gameHeight - ballSize) {
					setGameOver(true);
				}

				setBricks((oldBricks) => {
					const newBricks = oldBricks.map((brick) => {
						if (!brick.hit) {
							if (
								newX > brick.x &&
								newX < brick.x + 50 &&
								newY > brick.y &&
								newY < brick.y + 20
							) {
								prev.dy *= -1;
								setScore((s) => s + 10);
								return { ...brick, hit: true };
							}
						}
						return brick;
					});

					const remaining = newBricks.filter((b) => !b.hit).length;
					if (remaining === 0) {
						setGameWon(true);
					}

					return newBricks;
				});

				return { ...prev, x: newX, y: newY };
			});
		}, 10);

		return () => clearInterval(interval);
	}, [paddleX, bricks, gameOver, gameWon]);

	function restart() {
		window.location.reload();
	}

	return (
		<div className="flex flex-col items-center pt-8 bg-gray-900 min-h-screen">
			<h1 className="text-white text-2xl font-bold mb-2">Break The Walls 🧱</h1>
			<p className="text-white mb-4">Score: {score}</p>

			<div
				className="relative bg-white rounded shadow-md"
				style={{ width: gameWidth, height: gameHeight }}
			>
				<div
					className="absolute bg-black rounded-full"
					style={{
						width: ballSize,
						height: ballSize,
						top: ball.y,
						left: ball.x,
					}}
				/>

				<div
					className="absolute bg-blue-500 rounded"
					style={{
						width: paddleWidth,
						height: paddleHeight,
						bottom: 0,
						left: paddleX,
					}}
				/>

				{bricks.map(
					(brick, i) =>
						!brick.hit && (
							<div
								key={i}
								className="absolute bg-teal-600 rounded"
								style={{
									width: 50,
									height: 20,
									top: brick.y,
									left: brick.x,
								}}
							/>
						)
				)}
			</div>

			{(gameOver || gameWon) && (
				<button
					className="mt-6 bg-green-400 hover:bg-green-500 px-6 py-2 rounded-lg text-black font-bold"
					onClick={restart}
				>
					Restart
				</button>
			)}

			{gameWon && (
				<p className="text-green-400 text-2xl font-bold mt-4">YOU WON 🏆</p>
			)}
			{gameOver && (
				<p className="text-red-400 text-2xl font-bold mt-4">GAME OVER 💀</p>
			)}
		</div>
	);
}
