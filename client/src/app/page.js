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
		"11-simonSays",
		"12-snakeGame",
		"13-aimTrainingGame",
		"14-wordScrambleGame",
		"15-jumpingGame",
		"16-brickBreaker",
		"17-racingGame",
		"18-ticTacToe-v2",
	];
	const customHooks = [
		"1-counter",
		"2-menuToggler",
		"3-formInputHandler",
		"4-themeSwitcher",
		"5-debounceHook",
		"6-fetchData",
		"7-memoVault",
		"8-useAuthApp",
		"9-infiniteScroll",
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

	const utilityApps = [
		"1-accordion",
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
		"27-calendarEventCreator",
		"28-simpleCalendar",
		"29-fuelCostCalculator",
		"30-ageCalculator",
		"31-skeletonTable",
		"32-taskPriorityManager",
		"33-meetingNotesOrganizer",
		"34-slideShow",
		"35-dailyJournals",
		"36-horoscopeCompatibilityCalculator",
		"37-notesWithTaggingSystem",
		"38-invoiceGenerator",
	];

	const renderCards = (items, basePath) =>
		items.map((item, idx) => (
			<Link href={`/${basePath}/${item}`} key={idx}>
				<div className="bg-gray-100 hover:font-semibold hover:bg-green-600 hover:text-white shadow-gray-400 shadow rounded-lg px-8 py-4 hover:scale-105 hover:shadow-md transition-transform cursor-pointer ">
					{item}
				</div>
			</Link>
		));

	return (
		<div className="min-h-screen text-black bg-cyan-200 p-6">
			<h1 className="text-4xl font-bold mb-8 text-center text-black">
				React Projects Hub
			</h1>

			<div className="flex flex-col md:flex-row md:justify-between gap-8">
				<div className="flex-1">
					<h2 className="text-2xl font-semibold mb-4 text-black text-center">
						Games
					</h2>
					<div className="flex flex-col flex-wrap gap-4 justify-center">
						{renderCards(games, "games")}
					</div>
				</div>

				<div className="flex-1">
					<h2 className="text-2xl font-semibold mb-4 text-black text-center">
						Redux Apps
					</h2>
					<div className="flex flex-col flex-wrap gap-4 justify-center">
						{renderCards(reduxApps, "reduxApps")}
					</div>
				</div>

				<div className="flex-1">
					<h2 className="text-2xl font-semibold mb-4 text-black text-center">
						Utility Apps
					</h2>
					<div className="flex flex-col flex-wrap gap-4 justify-center">
						{renderCards(utilityApps, "utilityApps")}
					</div>
				</div>

				<div className="flex-1">
					<h2 className="text-2xl font-semibold mb-4 text-black text-center">
						Custom Hooks
					</h2>
					<div className="flex flex-col flex-wrap gap-4 justify-center">
						{renderCards(customHooks, "customHooks")}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
