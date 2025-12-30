"use client";

import { useState, Suspense, lazy } from "react";
import Navbar from "./Navbar";

// 👇 Lazy-loaded components
const Home = lazy(() => import("./Home.js"));
const Projects = lazy(() => import("./Projects"));
const About = lazy(() => import("./About"));

export default function Page() {
	const [active, setActive] = useState("home");

	const renderPage = () => {
		if (active === "home") return <Home />;
		if (active === "projects") return <Projects />;
		if (active === "about") return <About />;
	};

	return (
		<main className="min-h-screen bg-zinc-950 text-zinc-100">
			<Navbar active={active} setActive={setActive} />

			<Suspense
				fallback={
					<p className="px-6 py-10 text-zinc-400 animate-pulse">
						⏳ Loading...
					</p>
				}
			>
				{renderPage()}
			</Suspense>
		</main>
	);
}
