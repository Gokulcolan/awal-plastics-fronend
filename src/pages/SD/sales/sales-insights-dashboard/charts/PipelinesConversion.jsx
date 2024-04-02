import React, { useState, useEffect } from "react";
import { LuCircleDollarSign } from "react-icons/lu";

const PipelinesConversion = () => {
  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((apexChartsModule) => {
      setChartComponent(apexChartsModule);
    });
  }, []);

  const barChartData = [
    {
      data: [2.9, 2.5, 2, 2.3, 2, 2.8],
    },
  ];

  const barChartOptions = {
    chart: {
      type: 'bar',
      background: '#fff',
      parentHeightOffset: 0

    },
    colors: ['#6150e1', '#ffbd15', '#79e150', '#e16f50', '#e150b3', '#0a2472'],
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
        fontSize: '12px',
        colors: ["#304758"]
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

      categories: ['Qualified', 'Contact Mode', 'Demo Scheduled', 'Proposal Made', 'Negotiation', 'Won'],
      axisTicks: {
        show: true,
        height: 0,
      },
    },
    yaxis: {
      title: {
        text: 'Number of Pipelines'
      },
      labels: {
        show: true,
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
            <LuCircleDollarSign style={{ fontSize: '18px' }} />
            <h2>Pipeline Conversion</h2>
          </div>
          <p>PIPELINE <span style={{verticalAlign:'super'}}>.</span> THIS YEAR <span style={{verticalAlign:'super'}}>.</span> Won,Lost</p>
          {/* <p>PIPELINE | THIS YEAR | WON.LOST</p> */}
        </div>
        <div className="chart-heading">
          <h5 style={{fontSize:'11px'}}>Win rate is 67%</h5>
        </div>

        <div className="chart" style={{background:'white'}}>
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
  )
}

export default PipelinesConversion







