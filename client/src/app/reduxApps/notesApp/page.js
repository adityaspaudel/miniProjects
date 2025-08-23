"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote } from "@/lib/redux/slices/notesSlice";

export default function NotesPage() {
  const [noteText, setNoteText] = useState("");
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (noteText.trim() === "") return;
    dispatch(addNote(noteText));
    setNoteText("");
  };

  return (
    <div>
      <h1> Notes App</h1>

      <div>
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {notes.length === 0 && <p>No notes yet.</p>}
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.text}</span>
            <button onClick={() => dispatch(deleteNote(note.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
