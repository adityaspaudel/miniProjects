"use client";
import React, { useState } from "react";

const CalendarEventCreator = () => {
  const [date, setDate] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [events, setEvents] = useState([]);

  const handleAddEvent = () => {
    if (!date || !eventTitle)
      return alert("Please enter date and event title!");
    setEvents([...events, { date, title: eventTitle }]);
    setEventTitle("");
  };

  const today = new Date().toISOString().split("T")[0];

  const upcomingEvents = events
    .filter((ev) => ev.date >= today)
    .sort((a, b) => (a.date > b.date ? 1 : -1));

  const pastEvents = events
    .filter((ev) => ev.date < today)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-sky-200 ">
      <div className=" flex flex-col items-center content-center p-8 bg-gray-100 min-h-1/2 rounded-sm">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 ">
          📅 Calendar Event Creator
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8 w-full max-w-xl">
          <input
            type="date"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Event Title"
            className="flex-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
          <button
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition"
            onClick={handleAddEvent}
          >
            Add Event
          </button>
        </div>
        <div className="w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Upcoming Events
          </h2>
          {upcomingEvents.length === 0 ? (
            <p className="text-gray-400 mb-4">No upcoming events.</p>
          ) : (
            <ul className="space-y-3 mb-6">
              {upcomingEvents.map((ev, index) => (
                <li
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center hover:shadow-md transition"
                >
                  <span className="text-gray-800">
                    <span className="font-semibold">{ev.date}</span>: {ev.title}
                  </span>
                  <button
                    className="bg-red-500 hover:bg-red-600 font-medium px-2 text-white"
                    onClick={() =>
                      setEvents(
                        events.filter((_, i) => i !== events.indexOf(ev))
                      )
                    }
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Past Events
          </h2>
          {pastEvents.length === 0 ? (
            <p className="text-gray-400 mb-4">No past events.</p>
          ) : (
            <ul className="space-y-3">
              {pastEvents.map((ev, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-4 rounded-xl shadow-sm flex justify-between items-center hover:shadow-md transition"
                >
                  <span className="text-gray-600">
                    <span className="font-semibold">{ev.date}</span>: {ev.title}
                  </span>
                  <button
                    className="bg-red-500 hover:bg-red-600 font-medium px-2 text-white"
                    onClick={() =>
                      setEvents(
                        events.filter((_, i) => i !== events.indexOf(ev))
                      )
                    }
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarEventCreator;
