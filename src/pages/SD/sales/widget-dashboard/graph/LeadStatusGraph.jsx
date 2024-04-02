import dynamic from "next/dynamic";
import React, { useState } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const leadStatuscolors = ["#DF146A"];

const LeadStatusGraph = () => {
  const [series] = useState([{  data: [300, 300, 400, 200, 200,] }]);
  const [options] = useState({
    chart: {
      height: 400,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: leadStatuscolors,
    plotOptions: {
      bar: {
        columnWidth: "50%",
        distributed: true,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      title: {
        text: 'Number of Pipelines',
        padding:10
      },
     
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Total Leads", " Received"],
        ["Leads In", "Negotiation"],
        ["Closed Won"],
        ["Lost"],
        ["Hold"],
      ],
      
     

      labels: {
        style: {
          colors: "black",
          fontSize: "12px",
        },
      },
    },
  });

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default LeadStatusGraph;
