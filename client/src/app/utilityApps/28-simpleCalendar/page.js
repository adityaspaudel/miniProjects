"use client";

import { useState } from "react";
import dayjs from "dayjs";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const prevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const nextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  // First day index (0 = Sunday)
  const firstDayIndex = currentDate.startOf("month").day();
  const daysInMonth = currentDate.daysInMonth();

  const calendarDays = [];
  for (let i = 0; i < firstDayIndex; i++) calendarDays.push("");
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={prevMonth}
            className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition"
          >
            ◀
          </button>

          <h2 className="text-xl font-semibold tracking-wide">
            {currentDate.format("MMMM YYYY")}
          </h2>

          <button
            onClick={nextMonth}
            className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition"
          >
            ▶
          </button>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 text-center font-medium text-gray-600 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-2 text-sm">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days grid */}
        <div className="grid grid-cols-7 gap-1 text-sm">
          {calendarDays.map((day, i) => {
            const isToday =
              day &&
              dayjs().date() === day &&
              dayjs().month() === currentDate.month() &&
              dayjs().year() === currentDate.year();

            return (
              <div
                key={i}
                className={`h-12 flex items-center justify-center rounded-lg border transition
                  ${
                    day
                      ? "bg-gray-50 border-gray-200 hover:bg-gray-100 cursor-pointer"
                      : "border-transparent"
                  }
                  ${isToday ? "bg-blue-500 text-white border-blue-500 font-semibold shadow-sm" : ""}
                `}
              >
                {day || ""}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
