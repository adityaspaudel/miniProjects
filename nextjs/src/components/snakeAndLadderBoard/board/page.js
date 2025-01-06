"use client";

import React, { useEffect, useState } from "react";
import Ladder from "../ladder/page";

const SnakeAndLadderBoard = () => {
	// const squares = Array.from({ length: 100 }, (_, index) => index + 1);

	// // Define snakes and ladders
	// const snakes = {
	// 	16: 6,
	// 	47: 26,
	// 	49: 11,
	// 	56: 53,
	// 	62: 19,
	// 	64: 60,
	// 	87: 24,
	// 	93: 73,
	// 	95: 75,
	// 	98: 78,
	// };
	// const ladders = {
	// 	1: 38,
	// 	4: 14,
	// 	9: 31,
	// 	21: 42,
	// 	28: 84,
	// 	36: 44,
	// 	51: 67,
	// 	71: 91,
	// 	80: 100,
	// };

	// return (
	// 	<div className="flex">
	// 		{squares.map((square) => {
	// 			const snakeTo = snakes[square];
	// 			const ladderTo = ladders[square];
	// 			return (
	// 				<div
	// 					key={square}
	// 					className={square}
	// 					style={{
	// 						backgroundColor: snakeTo
	// 							? "red"
	// 							: ladderTo
	// 							? "green"
	// 							: "lightblue",
	// 					}}>
	// 					{square}
	// 				</div>
	// 			);
	// 		})}
	// 	</div>
	// );

	// Create the matrix using nested loops
	const createMatrix = () => {
		const matrix = [];
		for (let i = 0; i < 10; i++) {
			const row = [];
			for (let j = 0; j < 10; j++) {
				row.push(i * 10 + j + 1); // Fill with sequential numbers
			}
			matrix.push(row);
		}
		return matrix;
	};

	// Generate the matrix
	const matrix = createMatrix();

	return (
		<div className="flex flex-col gap-2 justify-center items-center ">
			<h2>SnakeAndLadderBoard</h2>
			<table
				className="border-2 border-yellow-400"
				style={{ borderCollapse: "collapse" }}>
				<tbody>
					{matrix.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{row.map((cell, cellIndex) => (
								<td
									className="w-14 h-14 bg-blue-100 hover:bg-blue-400 text-black"
									key={cellIndex}
									style={{
										border: "2px solid black",
										padding: "10px",
										textAlign: "center",
									}}>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			{/* ladders1, ladder2, ladder3 */}
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "50vh",
				}}>
				<div className="flex  gap-10">
					<Ladder rungs1={4} />
					<Ladder rungs2={6} />

					<Ladder rungs3={10} />
				</div>
			</div>
		</div>
	);
};

export default SnakeAndLadderBoard;
