"use client";
import { useState } from "react";

export default function TodosLogic3() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState("");
	const [editValues, setEditValues] = useState({});

	const addTodo = () => {
		if (!text.trim()) return;
		setTodos([...todos, { id: Date.now(), text }]);
		setText("");
	};

	const saveTodo = (id) => {
		setTodos(
			todos.map((t) => (t.id === id ? { ...t, text: editValues[id] } : t))
		);
		setEditValues((prev) => {
			const copy = { ...prev };
			delete copy[id];
			return copy;
		});
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
						value={editValues[todo.id] ?? todo.text}
						onChange={(e) =>
							setEditValues({ ...editValues, [todo.id]: e.target.value })
						}
					/>
					<button onClick={() => saveTodo(todo.id)}>Save</button>
					<button onClick={() => deleteTodo(todo.id)}>Delete</button>
				</div>
			))}
		</div>
	);
}
