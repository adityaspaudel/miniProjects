"use client";

import React from "react";

const MatrixGenerator = () => {
  const rowsCount = 3;
  const colsCount = 3;
  const matrix = [];
  for (let i = 0; i < colsCount; i++) {
    const row = [];
    for (let j = 0; j < rowsCount; j++) {
      row.push(j);
    }
    matrix.push(row);
  }

  return (
    <div>
      <div>MatrixGenerator</div>

      {/* <div>Unformatted: {JSON.stringify(matrix)}</div> */}

      <div>
        {matrix.map((val, ind) => {
          return (
            <div key={val} className="flex ">
              {val.map((v, i) => [
                <div key={i} className="flex gap-2 p-2 border-2">
                  {v + 1}
                </div>,
              ])}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MatrixGenerator;
