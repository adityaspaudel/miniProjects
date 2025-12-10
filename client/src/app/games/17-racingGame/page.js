"use client";
import { useEffect, useState } from "react";

export default function RacingGame() {
  const gameWidth = 300;
  const gameHeight = 500;

  const [playerX, setPlayerX] = useState(120);
  const [enemyY, setEnemyY] = useState(-100);
  const [enemyX, setEnemyX] = useState(100);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const playerWidth = 50;
  const playerHeight = 80;

  const enemyWidth = 50;
  const enemyHeight = 80;

  useEffect(() => {
    function handleKey(e) {
      if (gameOver) return;

      // Move Left - Right
      if (e.key === "ArrowLeft" && playerX > 10) setPlayerX(playerX - 20);
      if (e.key === "ArrowRight" && playerX < gameWidth - playerWidth - 10)
        setPlayerX(playerX + 20);

      // Move Forward (Up)
      if (e.key === "ArrowUp" && enemyY < gameHeight - 200) {
        setEnemyY((prev) => prev + 20); // Moves enemy down faster (feels like player moves forward)
      }

      // Move Backward (Down)
      if (e.key === "ArrowDown" && enemyY > -100) {
        setEnemyY((prev) => prev - 20); // Moves enemy up (feels like player moves back)
      }
    }

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [playerX, enemyY, gameOver]);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setEnemyY((prev) => prev + 6);
      setScore((s) => s + 1);

      // Collision Detection
      if (
        enemyY + enemyHeight >= gameHeight - playerHeight &&
        enemyX < playerX + playerWidth &&
        enemyX + enemyWidth > playerX
      ) {
        setGameOver(true);
      }

      // Respawn enemy car
      if (enemyY > gameHeight) {
        setEnemyY(-100);
        setEnemyX(Math.floor(Math.random() * (gameWidth - enemyWidth)));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [enemyY, enemyX, gameOver, playerX]);

  function restart() {
    setGameOver(false);
    setScore(0);
    setEnemyY(-100);
    setPlayerX(120);
  }

  return (
    <div className="flex flex-col items-center pt-4 bg-gray-900 min-h-screen">
      <h1 className="text-white text-xl font-bold mb-3">
        React Racing Game 🏎
      </h1>
      <p className="text-white mb-3">Score: {score}</p>

      <div
        className="relative bg-gray-700 overflow-hidden rounded-lg"
        style={{ width: gameWidth, height: gameHeight }}
      >
        {/* Player Car */}
        <div
          className="absolute bg-blue-400 rounded"
          style={{
            width: playerWidth,
            height: playerHeight,
            bottom: 10,
            left: playerX,
          }}
        />

        {/* Enemy Car */}
        <div
          className="absolute bg-red-500 rounded"
          style={{
            width: enemyWidth,
            height: enemyHeight,
            top: enemyY,
            left: enemyX,
          }}
        />

        {/* Road Lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white"
            style={{
              width: 4,
              height: 30,
              left: gameWidth / 2 - 2,
              top: (i * 60 + enemyY) % gameHeight,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {gameOver && (
        <>
          <p className="text-red-400 font-bold text-2xl mt-4">GAME OVER 💥</p>
          <button
            onClick={restart}
            className="bg-green-400 hover:bg-green-500 px-6 py-2 rounded-lg text-black font-bold mt-3"
          >
            Restart
          </button>
        </>
      )}
    </div>
  );
}
