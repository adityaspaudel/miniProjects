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
    <div >
      <div>
        <h1>Number Guessing Game</h1>
        <p>{message}</p>
        <input
          type="number"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter your guess"
        />
        <button onClick={handleGuess}>Guess</button>
        <button onClick={handleReset}>Reset</button>
        <p>Attempts: {attempts}</p>
      </div>
    </div>
  );
};

export default NumberGuessingGame;
