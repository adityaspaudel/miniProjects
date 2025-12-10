"use client";
import { useEffect, useState } from "react";

export default function BrickBreaker() {
  const gameWidth = 350;
  const gameHeight = 450;

  const [ball, setBall] = useState({ x: 160, y: 200, dx: 2, dy: -2 });
  const [paddleX, setPaddleX] = useState(140);
  const [bricks, setBricks] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const paddleWidth = 80;
  const paddleHeight = 12;
  const ballSize = 12;

  // brick layout constants
  const rows = 3;
  const cols = 6;
  const brickW = 50;
  const brickH = 20;
  const brickPadding = 8;
  const brickOffsetLeft = 10;
  const brickOffsetTop = 10;

  useEffect(() => {
    const temp = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        temp.push({
          x: c * (brickW + brickPadding) + brickOffsetLeft,
          y: r * (brickH + brickPadding) + brickOffsetTop,
          hit: false,
        });
      }
    }
    setBricks(temp);
  }, []); // once

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowLeft" && paddleX > 0)
        setPaddleX((x) => Math.max(0, x - 20));
      if (e.key === "ArrowRight" && paddleX < gameWidth - paddleWidth)
        setPaddleX((x) => Math.min(gameWidth - paddleWidth, x + 20));
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [paddleX]);

  useEffect(() => {
    if (gameOver || gameWon) return;

    const fpsInterval = 16; // ~60fps
    const id = setInterval(() => {
      setBall((prev) => {
        // copy velocities locally (do NOT mutate prev)
        let dx = prev.dx;
        let dy = prev.dy;
        let newX = prev.x + dx;
        let newY = prev.y + dy;

        // wall collisions (left/right/top)
        if (newX <= 0) {
          newX = 0;
          dx = Math.abs(dx);
        } else if (newX + ballSize >= gameWidth) {
          newX = gameWidth - ballSize;
          dx = -Math.abs(dx);
        }
        if (newY <= 0) {
          newY = 0;
          dy = Math.abs(dy);
        }

        // paddle collision (treat paddle as rect)
        const paddleTop = gameHeight - paddleHeight;
        const ballBottom = newY + ballSize;
        const ballCenterX = newX + ballSize / 2;
        if (
          ballBottom >= paddleTop &&
          ballCenterX >= paddleX &&
          ballCenterX <= paddleX + paddleWidth &&
          dy > 0
        ) {
          // reflect vertically
          newY = paddleTop - ballSize;
          dy = -Math.abs(dy);

          // optional: add slight horizontal change based on where it hit the paddle
          const hitPos =
            (ballCenterX - (paddleX + paddleWidth / 2)) / (paddleWidth / 2); // -1..1
          dx = dx + hitPos * 0.6; // tweak for control
        }

        // if ball fell below bottom -> game over
        if (newY >= gameHeight - ballSize) {
          setGameOver(true);
          return { ...prev, x: newX, y: newY, dx, dy };
        }

        // Brick collisions: find first overlapping brick and resolve using penetration depth
        let brickHitIndex = -1;
        for (let i = 0; i < bricks.length; i++) {
          const b = bricks[i];
          if (b.hit) continue;

          const overlapX = newX + ballSize > b.x && newX < b.x + brickW;
          const overlapY = newY + ballSize > b.y && newY < b.y + brickH;

          if (overlapX && overlapY) {
            // compute penetration depths from each side
            const penLeft = newX + ballSize - b.x; // how much we've gone past left side
            const penRight = b.x + brickW - newX; // how much we've gone past right side
            const penTop = newY + ballSize - b.y;
            const penBottom = b.y + brickH - newY;

            // choose smallest positive penetration => collision side
            const minPen = Math.min(penLeft, penRight, penTop, penBottom);

            if (minPen === penLeft) {
              // hit from left side -> reflect horizontally
              newX = b.x - ballSize;
              dx = -Math.abs(dx);
            } else if (minPen === penRight) {
              // hit from right side
              newX = b.x + brickW;
              dx = Math.abs(dx);
            } else if (minPen === penTop) {
              // hit from top
              newY = b.y - ballSize;
              dy = -Math.abs(dy);
            } else {
              // hit from bottom
              newY = b.y + brickH;
              dy = Math.abs(dy);
            }

            brickHitIndex = i;
            break; // handle at most one brick per tick
          }
        }

        if (brickHitIndex !== -1) {
          // update bricks immutably and score
          setBricks((old) =>
            old.map((bk, idx) =>
              idx === brickHitIndex ? { ...bk, hit: true } : bk
            )
          );
          setScore((s) => s + 10);
          // check win condition after marking (use functional set to read latest bricks)
          setTimeout(() => {
            setBricks((latest) => {
              const remaining = latest.filter((b) => !b.hit).length;
              if (remaining === 0) setGameWon(true);
              return latest;
            });
          }, 0);
        }

        return { ...prev, x: newX, y: newY, dx, dy };
      });
    }, fpsInterval);

    return () => clearInterval(id);
  }, [bricks, gameOver, gameWon, paddleX]); // bricks included so newly hit bricks are seen

  function restart() {
    // simple reset without reloading page
    setBall({ x: 160, y: 200, dx: 2, dy: -2 });
    setPaddleX(140);
    setScore(0);
    setGameOver(false);
    setGameWon(false);
    // recreate bricks
    const temp = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        temp.push({
          x: c * (brickW + brickPadding) + brickOffsetLeft,
          y: r * (brickH + brickPadding) + brickOffsetTop,
          hit: false,
        });
      }
    }
    setBricks(temp);
  }

  return (
    <div className="flex flex-col items-center pt-8 bg-gray-900 min-h-screen">
      <h1 className="text-white text-2xl font-bold mb-2">Break The Walls 🧱</h1>
      <p className="text-white mb-4">Score: {score}</p>

      <div
        className="relative bg-white rounded shadow-md overflow-hidden"
        style={{ width: gameWidth, height: gameHeight }}
      >
        <div
          className="absolute bg-black rounded-full"
          style={{
            width: ballSize,
            height: ballSize,
            top: ball.y,
            left: ball.x,
          }}
        />

        <div
          className="absolute bg-blue-500 rounded"
          style={{
            width: paddleWidth,
            height: paddleHeight,
            bottom: 0,
            left: paddleX,
          }}
        />

        {bricks.map(
          (brick, i) =>
            !brick.hit && (
              <div
                key={i}
                className="absolute bg-teal-600 rounded"
                style={{
                  width: brickW,
                  height: brickH,
                  top: brick.y,
                  left: brick.x,
                }}
              />
            )
        )}
      </div>

      {(gameOver || gameWon) && (
        <button
          className="mt-6 bg-green-400 hover:bg-green-500 px-6 py-2 rounded-lg text-black font-bold"
          onClick={restart}
        >
          Restart
        </button>
      )}

      {gameWon && (
        <p className="text-green-400 text-2xl font-bold mt-4">YOU WON 🏆</p>
      )}
      {gameOver && (
        <p className="text-red-400 text-2xl font-bold mt-4">GAME OVER 💀</p>
      )}
    </div>
  );
}
