"use client";
import QuadrantInfographic from "@/components/infoChart/page";
import PieChartComponent from "@/components/pieChart/page";
import React from "react";
import { BsCartCheckFill } from "react-icons/bs";

import { FaCommentsDollar } from "react-icons/fa6";

const AdminDashboard = () => {
  return (
    <div className=" flex gap-2 bg-gray-700 h-screen text-white">
      {/* side nave bar */}
      <div className="flex flex-col items-center content-center bg-gray-600 w-64 font-sans">
        <div className="flex flex-col h-screen">
          <div className="flex flex-col  hover:bg-slate-700  gap-4 h-full w-full">
            {/* logo and logo name  */}
            <div className="flex gap-2 px-2">
              <img
                src="/calculator.jpg"
                height={48}
                width={48}
                alt="logo"
                className="rounded-3xl"
              />
              <span className="flex content-center items-center">
                Admin Dashboard
              </span>
            </div>
            <ul>
              <li className="flex gap-4 px-2 hover:bg-slate-500">
                <span>🏠</span>
                <span>Home</span>
              </li>
              <li className="flex gap-4 px-2 hover:bg-slate-500">
                <span>✉️</span>
                <span>Message</span>
              </li>
              <li className="flex gap-4 px-2 hover:bg-slate-500">
                <span>🔔</span>
                <span>Notification</span>
              </li>
              <li className="flex gap-4 px-2 hover:bg-slate-500">
                <span>💵</span>
                <span>Money</span>
              </li>
              <li className="flex gap-4 px-2 hover:bg-slate-500">
                <span>💹</span>
                <span>Chart</span>
              </li>
              <li className="flex gap-4 px-2 hover:bg-slate-500">
                <span>🔎</span>
                <span>Search</span>
              </li>
              <li className="flex gap-4 px-2 hover:bg-slate-500">
                <span>🛞</span>
                <span>Setting</span>
              </li>
            </ul>
          </div>

          {/* square and oval */}
          <div className="flex flex-col items-center content-center w-full h-full ">
            <div className="flex flex-col gap-4 items-center justify-center h-44 w-44 bg-purple-500/50 rounded-xl">
              <div className=" flex flex-col items-center content-center h-28 w-28 border-slate-200 border-8 rounded-[50%] p-4">
                <h1 className="font-bold font-serif">5:12</h1>
                <p className="text-[10px]">lorem ipsum lorem</p>
              </div>
              <span className="uppercase">lorem ipsum</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col gap-2">
        <div className="bg-slate-600 flex content-between justify-between items-center gap-4">
          {/* top menu bar  */}
          <div className="flex gap-4">
            <span className="w-4 px-2">#</span>
            <span>lorem ipsum</span>
            <span>total</span>
            <span>dcascakkads1</span>
          </div>
          <div className="flex gap-2">
            <span>🛎️</span>

            <span>1</span>
            <span>1</span>
          </div>
        </div>
        {/* contents  */}
        <div className=" flex gap-2 items-center justify-between content-center">
          <div className="bg-slate-600 flex content-start items-start justify-start ">
            {/* pie chart  */}
            <PieChartComponent />
          </div>
          <div className="flex gap-2 items-center content-center">
            <div className="flex flex-col  content-center items-center ">
              <div className="text-center">Lorem ipsum dolor</div>
              <div className="flex gap items-content content-center gap-4">
                <div className="bg-slate-600 flex flex-col  content-center items-center ">
                  <div className="flex flex-col content-center items-center h-28 w-28 border-[6px] rounded-xl border-purple-500 p-2 bg-purple-800 uppercase">
                    <div className="text-xs text-center">Lorem ipsum dolor</div>
                    <div>1678</div>
                  </div>
                  <div className="h-8 w-0 border-[6px] border-purple-500"></div>
                  <div className="flex flex-col content-center items-center h-24 w-24 border-[12px] -mt-2 rounded-full border-purple-500 text-4xl p-4 bg-slate-800">
                    <BsCartCheckFill />
                  </div>
                </div>
                <div className="bg-slate-600 flex flex-col gap-0 content-center items-center ">
                  <div className="flex flex-col content-center items-center h-28 w-28 border-[6px] rounded-xl border-sky-500 p-2  bg-sky-800 uppercase">
                    <div className="text-xs text-center">Lorem ipsum dolor</div>
                    <div>1890</div>
                  </div>
                  <div className="h-8 w-0 border-[6px] border-sky-500"></div>
                  <div className="flex flex-col content-center items-center h-24 w-24 border-[12px] -mt-2 rounded-full border-sky-500 text-4xl p-4 bg-slate-800">
                    <FaCommentsDollar />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* square like shape */}
          <div className="bg-slate-600">
            <div
              className="bg-red-400"
              style={{
                clipPath: "polygon(50% 0%, 100% 0%, 98% 100%, 0% 100%, 0% 50%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
