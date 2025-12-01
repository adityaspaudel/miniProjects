"use client";
import Link from "next/link";
import React from "react";
const Home = () => {
	const games = [
		"1-coinFlipper",
		"2-crosswordPuzzleGame",
		"3-hangman",
		"4-loveCalculator",
		"5-numberGuessingGame",
		"6-quizBattleGame",
		"7-rockPaperScissors",
		"8-snakesAndLadders",
		"9-typingSpeedTestGame",
		"10-memoryCardGame",
		"11-ticTacToe",
		"12-snakeGame",
		"13-aimTrainingGame",
		"14-wordPuzzleGame",
		"15-jumpingGame",
	];

	const reduxApps = [
		"1-counter",
		"2-notesApp",
		"3-themeToggle",
		"4-userAuth",
		"5-todosApp",
		"6-langSwitcherApp",
		"7-habitsTracker",
		"8-budgetPlanner",
		"9-expenseTracker",
		"10-inventoryManagementApp",
		"11-moviesApp",
		"12-notificationSystem",
		"13-readingListApp",
		"14-reduxCart",
		"15-weatherApp",
		"16-wishlistApp",
		"17-githubUserFinder",
	];
	const simpleApps = [
		"1-accordian",
		"2-bmiCalculator",
		"3-calculator",
		"4-colorPickerApp",
		"5-counter",
		"6-currencyConverter",
		"7-digitalWatch",
		"8-formValidator",
		"9-matrixGenerator",
		"10-musicPlayer",
		"11-passwordGenerator",
		"12-passwordValidator",
		"13-pdfRenderer",
		"14-photoGallery",
		"15-pomodoroTimer",
		"16-qrCodeGenerator",
		"17-randomJokesGenerator",
		"18-reminderApp",
		"19-sidebarToggle",
		"20-themeToggler",
		"21-toDosListApp",
		"22-unitConverter",
		"23-websiteSurveys",
		"24-wordsAndCharactersCounter",
		"25-paginationWithAPI",
		"26-urlShortener",
	];

	return (
		<div>
			<div>React Projects</div>
			<div className="flex flex-wrap gap-4 cursor-pointer border-2 ">
				<div>
					<div>Games</div>
					{games.map((game, idx) => (
						<Link href={`/games/${game}`} key={idx}>
							<div>{game}</div>
						</Link>
					))}
				</div>
				<div>
					<div>Redux Apps</div>
					{reduxApps.map((rApp, idx) => (
						<Link href={`/reduxApps/${rApp}`} key={idx}>
							<div>{rApp}</div>
						</Link>
					))}
				</div>
				<div>
					<div>SimpleApps</div>
					{simpleApps.map((app, idx) => (
						<Link href={`/simpleApps/${app}`} key={idx}>
							<div>{app}</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
