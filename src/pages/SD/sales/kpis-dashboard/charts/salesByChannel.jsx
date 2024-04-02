import React, { useState, useEffect } from "react";

function SalesByChannel() {
  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((apexChartsModule) => {
      setChartComponent(apexChartsModule);
    });
  }, []);

  const chartData = [25, 20, 10, 22, 35];

  const chartOptions = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF1540", "#6150E1", "#0A2472", "#FFBD15", "#0A94FF"],

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],

    labels: [],
    legend: {
      show: true,
      position: "right",
      offsetX: 0,
      offsetY: 0,

      customLegendItems: [
        "Online (823,5%)",
        "Distributer (5,761,35%)",
        "Dealer (4,115,25%)",
        "Retailer (3,292,20%)",
        "Corporate (2,469,15%)",
      ],
      itemMargin: {
        horizontal: 10,
        vertical: 7,
      },
    },
    fill: {
      // type: "gradient",
    },
    tooltip: {
      enabled: false,
    },
    annotations: {
      position: "front",
      yaxis: [
        {
          y: -40,
          borderColor: "transparent",
          label: {
            text: "0",
            style: {
              fontSize: "20px",
              color: "#000",
            },
          },
        },
      ],
    },

    tooltip: {
      custom: ({ series, seriesIndex, w }) => {
        if (seriesIndex === 0) {
          return '<div class="custom-tooltip">Online</div>';
        } else if (seriesIndex === 1) {
          return '<div class="custom-tooltip">Distributer</div>';
        } else if (seriesIndex === 2) {
          return '<div class="custom-tooltip">Dealer</div>';
        } else if (seriesIndex === 3) {
          return '<div class="custom-tooltip">Retailer</div>';
        } else if (seriesIndex === 4) {
          return '<div class="custom-tooltip">Corporate</div>';
        } else {
          return "";
        }
      },
    },
  };
  return (
    <>
      <div className="chart-container">
        <div className="chart-heading">
          <h2>Sales By Channel</h2>
        </div>
        <div id="chart salesChart" style={{backgroundColor: 'white'}}>
            {ChartComponent && (
              <ChartComponent.default
                options={chartOptions}
                series={chartData}
                type="donut"
                height="210"
                style={{ margin: "auto" }}
              />
            )}
        </div>
      </div>
    </>
  );
}

export default SalesByChannel;
