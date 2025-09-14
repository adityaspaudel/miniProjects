"use client";

import React, { useState } from "react";

// Simplified Quiz Battle Game (React + Tailwind)
export default function QuizBattleGame() {
  const questions = [
    {
      q: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      a: 2,
    },
    {
      q: "Which language runs in a web browser?",
      choices: ["Python", "C#", "JavaScript", "Rust"],
      a: 2,
    },
    {
      q: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Venus", "Mars", "Jupiter"],
      a: 2,
    },
  ];

  const [playerHP, setPlayerHP] = useState(100);
  const [enemyHP, setEnemyHP] = useState(100);
  const [qIndex, setQIndex] = useState(0);
  const [message, setMessage] = useState("");

  function pickChoice(i) {
    const currentQ = questions[qIndex];
    if (i === currentQ.a) {
      setEnemyHP((hp) => Math.max(0, hp - 20));
      setMessage("Correct! Enemy takes 20 damage.");
    } else {
      setPlayerHP((hp) => Math.max(0, hp - 10));
      setMessage("Wrong! You lose 10 HP.");
    }
    setQIndex((q) => (q + 1) % questions.length);
  }

  function restart() {
    setPlayerHP(100);
    setEnemyHP(100);
    setQIndex(0);
    setMessage("");
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Quiz Battle</h1>

        <div className="mb-4">
          <p className="font-semibold">Player HP: {playerHP}</p>
          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
            <div style={{ width: `${playerHP}%` }}></div>
          </div>
        </div>

        <div>
          <p>Enemy HP: {enemyHP}</p>
          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
            <div style={{ width: `${enemyHP}%` }}></div>
          </div>
        </div>

        {playerHP > 0 && enemyHP > 0 ? (
          <div>
            <p className="mb-3 text-lg">{questions[qIndex].q}</p>
            <div className="grid gap-2">
              {questions[qIndex].choices.map((c, i) => (
                <button key={i} onClick={() => pickChoice(i)}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-xl font-bold">
            {playerHP <= 0 ? "You lost!" : "You won!"}
          </p>
        )}

        <p className="mt-4 text-center text-sm">{message}</p>

        <div className="mt-4 flex justify-center">
          <button onClick={restart}>Restart</button>
        </div>
      </div>
    </div>
  );
}
