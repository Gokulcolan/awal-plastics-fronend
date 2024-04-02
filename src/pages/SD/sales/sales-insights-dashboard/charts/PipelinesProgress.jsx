import React, { useState, useEffect } from "react";
import { LuCircleDollarSign } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";

const PipelinesProgress = () => {
  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((apexChartsModule) => {
      setChartComponent(apexChartsModule);
    });
  }, []);

  const barChartData = [
    {
      data: [5,5.2,3.5,2.8,4.5,5,8,6,7,6,6.5,7],
    },
    {
      data: [4.2,4.5,1 ,3.1 ,3.5 ,3.2 ,5 ,5.5 ,5 ,5 ,5.5 ,6],
    },
    {
      data: [4,6,3.2,2 ,4 ,4.5 ,6.5 ,6 ,6.2 ,5 , 5.5 , 6],
    },
  ];

  const barChartOptions = {
    chart: {
      type: 'bar',
      background: '#fff',
      parentHeightOffset: 0,
      stacked:true

    },
    colors: ['#0a2472','#1441df','#ffbd15'],
    plotOptions: {
      bar: {
        columnWidth: '60%',
        distributed: false,
        

      }
    },

    stroke:{
      show: true,
      width:1,
      colors:['#fff','#fff','#fff'],
    },

    dataLabels: {
      enabled: false,
      
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
        text: 'Number Of Pipelines'
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
          <h2>Pipelines Progress</h2>
        </div>
        <p>THIS YEAR <span style={{verticalAlign:'super'}}>.</span> PIPELINE</p>
        {/* <p>THIS YEAR | PIPELINE</p> */}
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
                <GoDotFill style={{color: '#0a2472'}} /> &nbsp;Qualified &nbsp;
                <GoDotFill style={{color: '#1441df'}} /> &nbsp;Contact Made &nbsp;
                <GoDotFill style={{color: '#ffbd15'}} /> &nbsp;Demo Scheduled &nbsp;
                </div>

    </div>
  </>
  )
}

export default PipelinesProgress