"use client";
import React, { useState } from "react";

const RockPaperScissors = () => {
  const [computerChoice, setComputerChoice] = useState(null);
  const [yourChoice, setYourChoice] = useState(null);
  const [result, setResult] = useState(null);
  const handleClick = (val) => {
    const randomNumber = Math.round(Math.random(3 - 1 + 1));

    if (randomNumber === 1) {
      setComputerChoice("rock");
    } else if (randomNumber == 2) {
      setComputerChoice("paper");
    } else {
      setComputerChoice("scissors");
    }
    setYourChoice(val);
    console.log("your choice: ", yourChoice, "\n\n");

    console.log("computer choice: ", computerChoice);

    if (computerChoice == null && yourChoice == null) {
      setResult(null);
    } else if (computerChoice == yourChoice) {
      setResult("match drawn");
    } else if (computerChoice == "rock" && yourChoice == "paper") {
      setResult("computer won");
    } else if (computerChoice == "rock" && yourChoice == "scissors") {
      setResult("computer won");
    } else if (computerChoice == "paper" && yourChoice == "rock") {
      setResult("computer won");
    } else if (computerChoice == "paper" && yourChoice == "scissors") {
      setResult("you won");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 border-0 bg-amber-300">
      <div className="text-4xl">Rock Paper Scissors Game</div>
      <div className="flex gap-12">
        <button
          className="p-2 bg-green-400 border-2 rounded-lg border-amber-300 hover:border-green-400"
          onClick={(e) => {
            e.preventDefault();
            handleClick("rock");
          }}
        >
          Rock
        </button>
        <button
          className="p-2 bg-green-400 border-2 rounded-lg border-amber-300 hover:border-green-400"
          onClick={(e) => {
            e.preventDefault();
            handleClick("paper");
          }}
        >
          Paper
        </button>
        <button
          className="p-2 bg-green-400 border-2 rounded-lg border-amber-300 hover:border-green-400"
          onClick={(e) => {
            e.preventDefault();
            handleClick("scissors");
          }}
        >
          Scissors
        </button>{" "}
      </div>
      <div>
        <div>Your Choice: {yourChoice}</div>
        <div>Computer Choice</div>: {computerChoice}
        <div>Result: {result}</div>
      </div>
    </div>
  );
};

export default RockPaperScissors;
