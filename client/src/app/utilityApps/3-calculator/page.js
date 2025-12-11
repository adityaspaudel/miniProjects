"use client";

import React, { useState } from "react";

const Calculator = () => {
  const [val, setVal] = useState("");

  const hello = (props) => {
    setVal(val + props);
  };

  const reVal = (props) => {
    setVal(props);
  };

  const equalTo = () => {
    try {
      setVal(String(eval(val)));
    } catch {
      setVal("Error");
    }
  };

  return (
    <div className="flex flex-col content-center items-center min-h-screen text-black p-4 bg-green-500 font-mono">
      <h1 className="text-2xl text-black font-bold">
        Simple Calculator <hr className="border border-black" />
      </h1>

      <div className="flex flex-col gap-4 w-[400px] m-auto text-white rounded-2xl">
        <div className="flex gap-4 w-full bg-gray-600 flex-wrap text-bold p-8 rounded-3xl">
          <span className="uppercase font-mono text-2xl">casio</span>

          <div className="w-full h-[60px] bg-gray-100 p-4 text-right rounded-md text-2xl text-gray-600">
            {val}
          </div>

          <div
            className="bg-red-400 p-4 text-center hover:bg-green-400 w-[155px] rounded-md"
            onClick={() => reVal("0")}
          >
            C
          </div>

          <div
            className="bg-blue-400 p-4 text-center text-red-800 font-bold w-[70px] hover:bg-green-400 rounded-md"
            onClick={() => reVal("")}
          >
            off
          </div>

          <div
            className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
            onClick={() => hello("/")}
          >
            /
          </div>

          {/* NUMBERS */}
          <div
            className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
            onClick={() => hello("7")}
          >
            7
          </div>
          <div
            className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
            onClick={() => hello("8")}
          >
            8
          </div>
          <div
            className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
            onClick={() => hello("9")}
          >
            9
          </div>

          <div
            className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
            onClick={() => hello("*")}
          >
            *
          </div>

          <div
            className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
            onClick={() => hello("4")}
          >
            4
          </div>
          <div
            className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
            onClick={() => hello("5")}
          >
            5
          </div>
          <div
            className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
            onClick={() => hello("6")}
          >
            6
          </div>

          <div
            className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
            onClick={() => hello("-")}
          >
            -
          </div>

          <div className="flex gap-4 w-full bg-gray-600 flex-wrap text-bold rounded-2xl">
            <div
              className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
              onClick={() => hello("1")}
            >
              1
            </div>
            <div
              className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
              onClick={() => hello("2")}
            >
              2
            </div>
            <div
              className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
              onClick={() => hello("3")}
            >
              3
            </div>

            <div
              className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
              onClick={() => hello("+")}
            >
              +
            </div>

            <div
              className="bg-blue-400 p-4 text-center w-[155px] hover:bg-green-400 rounded-md"
              onClick={() => hello("0")}
            >
              0
            </div>

            <div
              className="bg-blue-400 p-4 text-center w-[70px] hover:bg-green-400 rounded-md"
              onClick={() => hello(".")}
            >
              .
            </div>

            <div
              className="bg-blue-600 p-4 text-center text-red-400 font-bold w-[70px] hover:bg-green-400 rounded-md"
              onClick={equalTo}
            >
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
