"use client";
import { useState } from "react";

export default function TodosLogic4() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState("");

	const addTodo = () => {
		if (!text.trim()) return;
		setTodos([...todos, { id: Date.now(), text }]);
		setText("");
	};

	const updateTodo = (id, value) => {
		setTodos(todos.map((t) => (t.id === id ? { ...t, text: value } : t)));
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((t) => t.id !== id));
	};

	return (
		<div>
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<button onClick={addTodo}>Add</button>

			{todos.map((todo) => (
				<div key={todo.id}>
					<input
						value={todo.text}
						onChange={(e) => updateTodo(todo.id, e.target.value)}
					/>
					<button onClick={() => deleteTodo(todo.id)}>Delete</button>
				</div>
			))}
		</div>
	);
}
