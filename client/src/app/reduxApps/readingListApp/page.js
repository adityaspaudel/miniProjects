"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addBook,
  toggleBook,
  removeBook,
  clearList,
} from "@/lib/redux/slices/readingListSlice";

export default function ReadingList() {
  const [title, setTitle] = useState("");
  const books = useSelector((state) => state.readingList.books);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() === "") return;
    dispatch(addBook(title));
    setTitle("");
  };

  return (
    <div className="bg-slate-400 text-black ">
      <h1>📚 Reading List</h1>

      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {books.map((b) => (
          <li key={b.id}>
            <span
              style={{ textDecoration: b.completed ? "line-through" : "none" }}
            >
              {b.title}
            </span>
            <button onClick={() => dispatch(toggleBook(b.id))}>
              {b.completed ? "Undo" : "Done"}
            </button>
            <button onClick={() => dispatch(removeBook(b.id))}>Delete</button>
          </li>
        ))}

        {!books.length && <div>No books yet. Add one above ✨</div>}
      </ul>

      {books.length > 0 && (
        <button onClick={() => dispatch(clearList())}>Clear List</button>
      )}
    </div>
  );
}
