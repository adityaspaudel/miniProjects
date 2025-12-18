"use client";

import { useState, useEffect } from "react";

const slides = [
	{
		title: "Website Traffic",
		description: "Monthly unique visitors have increased by 20%",
		image: "https://picsum.photos/id/1018/800/400",
	},
	{
		title: "Sales Growth",
		description: "Revenue has increased by 15% compared to last month",
		image: "https://picsum.photos/id/1025/800/400",
	},
	{
		title: "User Engagement",
		description: "Average session duration improved to 5 minutes",
		image: "https://picsum.photos/id/1035/800/400",
	},
];

export default function Slideshow() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	const prevSlide = () =>
		setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
	const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

	return (
		<div className="relative w-full h-64 overflow-hidden rounded-xl shadow-lg">
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
						current === index ? "opacity-100" : "opacity-0"
					} flex flex-col items-center justify-center text-white bg-black bg-opacity-50`}
				>
					<img
						src={slide.image}
						alt={slide.title}
						className="absolute w-full h-full object-cover"
					/>
					<div className="relative z-10 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50 rounded-lg">
						<h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
						<p>{slide.description}</p>
					</div>
				</div>
			))}

			{/* Navigation */}
			<button
				onClick={prevSlide}
				className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full z-20"
			>
				Prev
			</button>
			<button
				onClick={nextSlide}
				className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full z-20"
			>
				Next
			</button>

			{/* Indicators */}
			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
				{slides.map((_, idx) => (
					<span
						key={idx}
						className={`w-3 h-3 rounded-full ${
							current === idx ? "bg-white" : "bg-gray-400"
						}`}
						onClick={() => setCurrent(idx)}
					/>
				))}
			</div>
		</div>
	);
}
