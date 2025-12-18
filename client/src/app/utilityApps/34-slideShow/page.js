"use client";

import { useState, useEffect } from "react";

const slides = [
	{
		title: "Website Traffic",
		description: "Monthly unique visitors have increased by 20%",
		image: "https://picsum.photos/id/1018/1200/600",
	},
	{
		title: "Sales Growth",
		description: "Revenue has increased by 15% compared to last month",
		image: "https://picsum.photos/id/1025/1200/600",
	},
	{
		title: "User Engagement",
		description: "Average session duration improved to 5 minutes",
		image: "https://picsum.photos/id/1035/1200/600",
	},
];

export default function Slideshow() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 5000); // slightly slower for better readability

		return () => clearInterval(interval);
	}, []);

	const prevSlide = () =>
		setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
	const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

	return (
		<div className="relative w-full h-96 md:h-screen overflow-hidden rounded-xl shadow-lg">
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
						current === index ? "opacity-100" : "opacity-0"
					} flex items-center justify-center`}
				>
					<img
						src={slide.image}
						alt={slide.title}
						className="absolute w-full h-full object-cover brightness-75"
					/>
					<div className="relative z-10 text-center text-white max-w-2xl px-4">
						<h2 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
							{slide.title}
						</h2>
						<p className="text-lg md:text-2xl drop-shadow-md">
							{slide.description}
						</p>
					</div>
				</div>
			))}

			{/* Navigation */}
			<button
				onClick={prevSlide}
				className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-full z-20 transition"
			>
				Prev
			</button>
			<button
				onClick={nextSlide}
				className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-full z-20 transition"
			>
				Next
			</button>

			{/* Indicators */}
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
				{slides.map((_, idx) => (
					<span
						key={idx}
						className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
							current === idx ? "bg-white scale-125" : "bg-gray-400"
						}`}
						onClick={() => setCurrent(idx)}
					/>
				))}
			</div>
		</div>
	);
}
