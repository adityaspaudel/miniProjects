"use client";

import React, { useState } from "react";

// Quiz Battle Game (Styled with Tailwind + More Questions)
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
    {
      q: "Who painted the Mona Lisa?",
      choices: ["Picasso", "Da Vinci", "Van Gogh", "Michelangelo"],
      a: 1,
    },
    {
      q: "What is the largest ocean on Earth?",
      choices: ["Atlantic", "Pacific", "Indian", "Arctic"],
      a: 1,
    },
    {
      q: "Which gas do plants absorb?",
      choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      a: 1,
    },
    {
      q: "What is the hardest natural substance?",
      choices: ["Gold", "Iron", "Diamond", "Silver"],
      a: 2,
    },
    {
      q: "Who is known as the Father of Computers?",
      choices: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
      a: 0,
    },
    {
      q: "What is the boiling point of water?",
      choices: ["90°C", "100°C", "110°C", "120°C"],
      a: 1,
    },
    {
      q: "Which continent is the Sahara Desert in?",
      choices: ["Asia", "Africa", "Australia", "Europe"],
      a: 1,
    },
    {
      q: "What is the capital of Japan?",
      choices: ["Beijing", "Seoul", "Tokyo", "Kyoto"],
      a: 2,
    },
    {
      q: "Which organ pumps blood?",
      choices: ["Brain", "Heart", "Lungs", "Kidney"],
      a: 1,
    },
    {
      q: "Which is the smallest prime number?",
      choices: ["0", "1", "2", "3"],
      a: 2,
    },
    {
      q: "How many continents are there?",
      choices: ["5", "6", "7", "8"],
      a: 2,
    },
    {
      q: "Which planet is closest to the Sun?",
      choices: ["Mercury", "Venus", "Earth", "Mars"],
      a: 0,
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
      setMessage("✅ Correct! Enemy takes 20 damage.");
    } else {
      setPlayerHP((hp) => Math.max(0, hp - 10));
      setMessage("❌ Wrong! You lose 10 HP.");
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-700">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-yellow-400 drop-shadow">
          ⚔️ Quiz Battle
        </h1>

        {/* Player HP */}
        <div className="mb-4">
          <p className="font-semibold mb-1">🧑 Player HP: {playerHP}</p>
          <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all"
              style={{ width: `${playerHP}%` }}
            ></div>
          </div>
        </div>

        {/* Enemy HP */}
        <div className="mb-6">
          <p className="font-semibold mb-1">👹 Enemy HP: {enemyHP}</p>
          <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 transition-all"
              style={{ width: `${enemyHP}%` }}
            ></div>
          </div>
        </div>

        {/* Game Logic */}
        {playerHP > 0 && enemyHP > 0 ? (
          <div>
            <p className="mb-4 text-lg font-medium text-center">
              {questions[qIndex].q}
            </p>
            <div className="grid gap-3">
              {questions[qIndex].choices.map((c, i) => (
                <button
                  key={i}
                  onClick={() => pickChoice(i)}
                  className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 active:scale-95 transition text-white font-semibold shadow-md"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-2xl font-bold text-yellow-300 mt-4">
            {playerHP <= 0 ? "💀 You lost!" : "🏆 You won!"}
          </p>
        )}

        {/* Message */}
        <p className="mt-4 text-center text-sm italic text-gray-300">
          {message}
        </p>

        {/* Restart Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={restart}
            className="px-5 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-bold shadow-lg"
          >
            🔄 Restart
          </button>
        </div>
      </div>
    </div>
  );
}
