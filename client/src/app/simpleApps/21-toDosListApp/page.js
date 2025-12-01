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
    <div className=" bg-yellow-200 h-screen w-screen flex justify-center items-center">
      <div className="bg-green-400 flex flex-col gap-2 justify-center items-center border-2 border-green-400 rounded-xl w-1/2 min-h-1/2 p-4">
        <div className="text-4xl">ToDoListApp</div>
        <hr className="w-full border-1" />
        <div>
          <label htmlFor="todo"></label>
          <input
            name="todo"
            className="border-2 text-black"
            type="text"
            ref={inputRef}
          />
          <button onClick={addTodo}> ✚ add </button>
        </div>

        <div className="flex flex-col font-mono justify-start items-start">
          {todos.map((val, key) => (
            <div key={key}>{val} </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoListApp;
