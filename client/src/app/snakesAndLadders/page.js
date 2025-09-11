"use client";
import React, { useEffect, useState } from "react";

const SnakeAndLadderGame = () => {
  const [board, setBoard] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);

  const gameBoardData = {
    ladders: [
      { start: 1, end: 38 },
      { start: 4, end: 14 },
      { start: 21, end: 42 },
      { start: 28, end: 84 },
      { start: 51, end: 67 },
      { start: 71, end: 91 },
    ],
    snakes: [
      { start: 16, end: 6 },
      { start: 47, end: 26 },
      { start: 56, end: 53 },
      { start: 64, end: 60 },
      { start: 93, end: 73 },
      { start: 95, end: 75 },
    ],
  };

  useEffect(() => {
    // Generate zigzag board numbers (100 → 1)
    const rows = [];
    let number = 100;
    for (let r = 0; r < 10; r++) {
      const row = [];
      for (let c = 0; c < 10; c++) {
        row.push(number--);
      }
      // Reverse every other row for zig-zag layout
      if (r % 2 === 1) row.reverse();
      rows.push(row);
    }
    setBoard(rows);
  }, []);

  const startGame = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if (currentPosition === 0) {
      if (randomNumber === 1) {
        setCurrentPosition(1);
      }
    } else {
      if (currentPosition + randomNumber > 100) return;

      let newPos = currentPosition + randomNumber;

      // check snakes
      const snake = gameBoardData.snakes.find((s) => s.start === newPos);
      if (snake) newPos = snake.end;

      // check ladders
      const ladder = gameBoardData.ladders.find((l) => l.start === newPos);
      if (ladder) newPos = ladder.end;

      setCurrentPosition(newPos);

      if (newPos === 100) alert("🎉 You won!");
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center py-6">
      <h1 className="text-4xl font-bold">Snakes And Ladders Game</h1>

      <button
        className="p-2 rounded-lg cursor-pointer bg-green-500 text-white hover:bg-green-600"
        onClick={startGame}
      >
        🎲 Roll Dice
      </button>

      <div className="flex gap-4">
        {/* Game Board */}
        <div className="border-4 border-gray-700 mt-4">
          {board.map((row, rIndex) => (
            <div key={rIndex} className="flex">
              {row.map((val, cIndex) => {
                const isPlayer = currentPosition === val;
                return (
                  <div
                    key={cIndex}
                    className={`w-12 h-12 flex items-center justify-center border text-sm font-bold
                      ${isPlayer ? "bg-red-500 text-white" : "bg-amber-300"}`}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        {/* Info Section */}
        <div className="flex flex-col gap-12 mt-6 text-sm">
          <div className="flex gap-4">
            <div>
              <h2 className="text-xl font-bold text-red-500">🐍 Snakes</h2>
              {gameBoardData.snakes.map((val, ind) => (
                <div key={ind}>
                  {val.start} → {val.end}
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-xl font-bold text-green-500">🪜 Ladders</h2>
              {gameBoardData.ladders.map((val, ind) => (
                <div key={ind}>
                  {val.start} → {val.end}
                </div>
              ))}
            </div>
          </div>
          <div className="text-3xl text-blue-700 font-bold">
            Current Position: {currentPosition}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeAndLadderGame;
