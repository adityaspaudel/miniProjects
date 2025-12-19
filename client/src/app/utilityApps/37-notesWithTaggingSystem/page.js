"use client";

import { useEffect, useState } from "react";

export default function NotesApp() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  const [notes, setNotes] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("notes") || "[]");
    }
    return [];
  });

  // Save notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!title.trim() || !content.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      content,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    setNotes((prev) => [newNote, ...prev]);
    setTitle("");
    setContent("");
    setTags("");
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const allTags = [
    "all",
    ...new Set(notes.flatMap((note) => note.tags)),
  ];

  const filteredNotes =
    activeTag === "all"
      ? notes
      : notes.filter((n) => n.tags.includes(activeTag));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-center text-3xl font-bold">
          📝 Notes with Tags
        </h1>

        {/* Add Note */}
        <div className="mb-6 rounded-xl bg-white p-4 shadow">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title"
            className="mb-2 w-full rounded border p-2"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note..."
            className="mb-2 w-full rounded border p-2"
            rows={3}
          />

          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags (comma separated)"
            className="w-full rounded border p-2"
          />

          <button
            onClick={addNote}
            className="mt-3 w-full rounded-lg bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700"
          >
            Add Note
          </button>
        </div>

        {/* Tags Filter */}
        <div className="mb-4 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-3 py-1 text-sm ${
                activeTag === tag
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Notes List */}
        <div className="space-y-4">
          {filteredNotes.length === 0 && (
            <p className="text-center text-gray-500">
              No notes found 📭
            </p>
          )}

          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="rounded-xl bg-white p-4 shadow"
            >
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">{note.title}</h2>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>

              <p className="mt-1 text-gray-700">{note.content}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
