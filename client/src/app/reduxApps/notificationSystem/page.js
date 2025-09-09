"use client";

import {
  hideNotification,
  showNotification,
} from "@/lib/redux/slices/notificationSlice";
import { useDispatch, useSelector } from "react-redux";

// ✅ Notification component
function Notification() {
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

// ✅ Home page
export default function Home() {
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(
      showNotification({
        message: "This is a success message!",
        type: "success",
      })
    );

    setTimeout(() => {
      dispatch(hideNotification());
    }, 3000);
  };

  return (
    <div className="bg-slate-100 text-red-500">
      <Notification />
      <h1>Notification System</h1>
      <button onClick={handleShow}>Show Notification</button>
    </div>
  );
}
