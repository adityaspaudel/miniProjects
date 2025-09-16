"use client";
import React, { useState } from "react";

const NumberGuessingGame = () => {
  const [number, setNumber] = useState("");
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [message, setMessage] = useState("Guess a number between 1 and 100!");
  const [attempts, setAttempts] = useState(0);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleGuess = () => {
    const guess = parseInt(number);
    if (isNaN(guess) || guess < 1 || guess > 100) {
      setMessage("Please enter a valid number between 1 and 100.");
      return;
    }

    setAttempts(attempts + 1);

    if (guess === secretNumber) {
      setMessage(`🎉 Correct! You guessed in ${attempts + 1} attempts!`);
    } else if (guess < secretNumber) {
      setMessage("⬆️ Too low! Try a higher number.");
    } else {
      setMessage("⬇️ Too high! Try a lower number.");
    }

    setNumber("");
  };

  const handleReset = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setNumber("");
    setAttempts(0);
    setMessage("Guess a number between 1 and 100!");
  };

  return (
    <div className="flex items-center justify-center gap-2 h-screen w-screen bg-slate-300 text-black">
      <div className="flex flex-col gap-4 content-center items-center min-h-1/n w-1/2 rounded-xl bg-amber-200">
        <h1 className="text-4xl font-bold">
          Number Guessing Game
          <hr className="border-black" />
        </h1>
        <p>{message}</p>
        <input className="p-2 rounded-sm"
          type="number"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter your guess"
        />
        <button
          onClick={handleGuess}
          className="bg-green-400 hover:bg-green-500 text-sm rounded-sm p-2"
        >
          Guess
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-400 hover:bg-gray-500 text-sm rounded-sm p-2"
        >
          Reset
        </button>
        <p>Attempts: {attempts}</p>
      </div>
    </div>
  );
};

export default NumberGuessingGame;
