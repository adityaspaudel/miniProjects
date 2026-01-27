"use client";
import { useState } from "react";

export default function TodosLogic1() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState("");
	const [editingId, setEditingId] = useState(null);
	const [editText, setEditText] = useState("");

	const addTodo = () => {
		if (!text.trim()) return;
		setTodos([...todos, { id: Date.now(), text }]);
		setText("");
	};

	const saveTodo = (id) => {
		setTodos(todos.map((t) => (t.id === id ? { ...t, text: editText } : t)));
		setEditingId(null);
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
					{editingId === todo.id ? (
						<>
							<input
								value={editText}
								onChange={(e) => setEditText(e.target.value)}
							/>
							<button onClick={() => saveTodo(todo.id)}>Save</button>
							<button onClick={() => setEditingId(null)}>Cancel</button>
						</>
					) : (
						<>
							<span>{todo.text}</span>
							<button
								onClick={() => {
									setEditingId(todo.id);
									setEditText(todo.text);
								}}
							>
								Edit
							</button>
							<button onClick={() => deleteTodo(todo.id)}>Delete</button>
						</>
					)}
				</div>
			))}
		</div>
	);
}
