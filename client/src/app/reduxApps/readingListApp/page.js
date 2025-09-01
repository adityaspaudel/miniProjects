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
    <div className="flex h-screen w-screen gap-2 justify-center items-center">
      <div className="bg-slate-400 text-black flex flex-col  content-center items-center gap-2 min-h-1/2 w-1/2 p-4 rounded-xl">
        <div>
          <h1 className="text-4xl font-bold">📚 Reading List</h1>
          <hr className="border-black" />
        </div>
        <div className="flex gap-2">
          <input
            className="px-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
          />
          <button
            onClick={handleAdd}
            className="text-sm  rounded-sm bg-green-400 hover:bg-green-500 px-2"
          >
            Add
          </button>
        </div>
        <ul className="flex flex-col gap-2 px-2 ">
          {books.map((b) => (
            <li
              key={b.id}
              className=" flex gap-2 text-sm font-mono border border-black p-2 justify-between rounded-xl"
            >
              <span
                className={b.completed ? "line-through text-red-600" : "no-underline"}
              >
                {b.title}
              </span>
              <button onClick={() => dispatch(toggleBook(b.id))}>
                {b.completed ? <span className="text-sky-600 hover:text-sky-800">Undo</span> : <span className="text-green-600 hover:text-green-800"> Done</span>}
              </button>
              <button
                className="bg-red-400 hover:bg-red-500 text-sm rounded-sm px-2"
                onClick={() => dispatch(removeBook(b.id))}
              >
                Delete
              </button>
            </li>
          ))}
          {!books.length && <div>No books yet. Add one above ✨</div>}
        </ul>
        {books.length > 0 && (
          <button onClick={() => dispatch(clearList())} className="bg-gray-600 text-white p-2 hover:bg-gray-800 hover rounded-sm">Clear List</button>
        )}
      </div>
    </div>
  );
}
