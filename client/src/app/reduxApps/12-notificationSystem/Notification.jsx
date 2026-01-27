"use client";
import { useSelector, useDispatch } from "react-redux";
import { hideNotification } from "@/lib/redux/slices/notificationSlice";

export default function Notification() {
	const dispatch = useDispatch();
	const { message, type, visible } = useSelector((state) => state.notification);

	if (!visible) return null;

	return (
		<div
			style={{
				position: "fixed",
				top: "20px",
				right: "20px",
				padding: "12px 20px",
				borderRadius: "8px",
				backgroundColor:
					type === "success" ? "green" : type === "error" ? "red" : "blue",
				color: "white",
				zIndex: 9999,
			}}
		>
			<span>{message}</span>
			<button
				style={{
					marginLeft: "10px",
					background: "transparent",
					color: "white",
					border: "none",
					cursor: "pointer",
					fontWeight: "bold",
				}}
				onClick={() => dispatch(hideNotification())}
			>
				✖
			</button>
		</div>
	);
}
