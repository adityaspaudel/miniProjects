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
    <div className="flex flex-col items-center justify-center gap-2 h-screen w-screen bg-stone-400">
      <div className="flex flex-col items-center justify-center gap-2 text-4xl h-1/2 w-1/2 border-2 border-green-400 rounded-xl">
        <div className="text-black">Matrix Generator</div>
        <hr className="w-1/2 border border-black" />
        {/* <div>Unformatted: {JSON.stringify(matrix)}</div> */}
        <div>
          {matrix.map((val, ind) => {
            return (
              <div key={val} className="flex items-center justify-center ">
                {val.map((v, i) => [
                  <div
                    key={i}
                    className="flex w-10 h-10 gap-2 p-2 text-lg text-white bg-green-400 border-2 border-green-500 hover:bg-green-500 "
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
