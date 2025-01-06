import Image from "next/image";
import React from "react";

const CardComponent = () => {
	return (
		<div className="bg-pink-400">
			<div className="flex flex-col justify-center items-center m-auto w-[200px] border-2 rounded-3xl p-2">
				<img
					className="border-2 rounded-3xl"
					src="https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4"
					width={200}
					height={200}
				/>
				<div className="flex flex-col gap-2">
					<h2>Card Title</h2>
					<p className="text-sm">
						lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
						dolor sit amet consectetur adipisicing elit.
					</p>
					<div className="flex gap-2 justify-between  text-[12px]">
						<span className="rounded-full border-[2px] p-[2px]">Furniture</span>
						<span className="rounded-full border-[2px] p-[2px]">Price</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
