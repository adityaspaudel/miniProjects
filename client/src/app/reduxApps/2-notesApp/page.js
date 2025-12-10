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
      <div className="min-h-1/2 w-1/2 bg-orange-100 flex flex-col gap-4 shadow shadow-gray-400 transition 1s hover:shadow-md content-center items-center p-4 rounded-xl">
        <div className="">
          <h1 className="text-4xl font-bold "> Notes App</h1>
          <hr className="border border-black" />
        </div>
        <div className="flex gap-4">
          <input
            className=" bg-gray-100 border px-4 py-2 rounded-xl"
            type="text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
          <button
            onClick={handleAdd}
            className="bg-green-400 hover:bg-green-500 text-sm px-4 rounded-sm cursor-pointer text-gray-100"
          >
            Add
          </button>
        </div>
        <ul className="flex flex-col  w-full p-2 gap-2">
          {notes.length === 0 ? <h1>No notes yet.</h1> : <h1 className="font-bold text-2xl">Notes List</h1>}

          {notes.map((note) => (
            <li
              key={note.id}
              className="flex gap-4 w-full justify-between items-center border border-black px-2 rounded-xl"
            >
              <div>{note.text}</div>
              <button
                onClick={() => dispatch(deleteNote(note.id))}
                className="px-2 text-sm text-white  cursor-pointer bg-red-400 hover:bg-red-500 rounded-sm"
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
