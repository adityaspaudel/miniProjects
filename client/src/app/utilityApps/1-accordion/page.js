"use client";
import React, { useState } from "react";

const Accordion = () => {
	// Track which section is open (null = none)
	const [openIndex, setOpenIndex] = useState(null);

	const sections = [
		{
			title: "Section 1",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries...",
		},
		{
			title: "Section 2",
			content:
				"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
		},
		{
			title: "Section 3",
			content:
				"Lorem Ipsum is simply dummy text to illustrate the accordion functionality...",
		},
	];

	const handleToggle = (index) => {
		// If the same section is clicked, close it; otherwise open it
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="flex min-h-screen w-screen bg-yellow-100 items-center justify-center p-8 text-black">
			<div className="flex flex-col content-center items-center max-w-md bg-gray-200 rounded-lg shadow-lg p-4">
				<h1 className="text-2xl font-bold mb-4  text-center">Accordion<hr className="border border-black"/></h1>
				<div className="space-y-2 px-4">
					{sections.map((section, idx) => (
						<div key={idx} className="border-b border-gray-400">
							<button
								onClick={() => handleToggle(idx)}
								className="w-full text-left py-2 px-4 font-semibold text-red-700 hover:bg-red-200 rounded"
							>
								{section.title}
							</button>
							<div
								className={`overflow-hidden transition-all duration-300 px-4 ${
									openIndex === idx ? "max-h-96 py-2" : "max-h-0"
								}`}
							>
								<p className="text-gray-800">{section.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
