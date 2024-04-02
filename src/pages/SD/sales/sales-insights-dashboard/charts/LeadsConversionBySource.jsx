import React, { useState, useEffect } from "react";
import { TbCurrentLocation } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";

const LeadsConversionBySource = () => {
  const [ChartComponent, setChartComponent] = useState(null);

    useEffect(() => {
        import("react-apexcharts").then((apexChartsModule) => {
            setChartComponent(apexChartsModule);
        });
    }, []);

    const barChartData = [
      {
          data: [400,370,300,320,220,150,190],
      },
  ];

  const barChartOptions = {
      chart: {
          type: 'bar',
          background: '#fff',
          parentHeightOffset: 15,

      },
      colors: ['#0093ad', '#2e0a72', '#ffbd15', '#10b707', '#0f3bc0','#ff1540','#6150e1'],
      plotOptions: {
          bar: {
              columnWidth: '45%',
              distributed: true,
          }
      },

      dataLabels: {
          enabled: false,
      },
      legend: {
          show: false,
      },
      xaxis: {
          title:{
              text:'Number of leads created by source'
          },
          labels: {
              show: true,
              style: {
                  colors: [],
                  fontSize: '12px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 100,
                  cssClass: 'apexcharts-xaxis-label',
              },
          },

          categories: ['Whatsapp','Instagram','Jot Form','Email','Phone/Call','Walkin','Fax'],
          axisTicks: {
              show: true,
              height: 0,
          },
      },
      tooltip :{
          enabled: true
      },
      
  }

  return (
    <>
    <div className="chart-container">
        <div className="chart-heading">
            <div className="chart-heading-flex">
                <TbCurrentLocation style={{ fontSize: '18px' }} />
                <h2>Leads Conversion By Source</h2></div>
            <p>THIS YEAR</p>
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
        <GoDotFill style={{color: '#0a2472'}} /> &nbsp; Manually Created
        </div>
    </div>
</>
  )
}

export default LeadsConversionBySource







