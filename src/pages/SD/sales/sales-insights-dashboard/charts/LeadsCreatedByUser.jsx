import React, { useState, useEffect } from "react";
import { TbCurrentLocation } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";


const LeadsCreatedByUser = () => {
    const [ChartComponent, setChartComponent] = useState(null);

    useEffect(() => {
        import("react-apexcharts").then((apexChartsModule) => {
            setChartComponent(apexChartsModule);
        });
    }, []);

    const barChartData = [
        {
            data: [420, 370, 390, 260, 330, 210, 180, 260, 310],
        },
    ];

    const barChartOptions = {
        chart: {
            type: 'bar',
            background: '#fff',
            parentHeightOffset: 15,

        },
        colors: ['rgba(255, 21, 64, 1)', 'rgba(43, 116, 218, 1)'],
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },

        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
        },
        xaxis: {
            title:{
                text:'Number of leads created by users'
            },
            labels: {
                show: true,
                style: {
                    colors: [],
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 200,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },

            categories: ['Joseph', 'Bethania', 'Charles', 'Jhon', 'Thomas', 'Robert', 'William', 'David', 'Paul'],
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
                        <h2>Leads Created By Users</h2></div>
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

export default LeadsCreatedByUser


