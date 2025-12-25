"use client";
import { useLocalStorage } from "./useLocalStorage";

export default function LocalStorageSync() {
	const [name, setName] = useLocalStorage("username", "");
	const [theme, setTheme] = useLocalStorage("theme", "light");

	const isDark = theme === "dark";

	return (
		<div
			style={{
				padding: 20,
				background: isDark ? "#111" : "#f5f5f5",
				color: isDark ? "#fff" : "#000",
				minHeight: "100vh",
			}}
		>
			<h1>LocalStorage Sync Hook</h1>

			<input
				type="text"
				placeholder="Enter your name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				style={{ padding: 8, marginBottom: 10 }}
			/>

			<p>
				Hello, <strong>{name || "Guest"}</strong> 👋
			</p>

			<button onClick={() => setTheme(isDark ? "light" : "dark")}>
				Toggle Theme
			</button>

			<p style={{ marginTop: 10 }}>
				Current theme: <b>{theme}</b>
			</p>
		</div>
	);
}
