import React from "react";
import dynamic from "next/dynamic";
import { Typography } from "@mui/material";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart = () => {
  const chartData = {
    options: {
      chart: {
        type: "line",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      colors: ["#dc60ef", "#423edc"],
      stroke: {
        width: 2, // Adjust the thickness of the line here
        curve: "smooth",
      },
    },
    series: [
      {
        name: "Series 1",
        data: [10, 20, 15, 25, 30, 28],
      },
      {
        name: "Series 2",
        data: [20, 30, 45, 30, 28],
      },
    ],
  };
  
  return (
    <div>
      <Typography className="cardTitles">Weekly Sales</Typography>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
       
      />
    </div>
  );
};

export default LineChart;
