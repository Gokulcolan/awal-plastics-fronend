import React, { useState, useEffect } from "react";

const ReceivableDateOutstanding = () => {
  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((apexChartsModule) => {
      setChartComponent(apexChartsModule);
    });
  }, []);

  const chartData = [20, 35, 50, 60];

  const chartOptions = {
    chart: {
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
            // total: {
            //   showAlways: true,
            //   show: true
            // }
          },
        },
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,
      },
      stroke: {
        color: "transparent",
      },
    },
    colors: ["#FFD0A5", "#0A94FF", "#6150E1", "#FF1540"],
    grid: {
      padding: {
        bottom: -80,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
    legend: {
      show: false,
    },
    fill: {
      type: "gradient",
    },
    tooltip: {
      enabled: false,
    },
    annotations: {
      position: "back",
      yaxis: [
        {
          y: 0,
          label: {
            // text: "42 Days",
            total: {
              style: {
                fontSize: "20px",
                color: "#000",
                label: "Days",
              },
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="chart-container" style={{ width: "100%" }}>
        <div className="chart-heading">
          <h2>Receivable Date Outstanding</h2>
        </div>
        <div id="chart" style={{ position: "relative" , marginTop: "-10px", background:'white'}}>
          {ChartComponent && (
            <ChartComponent.default
              options={chartOptions}
              series={chartData}
              type="donut"
              width="100%"
              height="280"
            />
          )}
          <div
            style={{
              position: "absolute",
              bottom: "50px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <p
              className="bargraph-target-line"
              style={{
                textAlign: "center",
                fontSize: "36px",
              }}
            >
              32
            </p>

            <p
              className="bargraph-target-line"
              style={{
                textAlign: "center",
                fontSize: "19px",
              }}
            >
              Days
            </p>
          </div>

          <div
            className="bargraph-start"
            style={{
              position: "absolute",
              bottom: "37px",
              left: "15%",
              // transform: "translateX(-50%)",
            }}
          >
            <p className="">0 </p>
          </div>

          <div
            className="bargraph-start"
            style={{
              position: "absolute",
              bottom: "37px",
              right: "10%",
              // transform: "translateX(-50%)",
            }}
          >
            <p className="">180 </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              // marginTop: "-60px",
              // paddingBottom: "20px",
              marginRight: "-40px",
              width: "100%",
              fontSize: "13px",
              color: "darkgray",
            }}
          >
            <div>
              <p style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                Target : 33 Days
              </p>
            </div>

            <div>
              <p style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
                Last Year : 36 Days
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceivableDateOutstanding;
