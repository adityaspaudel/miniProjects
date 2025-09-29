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
        <div className=" flex  gap-12 items-center justify-center content-center">
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
          <div className="flex flex-col w-96">
            <div className="flex gap-2">
              {/* part-1  */}
              <div className="flex bg-slate-600  flex-wrap gap-8 h-40 w-40 shadow-[40px_40px_10px_-10px_rgba(200,150,150,1)] p-8">
                <div
                  className="shadow-xl shadow-purple-600"
                  style={{
                    clipPath:
                      "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40%)",
                  }}
                >
                  <div className="h-8 w-8 bg-purple-600 text-center p-2">A</div>
                </div>
                <div
                  className="shadow-[5px_5px_5px_-5px_rgba(200,150,150,1)] "
                  style={{
                    clipPath:
                      "polygon(60% 0, 100% 40%, 100% 100%, 0 100%, 0 0)",
                  }}
                >
                  <div className="h-8 w-8 bg-purple-600 text-center p-2">B</div>
                </div>
                <div
                  style={{
                    clipPath:
                      "polygon(100% 0, 100% 100%, 40% 100%, 0 60%, 0 0)",
                  }}
                >
                  <div className="h-8 w-8 bg-purple-600 text-center p-2">C</div>{" "}
                </div>
                <div
                  style={{
                    clipPath:
                      "polygon(100% 0, 100% 60%, 60% 100%, 0 100%, 0 0)",
                  }}
                >
                  <div className="h-8 w-8 bg-purple-600 text-center p-2">D</div>{" "}
                </div>
              </div>
              {/* part 2 */}
              <div className="flex bg-slate-600  flex-wrap gap-8 h-40 w-40 shadow-[40px_40px_10px_-10px_rgba(200,150,150,1)] p-8">
                <div
                  className="shadow-xl shadow-blue-600"
                  style={{
                    clipPath:
                      "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40%)",
                  }}
                >
                  <div className="h-8 w-8 bg-blue-600 text-center p-2">A</div>
                </div>
                <div
                  className="shadow-[5px_5px_5px_-5px_rgba(200,150,150,1)] "
                  style={{
                    clipPath:
                      "polygon(60% 0, 100% 40%, 100% 100%, 0 100%, 0 0)",
                  }}
                >
                  <div className="h-8 w-8 bg-blue-600 text-center p-2">B</div>
                </div>
                <div
                  style={{
                    clipPath:
                      "polygon(100% 0, 100% 100%, 40% 100%, 0 60%, 0 0)",
                  }}
                >
                  <div className="h-8 w-8 bg-blue-600 text-center p-2">C</div>{" "}
                </div>
                <div
                  style={{
                    clipPath:
                      "polygon(100% 0, 100% 60%, 60% 100%, 0 100%, 0 0)",
                  }}
                >
                  <div className="h-8 w-8 bg-blue-600 text-center p-2">D</div>{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="uppercase">lorem ipsum lorem ipsum </h1>
              <div className="text-[8px] text-center text-wrap uppercase">
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
