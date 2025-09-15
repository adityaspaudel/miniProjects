"use client";

import React, { useState, useEffect, useRef } from "react";

export default function TypingSpeedTest() {
  const [text, setText] = useState(
    "The quick brown fox jumps over the lazy dog. Typing speed tests measure how fast you can type accurately. Practice makes perfect, and consistency is key for improvement."
  );
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [wpm, setWpm] = useState(0);
  const timerRef = useRef(null);

  // Start the test
  const startTest = () => {
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
  };

  // Pause the test
  const pauseTest = () => {
    if (paused) {
      // resume
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
      // pause
      clearInterval(timerRef.current);
      setPaused(true);
    }
  };

  // Reset the test
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
    const minutes = (60 - timeLeft) / 60 || 1 / 60; // avoid divide by zero
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
        <span key={idx} className={`${color} mr-1`}>
          {word}
        </span>
      );
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Typing Speed Test</h1>
      <p className="mb-3">{renderHighlightedText()}</p>

      <textarea
        disabled={!started || timeLeft === 0 || paused}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Start typing here..."
        className="w-full h-28 p-3 border rounded mb-4 focus:outline-none"
      />

      <div className="flex gap-3 mb-4">
        <button
          onClick={startTest}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Start
        </button>
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
  );
}
