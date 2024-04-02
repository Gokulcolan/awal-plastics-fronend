import React, { useState, useEffect } from "react";

function SalesGrowth() {
  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((apexChartsModule) => {
      setChartComponent(apexChartsModule);
    });
  }, []);

  const chartData = [
    {
      name: "Product 1",
      data: [5, 17, 20, -95, -26, -90],
    },
    {
      name: "Product 2",
      data: [-25, 22, -95, -28, 26, -60],
    },
    {
      name: "Product 3",
      data: [70, 70, -30, -35, 26, -18.1],
    },
  ];

  const chartOptions = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "70%",
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      min: -100,
      max: 100,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisTicks: {
        show: true,
        height: 0,
      },
    },
    colors: ["#1441df", "#ff1540", "#ffbd15"],

    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "left",

      offsetX: 10,
      offsetY: 0,

      markers: {
        width: 32,
        height: 10,
        radius: 0,
        offsetX: -10,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 25,
        vertical: 0,
      },
    },
  };

  return (
    <div className="chart-container" style={{ width: "100%" }}>
      <div className="chart-heading">
        <h2>Sales Growth</h2>
      </div>
      <div style={{ width: "100%",backgroundColor: 'white' }}>
          {ChartComponent && (
            <ChartComponent.default
              options={chartOptions}
              series={chartData}
              type="bar"
              width="100%"
              height="200"
            />
          )}
      </div>
    </div>
  );
}

export default SalesGrowth;
