"use client";
import React, { useState } from "react";

export default function TicTacToe() {
	const emptyBoard = Array(9).fill(null);

	const [board, setBoard] = useState(emptyBoard);
	const [xTurn, setXTurn] = useState(true);
	const [winningLine, setWinningLine] = useState([]);
	const [scores, setScores] = useState({ X: 0, O: 0 });
	const [winner, setWinner] = useState(null);

	// checking winner

	function checkWinner(b) {
		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let combo of winningCombinations) {
			const [a, bIdx, c] = combo;
			if (b[a] && b[a] === b[bIdx] && b[a] === b[c]) {
				return { winner: b[a], line: combo };
			}
		}
		return { winner: null, line: [] };
	}

	const handleClick = (index) => {
		if (board[index] || winner) return;

		const updatedBoard = [...board];
		const currentPlayer = xTurn ? "X" : "O";
		updatedBoard[index] = currentPlayer;
		setBoard(updatedBoard);

		const result = checkWinner(updatedBoard);
		if (result.winner) {
			setWinner(result.winner);
			setWinningLine(result.line);
			setScores((prev) => ({
				...prev,
				[result.winner]: prev[result.winner] + 1,
			}));
		} else if (updatedBoard.every(Boolean)) {
			setWinner("Draw");
		}

		setXTurn(!xTurn);
	};

	const restartGame = () => {
		setBoard(emptyBoard);
		setWinningLine([]);
		setWinner(null);
		setXTurn(true);
	};

	const isDraw = winner === "Draw";

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-400  p-4 text-black">
			<h1 className="text-4xl font-bold mb-4">Tic Tac Toe</h1>

			{/* Scoreboard */}
			<div className="mb-4 text-xl flex gap-6">
				<p className="text-blue-400 font-semibold">X Score: {scores.X}</p>
				<p className="text-green-400 font-semibold">O Score: {scores.O}</p>
			</div>

			{/* Game Grid */}
			<div className="grid grid-cols-3 gap-2">
				{board.map((val, idx) => (
					<button
						key={idx}
						onClick={() => handleClick(idx)}
						className={`w-20 h-20 flex items-center justify-center 
						text-3xl font-bold border border-gray-400 rounded
						${winningLine.includes(idx) ? "bg-green-500" : "bg-gray-700"}
						hover:bg-gray-600 transition`}
					>
						{val}
					</button>
				))}
			</div>

			{/* Winner / Draw Message */}
			{winner && !isDraw && (
				<h2 className="text-2xl font-semibold mt-4 text-green-300">
					{winner} Wins! 🎉
				</h2>
			)}

			{isDraw && (
				<h2 className="text-2xl font-semibold mt-4 text-yellow-300">
					It`s a Draw! 🤝
				</h2>
			)}

			<button
				onClick={restartGame}
				className="mt-6 px-6 py-2 bg-blue-500 rounded hover:bg-blue-600"
			>
				Restart Game
			</button>
		</div>
	);
}
