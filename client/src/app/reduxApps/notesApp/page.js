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
      <div className="min-h-1/2 w-1/2 bg-orange-200 flex flex-col gap-2 content-center items-center p-4 rounded-xl">
        <div className="">
          <h1 className="text-4xl font-bold "> Notes App</h1>
          <hr className="border-1 border-black" />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-green-400 hover:bg-green-500 text-sm px-2"
          >
            Add
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          {notes.length === 0 && <p>No notes yet.</p>}
          {notes.map((note) => (
            <li key={note.id} className="flex gap-4">
              <span>{note.text}</span>
              <button
                onClick={() => dispatch(deleteNote(note.id))}
                className="px-2 text-sm bg-red-400 hover:bg-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
