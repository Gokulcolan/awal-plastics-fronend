import React, { useState, useEffect } from "react";
// import acapSID from '../Assests/acapSID.png'
import { GoDotFill } from "react-icons/go";
import { RiRadio2Line } from "react-icons/ri";

const ActivitiesCompletedandPlanned = () => {
  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((apexChartsModule) => {
        setChartComponent(apexChartsModule);
    });
}, []);

  const barChartData = [
    {
      data: [3],
    },
    {
      data: [2,2],
    },
  ];

  const barChartOptions = {
    chart: {
      type: 'bar',
      background: '#fff',
      parentHeightOffset: 15,
      stacked:true

    },
    colors: ['#ff1540','#ff8a9f'],
    plotOptions: {
      bar: {
        columnWidth: '80%',
        distributed: false,
        

      }
    },

    stroke:{
      show: true,
      width:1,
      colors:['#fff','#fff','#fff'],
    },

    dataLabels: {
      enabled: true,
      style: {
        fontSize: '10px',
      },
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

      categories: ["To do", "Done"],
      axisTicks: {
        show: true,
        height: 0,
      },
    },
    yaxis: {
      title: {
        text: 'Number Of Activities'
      },
      min:0,
      max:8,
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
          {/* <img src={acapSID} /> */}
          <RiRadio2Line style={{ fontSize: '18px' }} />
          <h2>Activities Completed and Planned</h2>
        </div>
        <p>THIS MONTH</p>
        {/* <p>THIS YEAR | PIPELINE</p> */}
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

      <div className="chart-footer">
                <GoDotFill style={{color: '#ff1540'}} /> &nbsp;To do &nbsp;
                <GoDotFill style={{color: '#ff8a9f'}} /> &nbsp;Done &nbsp;
                </div>

    </div>
  </>
  )
}

export default ActivitiesCompletedandPlanned

