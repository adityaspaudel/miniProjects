"use client";
import React, { useState } from "react";

export default function TicTacToe() {
	const emptyBoard = Array(9).fill(null);

	const [board, setBoard] = useState(emptyBoard);
	const [xTurn, setXTurn] = useState(true);
	const [winningLine, setWinningLine] = useState([]);
	const [scores, setScores] = useState({ X: 0, O: 0 });
	const [winner, setWinner] = useState(null);

	// check winner
	function checkWinner(updatedBoard) {
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
			if (
				updatedBoard[a] &&
				updatedBoard[a] === updatedBoard[bIdx] &&
				updatedBoard[a] === updatedBoard[c]
			) {
				return { winner: updatedBoard[a], line: combo };
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
		<div className="flex flex-col items-center justify-center min-h-screen bg-cyan-200 p-4 text-black">
			{" "}
			<h1 className="text-4xl font-bold mb-4">Tic Tac Toe</h1>
			<div className="flex flex-col items-center justify-center min-w-md min-h-md  p-4 text-black rounded-sm bg-gray-100">
				{/* Scoreboard */}
				<div className="mb-4 text-xl flex gap-6">
					<p className="text-blue-500 font-semibold">X Score: {scores.X}</p>
					<p className="text-green-500 font-semibold">O Score: {scores.O}</p>
				</div>
				{/* Game Board (Flex, NOT grid) */}
				<div className="flex flex-col gap-1">
					{[0, 1, 2].map((row) => (
						<div key={row} className="flex gap-1">
							{[0, 1, 2].map((col) => {
								const idx = row * 3 + col;
								return (
									<button
										key={idx}
										onClick={() => handleClick(idx)}
										className={`w-20 h-20 flex items-center justify-center 
                          text-4xl font-bold border  rounded
                          ${winningLine.includes(idx) ? "bg-green-500" : "bg-cyan-200"}
                          hover:bg-gray-200 transition`}
									>
										{board[idx]}
									</button>
								);
							})}
						</div>
					))}
				</div>
				{/* Winner / Draw */}
				{winner && !isDraw && (
					<h2 className="text-2xl font-semibold mt-4 text-green-500">
						{winner} Wins! 🎉
					</h2>
				)}
				{isDraw && (
					<h2 className="text-2xl font-semibold mt-4 text-yellow-500">
						It`s a Draw! 🤝
					</h2>
				)}
				<button
					onClick={restartGame}
					className="mt-6 px-6 py-2 bg-blue-500 rounded hover:bg-blue-600 text-white"
				>
					Restart Game
				</button>
			</div>
		</div>
	);
}
