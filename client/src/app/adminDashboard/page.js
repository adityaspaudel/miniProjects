"use client";
import QuadrantInfographic from "@/components/infoChart/page";
import PieChartComponent from "@/components/pieChart/page";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className=" text-white flex gap-2 bg-gray-800">
      <div className="bg-gray-600 w-64 font-sans ">
        <div>
          <div className="flex  hover:bg-slate-800 px-2 gap-4 h-12">
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
      </div>
      <div className=" w-full flex flex-col gap-2">
        <div className="bg-slate-600 flex content-between justify-between items-center gap-4">
          <div className="flex gap-4">
            <span className="w-4 px-2">#</span>
            <span>1sdcdslkcmsd</span>
            <span>1sdamcakck</span>
            <span>dcascakkads1</span>
          </div>
          <div className="flex gap-2">
            <span>🛎️</span>

            <span>1</span>
            <span>1</span>
          </div>
        </div>
        <div className=" flex gap-2 items-center justify-between content-center">
          <div className="bg-slate-600 flex content-start items-start justify-start ">
            <PieChartComponent />
          </div>
          <div className="flex gap-2 items-center content-center">
            <div className="bg-slate-600 flex flex-col gap-0 content-center items-center ">
              <div className="h-28 w-28 border-[12px] rounded-xl border-purple-500 p-2 bg-purple-800">
                <div>Lorem ipsum</div>
                <div>1678</div>
              </div>
              <div className="h-8 w-0 border-[6px] border-purple-500"></div>
              <div className="h-24 w-24 border-[12px] -mt-2 rounded-full border-purple-500 text-4xl p-2 bg-slate-800">
                🛒
              </div>
            </div>
            <div className="bg-slate-600 flex flex-col gap-0 content-center items-center ">
              <div className="h-28 w-28 border-[12px] rounded-xl border-sky-500 p-2  bg-sky-800">
                <div>Lorem ipsum</div>
                <div>1890</div>
              </div>
              <div className="h-8 w-0 border-[6px] border-sky-500"></div>

              <div className="h-24 w-24 border-[12px] -mt-2 rounded-full border-sky-500 text-4xl p-2 bg-slate-800">
                💸
              </div>
            </div>
          </div>
          <div className="bg-slate-600">
            <QuadrantInfographic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
