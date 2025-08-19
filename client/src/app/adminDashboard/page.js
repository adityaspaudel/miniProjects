"use client";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className=" text-green-600 flex gap-2">
      <div className="bg-blue-100 w-64 font-sans px-2">
        <div>
          <div className="flex flex-col">
            <span>logo</span>
            <span>Admin Dashboard</span>
          </div>
          <ul>
            <li className="flex gap-4">
              <span>💌</span>
              <span>Home</span>
            </li>
            <li className="flex gap-4">
              <span>✉️</span>
              <span>Message</span>
            </li>
            <li className="flex gap-4">
              <span>🔔</span>
              <span>Notification</span>
            </li>
            <li className="flex gap-4">
              <span>💵</span>
              <span>Money</span>
            </li>
            <li className="flex gap-4">
              <span>💹</span>
              <span>Inflation</span>
            </li>
            <li className="flex gap-4">
              <span>🔎</span>
              <span>Search</span>
            </li>
            <li className="flex gap-4">
              <span>🛞</span>
              <span>Setting</span>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full flex flex-col gap-2">
        <div className="bg-blue-100 flex content-between justify-between items-center gap-4">
          <div className="flex gap-4">
            <span className="w-4 px-2">#</span>
            <span>1sdcdslkcmsd</span>
            <span>1sdamcakck</span>
            <span>dcascakkads1</span>
          </div>
          <div>
            <span>1</span>

            <span>1</span>
            <span>1</span>
          </div>
        </div>
        <div className="bg-blue-100">hi</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
