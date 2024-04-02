import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChart = ({ graphvalue, graphcolor }) => {
  const series = [
    {
      name: "Series 1",
      data: graphvalue,
      //   data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: "hollow",
    },
    tooltip: {
      enabled: false,
    },
    fill: {
      colors: graphcolor, // Set the color of the area chart
      type: "solid", // Set type to 'solid' for solid color
      
    },
    stroke: {
      show: false, // Hide the stroke (border) of the area chart
      width: 0,
      curve: "smooth",
    },
    grid: {
      show: false, // Hide the horizontal and vertical grid lines
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="area"  />
    </div>
  );
};

export default AreaChart;
