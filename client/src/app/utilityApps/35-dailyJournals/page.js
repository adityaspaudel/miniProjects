"use client";

import { useEffect, useState } from "react";

export default function DailyJournal() {
	/* -------------------- STATE -------------------- */

	const [entry, setEntry] = useState("");

	const [journals, setJournals] = useState(() => {
		if (typeof window !== "undefined") {
			return JSON.parse(localStorage.getItem("journals") || "[]");
		}
		return [];
	});

	const [darkMode, setDarkMode] = useState(() => {
		if (typeof window !== "undefined") {
			return JSON.parse(localStorage.getItem("darkMode") || "false");
		}
		return false;
	});

	const [editId, setEditId] = useState(null);
	const [editText, setEditText] = useState("");

	/* -------------------- EFFECTS (SYNC ONLY) -------------------- */

	useEffect(() => {
		localStorage.setItem("journals", JSON.stringify(journals));
	}, [journals]);

	useEffect(() => {
		localStorage.setItem("darkMode", JSON.stringify(darkMode));
	}, [darkMode]);

	/* -------------------- ACTIONS -------------------- */

	const addEntry = () => {
		if (!entry.trim()) return;

		const newEntry = {
			id: Date.now(),
			text: entry,
			date: new Date().toLocaleDateString(),
		};

		setJournals((prev) => [newEntry, ...prev]);
		setEntry("");
	};

	const deleteEntry = (id) => {
		setJournals((prev) => prev.filter((j) => j.id !== id));
	};

	const startEdit = (journal) => {
		setEditId(journal.id);
		setEditText(journal.text);
	};

	const saveEdit = (id) => {
		setJournals((prev) =>
			prev.map((j) => (j.id === id ? { ...j, text: editText } : j))
		);
		setEditId(null);
		setEditText("");
	};

	/* -------------------- UI -------------------- */

	return (
		<div className={darkMode ? "dark" : ""}>
			<div className="min-h-screen bg-gray-100 p-6 dark:bg-gray-900">
				<div className="mx-auto max-w-2xl">
					{/* Header */}
					<div className="mb-6 flex items-center justify-between">
						<h1 className="text-3xl font-bold text-gray-800 dark:text-white">
							📔 Daily Journal
						</h1>

						<button
							onClick={() => setDarkMode((prev) => !prev)}
							className="rounded-lg bg-gray-200 px-3 py-2 text-xl dark:bg-gray-700"
						>
							{darkMode ? "☀️" : "🌙"}
						</button>
					</div>

					{/* New Entry */}
					<div className="mb-6 rounded-xl bg-white p-4 shadow dark:bg-gray-800">
						<textarea
							value={entry}
							onChange={(e) => setEntry(e.target.value)}
							placeholder="Write your thoughts today..."
							rows={4}
							className="w-full resize-none rounded-lg border p-3 dark:bg-gray-700 dark:text-white"
						/>

						<button
							onClick={addEntry}
							className="mt-3 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
						>
							Add Entry
						</button>
					</div>

					{/* Journal List */}
					<div className="space-y-4">
						{journals.length === 0 && (
							<p className="text-center text-gray-500 dark:text-gray-400">
								No journal entries yet 🌱
							</p>
						)}

						{journals.map((j) => (
							<div
								key={j.id}
								className="rounded-xl bg-white p-4 shadow dark:bg-gray-800"
							>
								<div className="mb-2 flex justify-between">
									<span className="text-sm text-gray-500">{j.date}</span>

									<div className="space-x-3">
										<button
											onClick={() => startEdit(j)}
											className="text-sm text-blue-500 hover:underline"
										>
											Edit
										</button>
										<button
											onClick={() => deleteEntry(j.id)}
											className="text-sm text-red-500 hover:underline"
										>
											Delete
										</button>
									</div>
								</div>

								{editId === j.id ? (
									<>
										<textarea
											value={editText}
											onChange={(e) => setEditText(e.target.value)}
											className="w-full rounded-lg border p-2 dark:bg-gray-700 dark:text-white"
										/>
										<div className="mt-2 flex gap-2">
											<button
												onClick={() => saveEdit(j.id)}
												className="rounded bg-green-600 px-3 py-1 text-white"
											>
												Save
											</button>
											<button
												onClick={() => setEditId(null)}
												className="rounded bg-gray-400 px-3 py-1 text-white"
											>
												Cancel
											</button>
										</div>
									</>
								) : (
									<p className="text-gray-800 dark:text-gray-200">{j.text}</p>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
