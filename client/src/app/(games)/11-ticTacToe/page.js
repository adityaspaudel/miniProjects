"use client";

import { useState } from "react";

export default function TicTacToe() {
	const initialBoard = Array(9).fill(null);
	const [board, setBoard] = useState(initialBoard);
	const [isXTurn, setIsXTurn] = useState(true);
	const [winner, setWinner] = useState(null);

	const checkWinner = (updatedBoard) => {
		const winningPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let pattern of winningPatterns) {
			const [a, b, c] = pattern;
			if (
				updatedBoard[a] &&
				updatedBoard[a] === updatedBoard[b] &&
				updatedBoard[a] === updatedBoard[c]
			) {
				return updatedBoard[a];
			}
		}

		return null;
	};

	const handleClick = (index) => {
		if (board[index] || winner) return;

		const updatedBoard = [...board];
		updatedBoard[index] = isXTurn ? "X" : "O";

		setBoard(updatedBoard);
		setIsXTurn(!isXTurn);

		const gameWinner = checkWinner(updatedBoard);
		if (gameWinner) setWinner(gameWinner);
	};

	const restartGame = () => {
		setBoard(initialBoard);
		setWinner(null);
		setIsXTurn(true);
	};

	return (
		<div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 text-black">
			<h1 className="text-3xl font-bold mb-6">Tic Tac Toe</h1>

			<div className="grid grid-cols-3 gap-2">
				{board.map((value, index) => (
					<button
						key={index}
						onClick={() => handleClick(index)}
						className="w-20 h-20 text-3xl font-bold flex items-center justify-center bg-white shadow rounded"
					>
						{value}
					</button>
				))}
			</div>

			{winner && (
				<p className="text-2xl font-semibold mt-4 text-green-600">
					🎉 Winner: {winner}
				</p>
			)}

			{!winner && board.every((cell) => cell !== null) && (
				<p className="text-2xl font-semibold mt-4 text-blue-600">
					It's a Draw! 😄
				</p>
			)}

			<button
				onClick={restartGame}
				className="mt-6 px-4 py-2 bg-blue-600 text-white rounded shadow"
			>
				Restart Game
			</button>
		</div>
	);
}
