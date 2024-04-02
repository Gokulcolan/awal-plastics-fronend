import dynamic from "next/dynamic";
import React, { useState } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const ActiveProjectGraph = () => {
  const [chartData, setChartData] = React.useState({
    series: [
      {
        name: "Q1 Budget",
        group: "budget",
        data: [8, 3, 2, 4, 4, 4, 5, 2, 4, 3, 4],
      },
      {
        name: "Q1 Actual",
        group: "budget",
        data: [3, 4, 2, 5, 6, 4, 5, 3, 2, 3, 3, 3],
      },
      // {
      //   name: "Q1 Actual",
      //   group: "actual",
      //   data: [4, 5, 2, 3, 3, 3, 2, 3, 2, 1, 3, 4],
      // },
    ],
    options: {
      chart: {
        type: "bar",
        height: 250,
        stacked: true,
      },
      stroke: {
        width: 1,
        colors: ["transparent"],
      },
      //   dataLabels: {
      //     formatter: () => {
      //       return 12;
      //     },
      //   },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        categories: [
          "Jan ...",
          "Feb ...",
          "Mar ...",
          "Apr ...",
          "May ...",
          "Jun ...",
          "Jul ...",
          "Aug ...",
          "Sep ...",
          "Oct ...",
          "Nov ...",
          "Dec ...",
        ],
      },
      fill: {
        opacity: 1,
      },
      colors: [
        "#8C8C8C",
        "#006AAF",
        "#0A2472",
        // "#008FFB",
        // "#80f1cb",
        // "#00E396",
      ],
      //   yaxis: {
      //     labels: {
      //       formatter: () => {
      //         return 12;
      //       },
      //     },
      //   },
      //   legend: {
      //     position: "top",
      //     horizontalAlign: "left",
      //   },
    },
  });
  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default ActiveProjectGraph;
