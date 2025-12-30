"use client";

export default function Navbar({ active, setActive }) {
	return (
		<nav className="flex gap-6 px-6 py-4 border-b border-zinc-800">
			<button
				onClick={() => setActive("home")}
				className={`text-sm font-medium transition ${
					active === "home"
						? "text-white border-b-2 border-white"
						: "text-zinc-400 hover:text-white"
				}`}
			>
				Home
			</button>

			<button
				onClick={() => setActive("projects")}
				className={`text-sm font-medium transition ${
					active === "projects"
						? "text-white border-b-2 border-white"
						: "text-zinc-400 hover:text-white"
				}`}
			>
				Projects
			</button>

			<button
				onClick={() => setActive("about")}
				className={`text-sm font-medium transition ${
					active === "about"
						? "text-white border-b-2 border-white"
						: "text-zinc-400 hover:text-white"
				}`}
			>
				About
			</button>
		</nav>
	);
}
