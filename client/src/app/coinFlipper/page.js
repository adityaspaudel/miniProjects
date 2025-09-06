"use client";

import React, { useState } from "react";

const CoinFlipperGame = () => {
  const [side, setSide] = useState(null);
  const [choice, setChoice] = useState(null);
  const [flipping, setFlipping] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const handleClick = () => {
    if (!choice) {
      alert("Please select Head or Tail first!");
      return;
    }

    setFlipping(true);
    setSide(null);

    setTimeout(() => {
      const randomNum = Math.random();
      const result = randomNum < 0.5 ? "tail" : "head";
      setSide(result);

      if (result === choice) {
        setWins(wins + 1);
      } else {
        setLosses(losses + 1);
      }

      setFlipping(false);
    }, 1500);
  };

  const handleReset = () => {
    setSide(null);
    setChoice(null);
    setWins(0);
    setLosses(0);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-br from-slate-500 to-slate-800 text-black">
      <div className="flex flex-col bg-sky-200 p-6 gap-6 items-center  rounded-xl shadow-lg min-h-1/2 w-1/2">
        <h1 className="text-4xl font-bold text-center">🪙 Coin Flipper Game</h1>
        <hr className="border-black w-full" />

        {/* Choice */}
        <div className="flex gap-6 text-lg">
          <label>
            <input
              type="radio"
              name="headTail"
              value="head"
              checked={choice === "head"}
              onChange={(e) => setChoice(e.target.value)}
            />
            Head
          </label>
          <label>
            <input
              type="radio"
              name="headTail"
              value="tail"
              checked={choice === "tail"}
              onChange={(e) => setChoice(e.target.value)}
            />
            Tail
          </label>
        </div>

        {/* Show choice */}
        <div>
          {choice ? (
            <p>
              Your choice:{" "}
              <span className="bg-emerald-500 px-2 py-1 rounded text-white">
                {choice}
              </span>
            </p>
          ) : (
            <p>No choice selected yet</p>
          )}
        </div>

        {/* Flip Button */}
        <button
          className="px-6 py-2 rounded-lg bg-amber-600 text-white font-semibold shadow hover:bg-amber-500 transition"
          onClick={handleClick}
          disabled={flipping}
        >
          {flipping ? "Flipping..." : "Flip"}
        </button>

        {/* Coin Result */}
        <div className="h-24 flex justify-center items-center">
          {flipping ? (
            <div className="animate-spin w-16 h-16 border-4 border-white border-t-transparent rounded-full"></div>
          ) : side ? (
            <div className="text-2xl font-bold">
              🖥 Computer chose:{" "}
              <span className="bg-teal-400 px-2 py-1 rounded">{side}</span>
            </div>
          ) : (
            <p>Click flip to see the result</p>
          )}
        </div>

        {/* Result Message */}
        {side && choice && !flipping && (
          <div>
            {side === choice ? (
              <span className="text-white text-lg bg-green-500 px-4 py-2 rounded-md shadow">
                🎉 You Won! Great Guess!
              </span>
            ) : (
              <span className="text-white text-lg bg-red-500 px-4 py-2 rounded-md shadow">
                ❌ You Lost! Try Again!
              </span>
            )}
          </div>
        )}

        {/* Scoreboard */}
        <div className="mt-4 bg-white px-6 py-3 rounded-lg shadow flex gap-6">
          <p className="text-green-600 font-bold">Wins: {wins}</p>
          <p className="text-red-600 font-bold">Losses: {losses}</p>
        </div>

        {/* Reset */}
        <button
          onClick={handleReset}
          className="mt-4 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default CoinFlipperGame;
