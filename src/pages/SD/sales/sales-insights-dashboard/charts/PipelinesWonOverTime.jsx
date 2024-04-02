import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";

const PipelinesWonOverTime = () => {
  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((apexChartsModule) => {
      setChartComponent(apexChartsModule);
    });
  }, []);

  const barChartData = [
    {
      data: [878,578,500,34,890,458,658,870,878,979,978,984],
    },
  ];

  const barChartOptions = {
    chart: {
      type: 'bar',
      background: '#fff',
      parentHeightOffset: 0

    },
    colors: ['#008f58'],
    plotOptions: {
      bar: {
        columnWidth: '40%',
        distributed: true,
        dataLabels: {
          position: 'top', // top, center, bottom
        },

      }
    },

    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: '10px',
        colors: ["#304758"]
      },
      formatter: (val) => {
        
        return val + 'K'
      }
    },
    legend: {
      show: false,
    },
    xaxis: {

      labels: {
        show: true,
        style: {
          colors: [],
          fontSize: '9px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        },
        offsetY: -6,
      },
      

      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      axisTicks: {
        show: true,
        height: 0,
      },
    },
    yaxis: {
      title: {
        text: 'Pipelines Value'
      },
      
      labels: {
        show: true,
        formatter: (val) => {
          return val === 1000 ? val/1000 + 'M' : val + 'K'
        },
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
            colors: [],
            fontSize: '9px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 200,
            cssClass: 'apexcharts-yaxis-label',
        },
        offsetX: 10,
        offsetY: 0,
        rotate: 0,
    },
    axisBorder: {
        show: false,
    },
    },
    tooltip: {
      enabled: true
    },

  }
  return (
    <>
      <div className="chart-container">
        <div className="chart-heading">
          <div className="chart-heading-flex">
            <h2>Pipelines Won Over Time</h2>
          </div>
          <p>THIS YEAR <span style={{verticalAlign:'super'}}>.</span> Won,Lost</p>
          {/* <p>THIS YEAR | WON,LOST</p> */}
        </div>

        <div className="chart">
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

        <div className="chart-footer">
        <GoDotFill style={{color: '#008f58'}} /> &nbsp; Manually Created
        </div>

      </div>
    </>
  )
}

export default PipelinesWonOverTime










