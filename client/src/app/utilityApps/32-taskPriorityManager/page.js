"use client";

import React, { useState } from "react";

const PRIORITY_COLORS = {
	High: "bg-red-500 text-white",
	Medium: "bg-yellow-400 text-black",
	Low: "bg-green-500 text-white",
};

export default function TaskManager() {
	const [tasks, setTasks] = useState([]);
	const [taskName, setTaskName] = useState("");
	const [priority, setPriority] = useState("Medium");

	const addTask = () => {
		if (!taskName) return;
		setTasks([
			...tasks,
			{ id: Date.now(), name: taskName, priority, completed: false },
		]);
		setTaskName("");
		setPriority("Medium");
	};

	const toggleComplete = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const changePriority = (id, newPriority) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, priority: newPriority } : task
			)
		);
	};

	return (
		<div className="p-6 max-w-2xl mx-auto">
			<h1 className="text-2xl font-bold mb-4">Task Priority Manager</h1>

			{/* Add Task */}
			<div className="flex gap-2 mb-4">
				<input
					type="text"
					placeholder="Task name"
					value={taskName}
					onChange={(e) => setTaskName(e.target.value)}
					className="flex-1 p-2 border border-gray-300 rounded"
				/>
				<select
					value={priority}
					onChange={(e) => setPriority(e.target.value)}
					className="p-2 border border-gray-300 rounded"
				>
					<option value="High">High</option>
					<option value="Medium">Medium</option>
					<option value="Low">Low</option>
				</select>
				<button
					onClick={addTask}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
				>
					Add
				</button>
			</div>

			{/* Task List */}
			<ul className="space-y-2">
				{tasks.map((task) => (
					<li
						key={task.id}
						className="flex justify-between items-center p-3 border border-gray-200 rounded hover:shadow"
					>
						<div className="flex items-center gap-3">
							<input
								type="checkbox"
								checked={task.completed}
								onChange={() => toggleComplete(task.id)}
								className="w-5 h-5"
							/>
							<span
								className={`${task.completed ? "line-through text-gray-400" : ""}`}
							>
								{task.name}
							</span>
						</div>
						<div className="flex items-center gap-2">
							{/* Priority Badge */}
							<span
								className={`px-2 py-1 rounded text-sm font-semibold ${PRIORITY_COLORS[task.priority]}`}
							>
								{task.priority}
							</span>
							{/* Change Priority */}
							<select
								value={task.priority}
								onChange={(e) => changePriority(task.id, e.target.value)}
								className="p-1 border border-gray-300 rounded text-sm"
							>
								<option value="High">High</option>
								<option value="Medium">Medium</option>
								<option value="Low">Low</option>
							</select>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
