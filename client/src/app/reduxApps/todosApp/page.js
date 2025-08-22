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
    <div className="p-4">
      <h1 className="text-xl font-bold">Todo List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo"
        className="border px-2 py-1 mr-2"
      />
      <button onClick={handleAdd}>Add</button>

      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center">
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={todo.done ? "line-through" : ""}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
