// from mui x

"use client";
import * as React from "react";
import { pieArcClasses, PieChart, pieClasses } from "@mui/x-charts/PieChart";
import { rainbowSurgePalette } from "@mui/x-charts/colorPalettes";
import { useTheme } from "@mui/material/styles";

export default function PieChartComponent() {
  const theme = useTheme();
  const palette = rainbowSurgePalette(theme.palette.mode);
  const data1 = [
    { label: "A", value: 400 },
    { label: "B", value: 300 },
    { label: "C", value: 300 },
  ];

  const data2 = [{ value: 400 }, { value: 300 }, { value: 300 }];

  const settings = {
    series: [
      {
        // id: "inner",
        innerRadius: 0,
        outerRadius: 70,
        data: data1,
        highlightScope: { fade: "global", highlight: "item" },
      },
      {
        id: "outer",
        innerRadius: 80,
        outerRadius: 81,
        data: data2,
        highlightScope: { fade: "global", highlight: "item" },
      },
    ],
    height: 300,
    hideLegend: false,
  };

  return (
    <PieChart
      {...settings}
      sx={{
        [`.${pieClasses.series}[data-series="outer"] .${pieArcClasses.root}`]: {
          opacity: 0.8,
        },
      }}
    />
  );
}
