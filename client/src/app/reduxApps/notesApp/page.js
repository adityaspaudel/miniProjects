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
    <div className="bg-gray-200 h-screen w-screen flex flex-col gap-2 justify-center items-center text-black">
      <div className="min-h-1/2 w-1/2 bg-red-200 flex flex-col gap-2 content-center items-center p-4 rounded-md">
        <div>
          <h1 className="text-4xl font-bold "> Notes App</h1>
          <hr className="border-1 border-black" />
        </div>
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
    </div>
  );
}
