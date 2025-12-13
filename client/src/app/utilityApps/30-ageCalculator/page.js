"use client";

import { useState } from "react";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;

    const birth = new Date(dob);
    const now = new Date();

    const diffMs = now - birth;
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    // Years and Months
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonthDays = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();
      days = prevMonthDays + days;
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({
      years,
      months,
      days,
      hours: diffHours,
      minutes: diffMinutes,
    });
  };

  const reset = () => {
    setDob("");
    setAge(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-200 p-6">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-6">
        <h1 className="text-lg font-semibold text-gray-900 mb-4">
          Age Calculator
        </h1>

        {/* DOB */}
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-black focus:outline-none mb-4"
        />

        {/* Buttons */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={calculateAge}
            className="w-full p-2 bg-black text-white rounded hover:bg-neutral-800 transition"
          >
            Calculate
          </button>

          <button
            onClick={reset}
            className="w-full p-2 border border-gray-400 rounded hover:bg-gray-100 transition"
          >
            Reset
          </button>
        </div>

        {/* Results */}
        {age && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg text-gray-900 space-y-2">
            <p>
              <span className="font-semibold">Years:</span> {age.years}
            </p>
            <p>
              <span className="font-semibold">Months:</span> {age.months}
            </p>
            <p>
              <span className="font-semibold">Days:</span> {age.days}
            </p>
            <p>
              <span className="font-semibold">Hours:</span> {age.hours}
            </p>
            <p>
              <span className="font-semibold">Minutes:</span> {age.minutes}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
