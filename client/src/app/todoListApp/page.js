"use client";
import React, { useRef, useState } from "react";

const ToDoListApp = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const addTodo = () => {
    // inputRef.current.focus();
    console.log(inputRef.current.value);
    setTodos((t) => [...t, inputRef.current.value]);
  };
  return (
    <div>
      <div>ToDoListApp</div>
      <div>
        <label htmlFor="todo"></label>
        <input className="border-2" type="text" ref={inputRef} />

        <button onClick={addTodo}>add todo</button>
      </div>

      {todos.map((val, key) => (
        <div key={key}>{val}</div>
      ))}
    </div>
  );
};

export default ToDoListApp;
