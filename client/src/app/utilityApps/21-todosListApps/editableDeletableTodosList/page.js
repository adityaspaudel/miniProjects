"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Trash2, Check, X } from "lucide-react";

export default function EditableTodos() {
	const [todos, setTodos] = useState([]);
	const [todoName, setTodoName] = useState("");

	const handleAdd = () => {
		if (!todoName.trim()) return;

		setTodos((prev) => [
			...prev,
			{
				id: Date.now(),
				name: todoName,
				originalName: todoName,
				isEditing: false,
				createdAt: new Date(),
			},
		]);
		setTodoName("");
	};

	const handleEdit = (id) => {
		setTodos((prev) =>
			prev.map((td) => ({
				...td,
				isEditing: td.id === id,
				originalName: td.name,
			}))
		);
	};

	const handleChange = (id, value) => {
		setTodos((prev) =>
			prev.map((td) => (td.id === id ? { ...td, name: value } : td))
		);
	};

	const handleSave = (id) => {
		setTodos((prev) =>
			prev.map((td) => (td.id === id ? { ...td, isEditing: false } : td))
		);
	};

	const handleCancel = (id) => {
		setTodos((prev) =>
			prev.map((td) =>
				td.id === id ? { ...td, name: td.originalName, isEditing: false } : td
			)
		);
	};

	const handleDelete = (id) => {
		setTodos((prev) => prev.filter((td) => td.id !== id));
	};

	return (
		<div className="max-w-xl mx-auto p-6 space-y-6">
			<h1 className="text-2xl font-bold">📝 Editable Todos</h1>

			{/* Add Todo */}
			<div className="flex gap-2">
				<Input
					placeholder="Add a new todo..."
					value={todoName}
					onChange={(e) => setTodoName(e.target.value)}
				/>
				<Button onClick={handleAdd}>Add</Button>
			</div>

			{/* Todo List */}
			<div className="space-y-3">
				{todos.map((td) => (
					<Card key={td.id}>
						<CardContent className="flex items-center justify-between gap-2 p-4">
							<Input
								value={td.name}
								readOnly={!td.isEditing}
								autoFocus={td.isEditing}
								onChange={(e) => handleChange(td.id, e.target.value)}
							/>

							<div className="flex gap-1">
								{td.isEditing ? (
									<>
										<Button
											size="icon"
											variant="success"
											onClick={() => handleSave(td.id)}
										>
											<Check size={16} />
										</Button>
										<Button
											size="icon"
											variant="destructive"
											onClick={() => handleCancel(td.id)}
										>
											<X size={16} />
										</Button>
									</>
								) : (
									<>
										<Button
											size="icon"
											variant="outline"
											onClick={() => handleEdit(td.id)}
										>
											<Pencil size={16} />
										</Button>
										<Button
											size="icon"
											variant="destructive"
											onClick={() => handleDelete(td.id)}
										>
											<Trash2 size={16} />
										</Button>
									</>
								)}
							</div>
						</CardContent>
					</Card>
				))}

				{todos.length === 0 && (
					<p className="text-muted-foreground text-center">No todos yet</p>
				)}
			</div>
		</div>
	);
}
