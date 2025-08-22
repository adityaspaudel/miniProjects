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
    <div className="p-4 flex flex-col gap-2 justify-center items-center bg-slate-400 h-screen w-screen text-black">
      <div className="flex flex-col gap-2 content-center items-center bg-lime-600 p-4 h-1/2 w-1/2 rounded-xl">
        <div className="flex flex-col ">
          <h1 className="text-4xl font-bold">Todo List</h1>
          <hr className="w-full border-black" />
        </div>
        <div className="flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add todo"
            className="border px-2 py-1 mr-2"
          />
          <button
            onClick={handleAdd}
            className="bg-green-400 px-2 rounded-lg hover:bg-green-600"
          >
            Add
          </button>
        </div>
        <ul className="mt-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex  justify-between content-between gap-10 items-center w-full"
            >
              <div
                onClick={() => dispatch(toggleTodo(todo.id))}
                className={todo.done ? "line-through" : ""}
              >
                {todo.text}
              </div>
              <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
