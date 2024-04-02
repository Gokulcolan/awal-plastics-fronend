import React, { useState, useEffect } from "react";

function ActualSales() {
  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((apexChartsModule) => {
      setChartComponent(apexChartsModule);
    });
  }, []);

  const chartData = [
    {
      name: "Product 1",
      data: [500, 1000, 500, 2500, 1500, 2000, 500],
    },
    {
      name: "Product 2",
      data: [1000, 500, 1000, 500, 100, 500, 1000],
    },
    {
      name: "Product 3",
      data: [1500, 2000, 1500, 1000, 500, 1000, 1500],
    },
  ];

  const chartOptions = {
    chart: {
      // height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#0a2472", "#FF1540", "#6150e1"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "straight",
    },

    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        },
        
      },
      row: {
        colors: ["#fff"], 
      },
      
    },
    markers: {
      size: 5,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#78909C',
        height: 0,
        offsetX: 0,
        offsetY: 0
      },
    },
    yaxis: {
      min: 100,
      max: 2500,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "left",
      offsetX: 10,
      markers: {
        width: 30,
        height: 10,
        radius: 0,
      },
      itemMargin: {
        horizontal: 20,
        vertical: 0,
      },
    },
  };

  return (
    <>
      <div className="chart-container" style={{ width: "100%" }}>
        <div className="chart-heading">
          <h2>Actual Sales Vs Target</h2>
        </div>
        <div style={{ width: "100%",  backgroundColor: 'white' }}>
            {ChartComponent && (
              <ChartComponent.default
                options={chartOptions}
                series={chartData}
                type="line"
                width="100%"
                height="200"
              />
            )}
        </div>
      </div>
    </>
  );
}

export default ActualSales;
