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

      {JSON.stringify(matrix)}
    </div>
  );
};

export default MatrixGenerator;
