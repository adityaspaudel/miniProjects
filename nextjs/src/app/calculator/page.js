import React from "react";

const Calculator = () => {
	return (
		<div className="flex flex-col gap-4 w-[400px] m-auto bg-white-400 text-white rounded-2xl">
			<h1>Simple Calculator</h1>

			<div className="flex gap-4 w-full bg-red-400 flex-wrap text-bold p-8 rounded-2xl">
				<div className="w-full bg-gray-400 p-4 text-right	  rounded-md">0</div>
				<div className="bg-blue-400 p-4 text-center hover:bg-green-400 w-[155px] rounded-md">
					C
				</div>
				<div className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md">
					/
				</div>
				<div className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md">
					*
				</div>

				<div className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md">
					{" "}
					7
				</div>
				<div className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md">
					{" "}
					8
				</div>
				<div className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md">
					{" "}
					9
				</div>
				<div className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md">
					{" "}
					-
				</div>
				<div className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md">
					{" "}
					4
				</div>
				<div className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md">
					{" "}
					5
				</div>
				<div className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md">
					{" "}
					6
				</div>
				<div className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md">
					+
				</div>
				<div className="flex gap-4 w-full bg-red-400 flex-wrap text-bold rounded-2xl">
					<div className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md">
						1
					</div>
					<div className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md">
						2
					</div>
					<div className="bg-blue-400 p-4 text-center w-[70px] h-[50px] hover:bg-green-400 rounded-md">
						3
					</div>
					{/* here-------------------------------------------- */}
					<div className="bg-blue-400 p-4 text-center w-[70px] h-[120px] hover:bg-green-400 rounded-md">
						=
					</div>
					<div className="bg-blue-400 p-4 text-center w-[155px] h-[50px] -mt-[70px] hover:bg-green-400 rounded-md">
						0
					</div>
					<div className="bg-blue-400 mt-0 p-4 text-center w-[70px] h-[50px] -mt-[70px] hover:bg-green-400 rounded-md">
						.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
