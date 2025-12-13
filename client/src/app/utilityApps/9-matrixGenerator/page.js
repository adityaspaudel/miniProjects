"use client";

import React from "react";

const MatrixGenerator = () => {
  const rowsCount = 3;
  const colsCount = 3;
  const matrix = [];
  for (let i = 0; i < colsCount; i++) {
    const row = [];
    for (let j = 0; j < rowsCount; j++) {
      row.push(j + 3 * i);
    }
    matrix.push(row);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen w-screen bg-green-400">
      <div className="flex flex-col items-center content-center gap-4 text-4xl min-h-1/2 w-1/2  bg-stone-200 rounded-xl p-4">
        <div className="text-black text-2xl font-bold">
          Matrix Generator <hr className=" border border-black" />
        </div>
        {/* <div>Unformatted: {JSON.stringify(matrix)}</div> */}
        <div>
          {matrix.map((val, ind) => {
            return (
              <div key={val} className="flex items-center justify-center ">
                {val.map((v, i) => [
                  <div
                    key={i}
                    className="flex w-20 h-20 gap-2 p-2 text-lg text-white bg-green-400 border-2 border-green-500 hover:bg-green-500 text-center"
                  >
                    {v + 1}
                  </div>,
                ])}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MatrixGenerator;
