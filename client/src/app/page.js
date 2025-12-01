"use client";
import Link from "next/link";
import React from "react";
const Home = () => {
	const games = [
		"coinFlipper",
		"crosswordPuzzleGame",
		"hangman",
		"loveCalculator",
		"numberGuessingGame",
		"quizBattleGame",
		"rockPaperScissors",
		"snakesAndLadders",
		"typingSpeedTestGame",
		"memoryCardGame",
		"ticTacToe",
		"snakeGame",
		"aimTrainingGame",
		"wordPuzzleGame",
		"jumpingGame",
	];

	return (
		<div>
			<div>React Projects</div>
			<div className="flex flex-wrap gap-4 cursor-pointer border-2 ">
				<div>
					<div>Games</div>
					{games.map((game, idx) => (
						<Link href={`/games/${idx + 1}-${game}`} key={idx}>
							<div>{game}</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
