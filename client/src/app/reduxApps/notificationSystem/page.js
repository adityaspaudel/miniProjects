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
    <div className="flex items-center justify-center gap-2 h-screen w-screen bg-slate-400">
      <div className="bg-red-200 text-black min-h-1/2 w-1/2 p-4 flex flex-col content-center items-center gap-2 rounded-xl">
        <Notification />
        <h1 className="text-4xl">
          Notification System <hr className="border-black" />
        </h1>
        <button
          onClick={handleShow}
          className="bg-sky-500 hover:bg-sky-600 text-sm rounded-sm px-2"
        >
          Show Notification
        </button>
      </div>
    </div>
  );
}
