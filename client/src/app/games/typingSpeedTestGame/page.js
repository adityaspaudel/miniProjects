"use client";

import React, { useState, useEffect, useRef } from "react";

export default function TypingSpeedTest() {
  const [text, setText] = useState(
    "The quick brown fox jumps over the lazy dog. Typing is an essential skill in the digital age. The faster and more accurately you can type, the more productive you become. Many people practice typing every day to improve their speed and accuracy. This typing speed test will help you measure your current skills and motivate you to get better. Remember, accuracy is more important than speed at the beginning. Once you learn to type correctly, your speed will naturally increase with practice."
  );
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [wpm, setWpm] = useState(0);
  const timerRef = useRef(null);

  // Auto start test when focusing textarea
  const handleFocus = () => {
    if (!started) {
      setStarted(true);
      setPaused(false);
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
    }
  };

  // Pause / Resume
  const pauseTest = () => {
    if (!started) return;
    if (paused) {
      setPaused(false);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      setPaused(true);
    }
  };

  // Reset
  const resetTest = () => {
    clearInterval(timerRef.current);
    setStarted(false);
    setPaused(false);
    setInput("");
    setWpm(0);
    setTimeLeft(60);
  };

  // Live WPM calculation
  useEffect(() => {
    if (!started) return;
    const wordsTyped = input.trim().split(/\s+/).filter(Boolean).length;
    const minutes = (60 - timeLeft) / 60 || 1 / 60;
    const result = Math.round(wordsTyped / minutes);
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
    const words = text.split(" ");
    const typedWords = input.trim().split(" ");

    return words.map((word, idx) => {
      let color = "";
      if (typedWords[idx] !== undefined) {
        color =
          typedWords[idx] === word
            ? "text-green-600"
            : "text-red-600 underline";
      }
      return (
        <span key={idx} className={`${color} mr-1 break-words`}>
          {word}
        </span>
      );
    });
  };

  return (
    <div className="flex bg-amber-100 justify-center items-center w-screen h-screen">
      <div className="flex flex-col gap-4 content-center items-center bg-red-200 p-6 min-h-1/2 min-w-1/2 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Typing Speed Test</h1>

        {/* Paragraph with wrapped words */}
        <p className="mb-3 break-words max-w-full overflow-auto">
          {renderHighlightedText()}
        </p>

        <textarea
          onFocus={handleFocus}
          disabled={timeLeft === 0 || paused}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Click here to start typing..."
          className="w-full h-28 p-3 border rounded mb-4 focus:outline-none bg-white"
        />

        <div className="flex gap-3 mb-4">
          <button
            onClick={pauseTest}
            disabled={!started}
            className="px-4 py-2 bg-yellow-500 text-white rounded disabled:opacity-50"
          >
            {paused ? "Resume" : "Pause"}
          </button>
          <button
            onClick={resetTest}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Reset
          </button>
        </div>

        <p className="text-lg">⏳ Time Left: {timeLeft}s</p>
        <p className="text-lg">⚡ Live WPM: {wpm}</p>
      </div>
    </div>
  );
}
