"use client";

import React, { useEffect, useState, useRef } from "react";

export default function ReminderApp() {
  const [title, setTitle] = useState("");
  const [datetime, setDatetime] = useState("");
  const [notes, setNotes] = useState("");
  const [reminders, setReminders] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [now, setNow] = useState(Date.now());
  const alertedRef = useRef(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem("reminders_v1");
      if (raw) setReminders(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load reminders", e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reminders_v1", JSON.stringify(reminders));
  }, [reminders]);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const check = () => {
      const nowMs = Date.now();
      reminders.forEach((r) => {
        if (!r.done && !alertedRef.current.has(r.id) && r.time <= nowMs) {
          alertedRef.current.add(r.id);
          if (window.Notification && Notification.permission === "granted") {
            try {
              new Notification("Reminder due: " + r.title, {
                body: r.notes || "Reminder is due now",
              });
            } catch (e) {
              alert(`Reminder due: ${r.title}`);
            }
          } else {
            alert(`Reminder due: ${r.title}`);
          }
        }
      });
    };

    const id = setInterval(check, 5000);
    check();
    return () => clearInterval(id);
  }, [reminders]);

  useEffect(() => {
    if (window.Notification && Notification.permission === "default") {
      Notification.requestPermission().catch(() => {});
    }
  }, []);

  function resetForm() {
    setTitle("");
    setDatetime("");
    setNotes("");
    setEditingId(null);
  }

  function handleAddOrUpdate(e) {
    e.preventDefault();
    if (!title.trim()) return alert("Please enter a title for the reminder.");
    if (!datetime) return alert("Please choose date and time.");

    const time = new Date(datetime).getTime();
    if (isNaN(time)) return alert("Invalid date/time.");

    if (editingId) {
      setReminders((prev) =>
        prev
          .map((r) => (r.id === editingId ? { ...r, title, time, notes } : r))
          .sort((a, b) => a.time - b.time)
      );
      resetForm();
      return;
    }

    const newRem = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      title: title.trim(),
      notes: notes.trim(),
      time,
      done: false,
      createdAt: Date.now(),
    };

    setReminders((prev) => [...prev, newRem].sort((a, b) => a.time - b.time));
    resetForm();
  }

  function handleDelete(id) {
    if (!confirm("Delete this reminder?")) return;
    setReminders((prev) => prev.filter((r) => r.id !== id));
  }

  function handleEdit(id) {
    const r = reminders.find((x) => x.id === id);
    if (!r) return;
    setTitle(r.title);
    const dt = new Date(r.time);
    const iso = new Date(dt.getTime() - dt.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16);
    setDatetime(iso);
    setNotes(r.notes || "");
    setEditingId(id);
  }

  function toggleDone(id) {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, done: !r.done } : r))
    );
  }

  function formatTime(ms) {
    const d = new Date(ms);
    return d.toLocaleString();
  }

  function timeRemaining(ms) {
    const diff = ms - now;
    if (diff <= 0) return "Due";
    const s = Math.floor(diff / 1000);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${h}h ${m}m ${sec}s`;
  }

  return (
    <div className="bg-slate-200 h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col content-center items-center min-h-1/2 w-1/2 bg-pink-200 p-8 font-sans rounded-xl">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Reminder App
          <hr className="border-black" />
        </h1>
        <form onSubmit={handleAddOrUpdate} className="space-y-3">
          <div>
            <label className="block text-sm font-medium">Title:</label>
            <input
              className="w-full border rounded px-2 py-1 bg-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">When:</label>
            <input
              className="w-full border rounded px-2 py-1 bg-white"
              type="datetime-local"
              value={datetime}
              onChange={(e) => setDatetime(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Notes:</label>
            <input
              className="w-full border rounded px-2 py-1 bg-white"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              {editingId ? "Update" : "Add"} Reminder
            </button>
            {editingId && (
              <button
                type="button"
                className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
        <hr className="my-4" />
        <h2 className="text-xl font-semibold mb-2">
          Upcoming Reminders ({reminders.length})
        </h2>
        {reminders.length === 0 && (
          <div className="text-gray-500">No reminders yet — add one above.</div>
        )}
        <ul className="space-y-3">
          {reminders.map((r) => (
            <li
              key={r.id}
              className={`p-3 border rounded ${
                r.done ? "bg-green-100" : "bg-red-50"
              }`}
            >
              <div className="font-semibold">
                {r.title} {r.done ? "(Done)" : ""}
              </div>
              <div className="text-sm text-gray-600">
                When: {formatTime(r.time)} — {timeRemaining(r.time)}
              </div>
              {r.notes && <div className="text-sm">Notes: {r.notes}</div>}
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => toggleDone(r.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600"
                >
                  {r.done ? "Undo" : "Mark done"}
                </button>
                <button
                  onClick={() => handleEdit(r.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded text-sm hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(r.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-xs text-gray-500">
          Notes: This app stores reminders in your browser (localStorage).
          Desktop notifications will be used if you grant permission. Alerts are
          shown once when a reminder becomes due.
        </div>
      </div>
    </div>
  );
}
