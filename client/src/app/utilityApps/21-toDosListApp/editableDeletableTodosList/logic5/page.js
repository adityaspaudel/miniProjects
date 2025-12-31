"use client";
import { useState } from "react";

export default function TodosLogic5() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState("");
	const [current, setCurrent] = useState(null);

	const addTodo = () => {
		if (!text.trim()) return;
		setTodos([...todos, { id: Date.now(), text }]);
		setText("");
	};

	const saveTodo = () => {
		setTodos(todos.map((t) => (t.id === current.id ? current : t)));
		setCurrent(null);
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
					<span>{todo.text}</span>
					<button onClick={() => setCurrent(todo)}>Edit</button>
					<button onClick={() => deleteTodo(todo.id)}>Delete</button>
				</div>
			))}

			{current && (
				<div>
					<input
						value={current.text}
						onChange={(e) => setCurrent({ ...current, text: e.target.value })}
					/>
					<button onClick={saveTodo}>Save</button>
					<button onClick={() => setCurrent(null)}>Cancel</button>
				</div>
			)}
		</div>
	);
}
