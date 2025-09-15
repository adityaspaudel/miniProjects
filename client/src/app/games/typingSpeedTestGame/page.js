"use client";

import React, { useState, useEffect, useRef } from "react";

export default function TypingSpeedTest() {
  const [text, setText] = useState(
    "The quick brown fox jumps over the lazy dog. Typing is an essential skill in the digital age. The faster and more accurately you can type, the more productive you become. Many people practice typing every day to improve their speed and accuracy. This typing speed test will help you measure your current skills and motivate you to get better. Remember, accuracy is more important than speed at the beginning. Once you learn to type correctly, your speed will naturally increase with practice."
  );
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [started, setStarted] = useState(false);
  const [wpm, setWpm] = useState(0);
  const timerRef = useRef(null);

  const words = text.split(" ");

  // Start the test
  const startTest = () => {
    setStarted(true);
    setInput("");
    setWpm(0);
    setTimeLeft(60);

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Live WPM calculation (only correct words)
  useEffect(() => {
    if (!started) return;

    const inputWords = input.trim().split(/\s+/);
    let correctCount = 0;

    inputWords.forEach((word, idx) => {
      if (word === words[idx]) correctCount++;
    });

    const minutes = (60 - timeLeft) / 60 || 1 / 60;
    const result = Math.round(correctCount / minutes);
    setWpm(result);
  }, [input, timeLeft, started]);

  // Stop when timer ends
  useEffect(() => {
    if (timeLeft === 0) {
      setStarted(false);
    }
  }, [timeLeft]);

  // Highlight typed words
  const renderHighlightedText = () => {
    const inputWords = input.trim().split(/\s+/);

    return words.map((word, idx) => {
      let colorClass = "text-gray-800"; // default
      if (inputWords[idx] !== undefined) {
        colorClass =
          inputWords[idx] === word ? "text-green-600" : "text-red-600";
      }
      return (
        <span key={idx} className={`${colorClass} mr-2`}>
          {word}
        </span>
      );
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Typing Speed Test</h1>

      <p className="mb-2">Type the following text:</p>
      <p className="mb-4 leading-relaxed">{renderHighlightedText()}</p>

      <textarea
        disabled={!started || timeLeft === 0}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Start typing here..."
        className="w-full h-32 p-2 border rounded mb-3"
      />

      <button
        onClick={startTest}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-3"
      >
        Start Test
      </button>

      <p>⏳ Time Left: {timeLeft}s</p>
      <p>⚡ Live WPM (Correct Words): {wpm}</p>
    </div>
  );
}
