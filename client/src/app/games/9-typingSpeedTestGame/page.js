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
  const [mistakenWords, setMistakenWords] = useState(0);
  const [mistakenChars, setMistakenChars] = useState(0);
  const timerRef = useRef(null);

  // Auto start test when focusing textarea
  const handleFocus = () => {
    if (!started) {
      setStarted(true);
      setPaused(false);
      setInput("");
      setWpm(0);
      setTimeLeft(60);
      setMistakenWords(0);
      setMistakenChars(0);

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
    setMistakenWords(0);
    setMistakenChars(0);
    setTimeLeft(60);
  };

  // Live WPM, mistaken words, mistaken characters calculation
  useEffect(() => {
    if (!started) return;

    const words = text.split(" ");
    const typedWords = input.trim().split(/\s+/).filter(Boolean);

    // Mistaken words
    let wrongWords = 0;
    typedWords.forEach((word, idx) => {
      if (words[idx] !== undefined && word !== words[idx]) wrongWords++;
    });
    setMistakenWords(wrongWords);

    // Mistaken characters
    let wrongChars = 0;
    for (let i = 0; i < typedWords.length; i++) {
      const typed = typedWords[i];
      const correct = words[i] || "";
      for (let j = 0; j < typed.length; j++) {
        if (typed[j] !== correct[j]) wrongChars++;
      }
      // Count extra characters typed beyond correct word length
      if (typed.length > correct.length)
        wrongChars += typed.length - correct.length;
    }
    setMistakenChars(wrongChars);

    // WPM calculation (correct words only)
    const correctWords = typedWords.filter(
      (word, idx) => words[idx] && word === words[idx]
    ).length;
    const minutes = (60 - timeLeft) / 60 || 1 / 60;
    const result = Math.round(correctWords / minutes);
    setWpm(result);
  }, [input, timeLeft, started, text]);

  // Stop when timer ends
  useEffect(() => {
    if (timeLeft === 0) {
      setStarted(false);
    }
  }, [timeLeft]);

  // Highlight typed words
  const renderHighlightedText = () => {
    const words = text.split(" ");
    const typedWords = input.trim().split(/\s+/);

    return words.map((word, idx) => {
      let color = "";
      if (typedWords[idx] !== undefined) {
        color =
          typedWords[idx] === word
            ? "text-green-600"
            : "text-red-600 underline";
      }
      return (
        <span
          key={idx}
          className={`${color} mr-1 wrap wrap-anywhere
`}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <div className="flex bg-amber-100 justify-center items-center w-screen min-h-screen p-4">
      <div className="flex flex-col gap-4 content-center items-center bg-red-200 p-6 min-h-1/2 max-w-1/2   ">
        <h1 className="text-4xl font-bold mb-4">
          Typing Speed Test
          <hr className="border-black" />
        </h1>

        {/* Paragraph with wrapped words */}
        <p className="mb-3 text-wrap">{renderHighlightedText()}</p>

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
            className="px-4 py-2 bg-yellow-500 text-black rounded disabled:opacity-50"
          >
            {paused ? "Resume" : "Pause"}
          </button>
          <button
            onClick={resetTest}
            className="px-4 py-2 bg-red-600 text-black rounded"
          >
            Reset
          </button>
        </div>

        <p className="text-lg font-bold">⏳ Time Left: {timeLeft}s</p>
        <p className="text-lg font-bold">⚡ Live WPM: {wpm}</p>
        <p className="text-lg text-red-700 font-bold">
          ❌ Mistaken Words: {mistakenWords} | Mistaken Characters:{" "}
          {mistakenChars}
        </p>
      </div>
    </div>
  );
}
