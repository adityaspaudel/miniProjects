// from mui x

"use client";
import * as React from "react";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data = [
  { label: "Group A", value: 400, color: "#0088FE" },
  { label: "Group B", value: 300, color: "#00C49F" },
  { label: "Group C", value: 300, color: "#FFBB28" },
];

const sizing = {
  margin: {},
  width: 200,
  height: 200,
  hideLegend: false,
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function PieCharComponent() {
  return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
          hideLegend: false,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "black",
          fontSize: 12,
        },
      }}
      {...sizing}
    />
  );
}
