import React, { useState, useEffect } from "react";

function SalesByProduct() {
  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((apexChartsModule) => {
      setChartComponent(apexChartsModule);
    });
  }, []);

  const barChartData = [
    {
      data: [5500, 4000, 4700, 5500, 6500],
    },
  ];

  const barChartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        // fontFamily: undefined,
      },
      onDatasetHover: {
        style: {
          fontSize: "12px",
          // fontFamily: undefined,
        },
      },
      theme: "dark",
    },
    xaxis: {
      categories: [
        "Product 1",
        "Product 2",
        "Product 3",
        "Product 4",
        "Product 5",
      ],
      show: false,
      labels: {
        show: true,
        style: {
          colors: "black",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      min: 0,
      max: 7000,
      tickAmount: 7,
      color: "black",
      labels: {
        show: true,
        style: {
          colors: "black",
          fontSize: "12px",
        },
      },
    },
    grid: {
      show: true,
      //   strokeDashArray: 5,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        // shadeIntensity: 1,
        // opacityFrom: 0.7,
        // opacityTo: 0.9,
        colorStops: [
          [
            {
              offset: 0,
              color: "#0A2472",
              //   opacity: 1,
            },
            {
              offset: 100,
              color: "#0A2472",
              //   opacity: 0.28,
            },
          ],
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        columnWidth: "30px",
      },
    },
  };

  return (
    <>
      <div className="chart-container">
        <div className="chart-heading">
          <h2>Sales (Amount) By Products / Category</h2>
        </div>
        <div className="chart" style={{backgroundColor: 'white'}}>
          {ChartComponent && (
            <ChartComponent.default
              options={barChartOptions}
              series={barChartData}
              type="bar"
            //   width="500"
              height="200"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default SalesByProduct;
