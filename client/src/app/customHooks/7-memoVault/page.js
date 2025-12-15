"use client";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function MemoVault() {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useLocalStorage("darkMode", false);

  const addNote = () => {
    if (!text.trim()) return;

    const newNote = {
      id: Date.now(),
      text,
      createdAt: new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);
    setText("");
  };

  const deleteNote = (id) => setNotes(notes.filter((n) => n.id !== id));

  const editNote = (id) => {
    const note = notes.find((n) => n.id === id);
    const newText = prompt("Edit note:", note.text);
    if (!newText) return;

    setNotes(notes.map((n) => (n.id === id ? { ...n, text: newText } : n)));
  };

  const filteredNotes = notes.filter((n) =>
    n.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-6`}
    >
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">🗒 MemoVault</h1>
          <button
            className="border px-3 py-1 rounded"
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

        <input
          type="text"
          className="border p-2 w-full rounded"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          className="border p-2 w-full rounded"
          placeholder="Write a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="border px-4 py-2 w-full rounded bg-blue-500 text-white"
          onClick={addNote}
        >
          Add Note
        </button>

        <ul className="space-y-3">
          {filteredNotes.map((note) => (
            <li
              key={note.id}
              className="border p-3 rounded bg-gray-100 dark:bg-gray-800"
            >
              <p>{note.text}</p>
              <small className="opacity-70">{note.createdAt}</small>
              <div className="flex gap-2 mt-2">
                <button
                  className="text-blue-500"
                  onClick={() => editNote(note.id)}
                >
                  ✏ Edit
                </button>
                <button
                  className="text-red-500"
                  onClick={() => deleteNote(note.id)}
                >
                  🗑 Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
