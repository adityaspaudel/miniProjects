"use client";
import { useState } from "react";

export default function TodosLogic2() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState("");

	const addTodo = () => {
		if (!text.trim()) return;
		setTodos([...todos, { id: Date.now(), text, isEditing: false }]);
		setText("");
	};

	const toggleEdit = (id) => {
		setTodos(
			todos.map((t) => (t.id === id ? { ...t, isEditing: !t.isEditing } : t))
		);
	};

	const updateText = (id, value) => {
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
					{todo.isEditing ? (
						<input
							value={todo.text}
							onChange={(e) => updateText(todo.id, e.target.value)}
						/>
					) : (
						<span>{todo.text}</span>
					)}
					<button onClick={() => toggleEdit(todo.id)}>
						{todo.isEditing ? "Save" : "Edit"}
					</button>
					<button onClick={() => deleteTodo(todo.id)}>Delete</button>
				</div>
			))}
		</div>
	);
}
