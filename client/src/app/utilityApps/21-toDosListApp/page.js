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
    <div className=" bg-green-500 h-screen w-screen flex justify-center items-center">
      <div className="bg-yellow-200 flex flex-col gap-4 content-center items-center border-2  rounded-xl w-1/2 min-h-1/2 p-4">
        <div className="text-4xl font-bold">
          To Do List App <hr className="w-full border-black" />
        </div>
        <div className="flex gap-4">
          <label htmlFor="todo"></label>
          <input
            name="todo"
            className="border text-black bg-white px-4 py-1"
            placeholder="Add a todo"
            type="text"
            ref={inputRef}
          />
          <button onClick={addTodo} className="bg-green-500 hover:bg-green-600 rounded sm px-2 py-1 text-white">
            {" "}
            ✚ add{" "}
          </button>
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
