"use client";

import { useState, useEffect } from "react";

export default function WordScramble() {
	const words = ["react", "javascript", "node", "express", "nextjs", "mongodb"];

	const [originalWord, setOriginalWord] = useState("");
	const [scrambledWord, setScrambledWord] = useState("");
	const [input, setInput] = useState("");
	const [message, setMessage] = useState("");

	// Shuffle function
	const scramble = (word) => {
		return word
			.split("")
			.sort(() => Math.random() - 0.5)
			.join("");
	};

	const newWord = () => {
		const word = words[Math.floor(Math.random() * words.length)];
		setOriginalWord(word);
		setScrambledWord(scramble(word));
		setInput("");
		setMessage("");
	};

	useEffect(() => {
		newWord();
	}, []);

	const checkAnswer = () => {
		if (input.toLowerCase() === originalWord.toLowerCase()) {
			setMessage("✅ Correct!");
		} else {
			setMessage("❌ Wrong! Try again.");
		}
	};

	return (
		<div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 text-black">
			<h1 className="text-3xl font-bold mb-6">Word Scramble Game</h1>

			<div className="bg-white p-6 rounded shadow text-center w-80">
				<p className="text-xl font-semibold mb-4">Unscramble this word:</p>

				<p className="text-3xl font-bold mb-4 text-blue-600">{scrambledWord}</p>

				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Your guess..."
					className="w-full px-3 py-2 border rounded mb-3"
				/>

				<button
					onClick={checkAnswer}
					className="w-full px-4 py-2 bg-green-600 text-white rounded mb-3"
				>
					Check
				</button>

				<button
					onClick={newWord}
					className="w-full px-4 py-2 bg-blue-600 text-white rounded"
				>
					New Word
				</button>

				{message && <p className="text-xl font-semibold mt-4">{message}</p>}
			</div>
		</div>
	);
}
