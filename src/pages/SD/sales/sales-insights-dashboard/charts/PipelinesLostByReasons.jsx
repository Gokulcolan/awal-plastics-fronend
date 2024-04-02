import React, { useState, useEffect } from "react";
import { TbCurrentLocation } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";

const PipelinesLostByReasons = () => {

  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
      import("react-apexcharts").then((apexChartsModule) => {
          setChartComponent(apexChartsModule);
      });
  }, []);

  const barChartData = [360]

const barChartOptions =   {
  chart: {
    type: 'pie',
    background: 'white'
  },
  plotOptions: {
    pie: {
      startAngle: 90,
      expandOnClick: true,
    dataLabels: {
        offset: -30,
    },
    },
  },
  title: {
    text: 'Number of Pipelines',
    align: 'center',
    margin: 0,
    style: {
      fontSize:  '10px',
},
  },
  colors:['#004b77'],
  dataLabels: {
    enabled: true,
},
legend: {
  show:false,
},
}






  
  return (
    <>
    <div className="chart-container">
        <div className="chart-heading">
            <div className="chart-heading-flex">
                <h2>Pipelines Lost By Reasons</h2></div>
            <p>Lost <span style={{verticalAlign:'super'}}>.</span> THIS YEAR</p>
        </div>
        <div className="chart">
            {ChartComponent && (
                <ChartComponent.default
                    options={barChartOptions}
                    series={barChartData}
                    type="pie"
                    //   width="500"
                    height="220"
                />
            )}
        </div>
        <div className="chart-footer">
        <GoDotFill style={{color: '#004b77'}} /> &nbsp; Timings
        </div>
    </div>
</>
  )
}

export default PipelinesLostByReasons











