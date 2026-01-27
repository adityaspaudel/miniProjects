"use client"; // first line!
import Notification from "./Notification";
import { useDispatch } from "react-redux";
import {
	showNotification,
	hideNotification,
} from "@/lib/redux/slices/notificationSlice";

export default function Home() {
	const dispatch = useDispatch();

	const handleShow = () => {
		dispatch(
			showNotification({
				message: "This is a success message!",
				type: "success",
			}),
		);
		setTimeout(() => dispatch(hideNotification()), 3000);
	};

	return (
		<div className="flex items-center justify-center gap-2 h-screen w-screen bg-amber-200">
			<div className="bg-red-200 text-black min-h-1/2 w-1/2 p-4 flex flex-col content-center items-center gap-2 rounded-xl shadow shadow-black hover:shadow-md transition 1s">
				<Notification />
				<h1 className="text-4xl font-semibold">
					Notification System <hr className="border-black" />
				</h1>
				<button
					onClick={handleShow}
					className="bg-sky-500 hover:bg-sky-600 text-sm rounded-sm px-2 py-1 text-white"
				>
					Show Notification
				</button>
			</div>
		</div>
	);
}
