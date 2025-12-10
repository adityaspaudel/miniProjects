"use client";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, removeTodo, toggleTodo } from "@/lib/redux/slices/todosSlice";
// import { addTodo, toggleTodo, removeTodo } from "./todosSlice";

export default function TodoApp() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="p-4 flex flex-col gap-2 justify-center items-center bg-pink-200 h-screen w-screen text-black">
      <div className="flex flex-col gap-2 content-center items-center bg-lime-200 p-4 min-h-1/2 w-1/2 rounded-xl shadow shadow-gray-400 hover:shadow-md transition 1s">
        <div className="flex flex-col ">
          <h1 className="text-4xl font-bold">Todo List</h1>
          <hr className="w-full border-black" />
        </div>
        <br />

        <div className="flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add todo"
            className="border px-2 py-1 mr-2 bg-gray-100 border-gray-400 w-80 rounded-sm"
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white px-2 rounded-sm hover:bg-green-600 cursor-pointer"
          >
            Add
          </button>
        </div>
        <ul className="mt-4 flex flex-col gap-2 w-full px-8 py-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex  justify-between content-between gap-2 items-center w-full bg-amber-200 px-4 py-1"
            >
              <div
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={`${todo.done ? "line-through" : ""}`}
              >
                {todo.text}
              </div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white  hover:bg-red-600 rounded-sm  text-sm px-2 py-1 cursor-pointer"
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
