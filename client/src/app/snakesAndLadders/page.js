"use client";
import React, { useState } from "react";

const SnakeAndLadderGame = () => {
  const [board, setBoard] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const gameBoardData = {
    // Ladders: Moving a player up the board
    ladders: [
      { start: 1, end: 38 },
      { start: 4, end: 14 },

      { start: 21, end: 42 },
      { start: 28, end: 84 },

      { start: 51, end: 67 },
      { start: 71, end: 91 },
    ],
    // Snakes: Moving a player down the board
    snakes: [
      { start: 16, end: 6 },
      { start: 47, end: 26 },

      { start: 56, end: 53 },

      { start: 64, end: 60 },

      { start: 93, end: 73 },
      { start: 95, end: 75 },
    ],
  };
  const createBoard = () => {
    const x = [];
    for (let i = 1; i <= 100; i++) {
      x.push(i);
    }
    setBoard(x);
  };

  const startGame = () => {
    if (currentPosition === 0) {
      const randomNumber = Math.round(Math.random() * (6 - 1 + 1));
      console.log("randomNumber: ", randomNumber);
      if (randomNumber === 1) {
        setCurrentPosition(randomNumber);
        console.log("currentPosition: ", currentPosition);
      }
    } else {
      const randomNumber = Math.round(Math.random() * (6 - 1 * 1));
      if (currentPosition + randomNumber > 100) {
        setCurrentPosition(currentPosition);
      } else if (currentPosition + randomNumber == 100) {
        setCurrentPosition(currentPosition + randomNumber);
        alert("you won");
      } else if (currentPosition + randomNumber < 100) {
        setCurrentPosition(currentPosition + randomNumber);
      }
      // setCurrentPosition(currentPosition + randomNumber);
      console.log("currentPosition: ", currentPosition);
    }
  };
  return (
    <div>
      <div>SnakeAndLadderGame</div>
      <div>
        <button
          className="p-2 rounded-lg cursor-pointer bg-blue-300 hover:bg-blue-400 "
          onClick={createBoard}
        >
          show board
        </button>
        <button
          className="p-2 rounded-lg cursor-pointer bg-green-300 hover:bg-green-400 "
          onClick={startGame}
        >
          start game
        </button>

        <div className="text-5xl text-blue-700">
          currentPosition : {currentPosition}
        </div>
        <div>
          {board.map((val, ind) => {
            return (
              <span key={ind}>
                {val % 10 == 0 ? (
                  <span className="">
                    <span className="w-12 h-12 p-4 border-2 bg-amber-500 inline-block">
                      {val}
                    </span>
                    <br />
                  </span>
                ) : (
                  <span className="w-12 h-12 p-4 border-2 inline-block bg-amber-500">
                    {" "}
                    {val}
                  </span>
                )}
              </span>
            );
          })}
        </div>
        <div>
          <div className=" text-4xl text-red-400 ">snakes:</div>
          {gameBoardData.snakes.map((val, ind) => (
            <pre key={ind}>{JSON.stringify(val, 2, 2)}</pre>
          ))}
        </div>
        <div>
          <div className="text-4xl text-green-400">ladders: </div>
          {gameBoardData.snakes.map((val, ind) => (
            <pre key={ind}>{JSON.stringify(val, 2, 2)}</pre>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SnakeAndLadderGame;
