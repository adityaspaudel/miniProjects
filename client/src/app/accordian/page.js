"use client";
import React, { useRef } from "react";

const Accordian = () => {
	const buttonRef = useRef("none");

	const handleClick = () => {
		if (buttonRef.current) {
			buttonRef.current.style == "block";
		} else {
			buttonRef.current.style == "none";
		}
	};
	return (
		<div className="bg-black">
			<h1>Accordian</h1>
			<div>
				<div>
					<button
						className="sectiont sec1 text-red-700"
						onClick={handleClick(1)}
						ref={buttonRef}>
						Section 1
					</button>
					<div className=" hidden w-50 h-12 hover:bg-red-800">
						lorem10 Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text ever since the 1500s, when an unknown printer took a
						galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries,
					</div>
				</div>
				<div>
					<h3 className="sectiont sec1 text-red-700">Section 2</h3>
					<div className=" hidden ">
						lorem10 Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text ever since the 1500s, when an unknown printer took a
						galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries,
					</div>
				</div>
				<div>
					<h3 className="sectiont sec1 text-red-700">Section 3</h3>
					<div className="sectiont sec3 hidden">
						lorem10 Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry's standard
						dummy text ever since the 1500s, when an unknown printer took a
						galley of type and scrambled it to make a type specimen book. It has
						survived not only five centuries,
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accordian;
