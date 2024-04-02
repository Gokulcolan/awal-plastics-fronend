import React, { useState, useEffect } from "react";

function SalesByRegion() {
  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((apexChartsModule) => {
      setChartComponent(apexChartsModule);
    });
  }, []);

  const chartData = [
    {
      name:'Product 1',
      data: [83, 22, 42, 10]
    }, {
      name: 'Product 2',
      data: [77, 45, 35, 99]
    }
  ];

  const chartOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '50%',
        hideZeroBarsWhenGrouped: true,

      }
    },
    colors: ['#ffa5cb', '#ff1540'],

    dataLabels: {
      enabled: false,

    },
    stroke: {
      show: true,
      width: 1,
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
        }
      },
    },

    xaxis: {
      categories: ["East", "West", "South", "North"],
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#78909C',
        height: 0,
      },

    },

    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'between',
      
      offsetX: -10,
      offsetY: 0,
      
      markers: {
        width: 32,
        height: 10,
        radius: 0,
        offsetX: -10,
        offsetY: 0
      },
      itemMargin: {
        horizontal: 45,
        vertical: 0
      },
      
    }



  };


  return (
    <div className="chart-container" style={{ width: "100%" }}>
      <div className="chart-heading">
        <h2>Sales (Amount) By Region</h2>
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
  )
}

export default SalesByRegion