import React, { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";

const RevenueForecast = () => {

  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((apexChartsModule) => {
      setChartComponent(apexChartsModule);
    });
  }, []);



  const barChartData = [
    {
      data: [720, 720, 720, 720, 720, 720, 720, 720, 720, 720, 720, 720],
    },
    {
      data: [400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400],
    },

  ];


  const barChartOptions = {
    chart: {
      type: 'bar',
      background: '#fff',
      parentHeightOffset: 15,
      stacked: true

    },
    colors: ['#ffbd15', '#f7aebf'],
    plotOptions: {
      bar: {
        columnWidth: '60%',
        distributed: false,


      }
    },

    stroke: {
      show: true,
      width: 1,
      colors: ['#fff', '#fff', '#fff'],
    },

    dataLabels: {
      enabled: true,
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

      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      axisTicks: {
        show: true,
        height: 0,
      },
    },
    yaxis: {
      title: {
        text: 'Weighed Value'
      },
      labels: {
        show: true,
        formatter: (val) => {

          return val === 1200 ? val / 1000 + 'M' : val + 'K'
        },
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: [],
          fontSize: '10px',
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
            <h2>Revenue Forecast</h2>
          </div>
          <p>THIS YEAR <span style={{ verticalAlign: 'super' }}>.</span> Won,Open</p>
          {/* <p>THIS YEAR | PIPELINE</p> */}
        </div>

        <div className="chart" style={{background:'white'}}>
          {ChartComponent && (
            <ChartComponent.default
              options={barChartOptions}
              series={barChartData}
              type="bar"
              //   width="500"
              height="210"
            />
          )}
        </div>

        <div className="chart-footer">
          <GoDotFill style={{ color: '#f7aebf' }} /> &nbsp;Open &nbsp;
          <GoDotFill style={{ color: '#ffbd15' }} /> &nbsp;Won &nbsp;
        </div>

      </div>
    </>
  )
}


export default RevenueForecast