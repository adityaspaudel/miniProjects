"use client";

import React, { useState, useEffect, useRef } from "react";

export default function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const intervalRef = useRef(null);

  // Format seconds into MM:SS
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const startTimer = () => {
    if (intervalRef.current !== null) return; // prevent multiple intervals
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;

          if (isBreak) {
            // end break → start work
            setIsBreak(false);
            setTimeLeft(25 * 60);
          } else {
            // end work → start break
            setIsBreak(true);
            setTimeLeft(5 * 60);
          }
          setIsRunning(false);
          return prev - 1;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(25 * 60);
  };

  // cleanup on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex justify-center items-center bg-blue-300 h-screen w-screen ">
      <div className="flex flex-col gap-2 bg-slate-200 content-center items-center min-h-1/2 w-1/2 rounded-xl">
        <h1 className="text-4xl font-bold p-4">
          Pomodoro Timer
          <hr className="border-black" />
        </h1>
        <h2>{isBreak ? "Break Time 🍵" : "Work Time 💻 "}</h2>
        <h1 className="text-6xl text-red-400 font-mono">
          {formatTime(timeLeft)}
        </h1>
        <div className="flex gap-2 text-white">
          <button
            onClick={startTimer}
            disabled={isRunning}
            className="rounded-sm bg-green-400 hover:bg-green-500  px-2 py-1"
          >
            Start
          </button>
          <button
            onClick={pauseTimer}
            disabled={!isRunning}
            className="rounded-sm bg-red-400 hover:bg-red-500 px-2 py-1"
          >
            Pause
          </button>
          <button
            onClick={resetTimer}
            className="rounded-sm bg-gray-400 hover:bg-gray-500 px-2 py-1"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
