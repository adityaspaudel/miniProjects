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

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("reminders_v1" );
      if (raw) setReminders(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to load reminders", e);
    }
  }, []);

  // Persist reminders
  useEffect(() => {
    localStorage.setItem("reminders_v1", JSON.stringify(reminders));
  }, [reminders]);

  // Keep current time updated every second (for countdown)
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  // Check due reminders every 5 seconds and notify/alert once
  useEffect(() => {
    const check = () => {
      const nowMs = Date.now();
      reminders.forEach((r) => {
        if (!r.done && !alertedRef.current.has(r.id) && r.time <= nowMs) {
          alertedRef.current.add(r.id);
          // Try desktop notification, fallback to alert
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

  // Request Notification permission (user can decline)
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
    // convert timestamp to input-friendly string
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
    <div>
      <h1>Reminder App</h1>

      <form onSubmit={handleAddOrUpdate}>
        <div>
          <label>
            Title:{" "}
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            When:{" "}
            <input
              type="datetime-local"
              value={datetime}
              onChange={(e) => setDatetime(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Notes:{" "}
            <input value={notes} onChange={(e) => setNotes(e.target.value)} />
          </label>
        </div>

        <div>
          <button type="submit">{editingId ? "Update" : "Add"} Reminder</button>
          {editingId && (
            <button type="button" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <hr />

      <h2>Upcoming Reminders ({reminders.length})</h2>
      {reminders.length === 0 && <div>No reminders yet — add one above.</div>}

      <ul>
        {reminders.map((r) => (
          <li key={r.id}>
            <div>
              <strong>{r.title}</strong> {r.done ? "(Done)" : ""}
            </div>
            <div>
              When: {formatTime(r.time)} — {timeRemaining(r.time)}
            </div>
            {r.notes && <div>Notes: {r.notes}</div>}
            <div>
              <button onClick={() => toggleDone(r.id)}>
                {r.done ? "Undo" : "Mark done"}
              </button>
              <button onClick={() => handleEdit(r.id)}>Edit</button>
              <button onClick={() => handleDelete(r.id)}>Delete</button>
            </div>
            <hr />
          </li>
        ))}
      </ul>

      <div>
        <small>
          Notes: This app stores reminders in your browser (localStorage).
          Desktop notifications will be used if you grant permission. Alerts are
          shown once when a reminder becomes due.
        </small>
      </div>
    </div>
  );
}
