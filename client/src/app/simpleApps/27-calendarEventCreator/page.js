"use client";
import React, { useState } from "react";

const CalendarEventCreator = () => {
  const [date, setDate] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [events, setEvents] = useState([]);

  const handleAddEvent = () => {
    if (!date || !eventTitle) return alert("Please enter date and event title!");
    setEvents([...events, { date, title: eventTitle }]);
    setEventTitle("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Calendar Event Creator</h1>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="date"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Title"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleAddEvent}
        >
          Add Event
        </button>
      </div>

      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-3">Your Events:</h2>
        {events.length === 0 ? (
          <p className="text-gray-500">No events added yet.</p>
        ) : (
          <ul className="space-y-2">
            {events.map((ev, index) => (
              <li
                key={index}
                className="bg-white p-3 rounded shadow flex justify-between items-center"
              >
                <span>
                  <span className="font-semibold">{ev.date}:</span> {ev.title}
                </span>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => setEvents(events.filter((_, i) => i !== index))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CalendarEventCreator;
