"use client";
import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import callimg from "@/assets/image/widget dashboard activities/call icon.png";
import deadlineimg from "@/assets/image/widget dashboard activities/deadline icon.png";
import emailimg from "@/assets/image/widget dashboard activities/email icon.png";
import mettingimg from "@/assets/image/widget dashboard activities/meeting icon.png";
import taskimg from "@/assets/image/widget dashboard activities/task icon.png";
import Image from "next/image";
import dynamic from "next/dynamic";
import LeadStatusGraph from "./graph/LeadStatusGraph";
import ActiveProjectGraph from "./graph/ActiveProjectGraph";
import priceTag from "@/assets/icons/ri_price-tag-2-line.svg";
import topArrow from "@/assets/icons/arrow-top-right.svg";
import rightArrow from "@/assets/icons/right-arrow-green.svg";
import rightArrowViolet from "@/assets/icons/arrow-right-violet.svg";
import "./widgetDashboardStyle.scss";
import CommonLayout from "@/layout/commonLayout";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const colors = ["#FFBD15"];

const WidgetDashboard = () => {
  const [series] = useState([{ data: [400, 250, 325] }]);
  const [options] = useState({
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    colors: colors,
    plotOptions: {
      bar: {
        columnWidth: "50%",
        distributed: true,
        horizontal: false,
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [["Goal"], ["N/A"], ["Achieved"]],
      labels: {
        style: {
          colors: "black",
          fontSize: "12px",
        },
      },
    },
  });

  const mainCardData = [
    {
      icon: true,
      no: "8,745,213",
      percentage: "2.21%",
      txt: "Revenue Of The Year 2023",
      style: "#0034D0 100%,#0A2472 100%,#21232C 12%",
    },
    {
      icon: true,
      no: "9,145,231",
      percentage: "3.46%",
      txt: "Expected Revenue",
      style: "#F5375A 100%,#FF002E 100%,#21232C 12%",
    },
    {
      icon: true,
      no: "545,231",
      percentage: "6.86%",
      txt: "Revenue Of The Month",
      style: "#6150E1 100%,#3D23FF 100%,#21232C 12%",
    },
  ];

  const subCardData = [
    {
      no: "664",
      txt: "Total Pipelines For The Month",
      style: "#AB0F6D",
    },
    {
      no: "496",
      txt: "Pipelines In Pipeline",
      style: "#008F58",
    },
    {
      no: "198",
      txt: "Pipelines Won",
      style: "#FFBD15",
    },
    {
      no: "220",
      txt: "Lost Pipelines 21",
      style: "#E6332A",
    },
  ];

  const pipelineCardData = [
    {
      head: "Awal Plastic Lead",
      client: "John Doe",
      no: "34,600",
    },
    {
      head: "Awal Plastic Lead",
      client: "John Doe",
      no: "15,498",
    },
    {
      head: "Awal Plastic Lead",
      client: "John Doe",
      no: "246,498",
    },
    {
      head: "Awal Plastic Lead",
      client: "John Doe",
      no: "36,498",
    },
    {
      head: "Awal Plastic Lead",
      client: "John Doe",
      no: " 78,691",
    },
    {
      head: "Awal Plastic Lead",
      client: "John Doe",
      no: " 94,865",
    },
  ];
  const viewLeadsTableData = [
    {
      title: "Awal Plastics",
      activity: "Today",
      label: "Cold",
      labelColor: "#6150E1",
      source: "Manually Created",
      lead: "Jan 16",
    },
    {
      title: "ABCD Lead",
      activity: "Today",
      label: "Hot",
      labelColor: "#C1121F",
      source: "Manually Created",
      lead: "Jan 16",
    },
    {
      title: "Awal Plastics",
      activity: "Today",
      label: "Cold",
      labelColor: "#6150E1",
      source: "Manually Created",
      lead: "Jan 16",
    },
    {
      title: "Awal Plastics",
      activity: "Today",
      label: "Warm",
      labelColor: "#EA7321",
      source: "Manually Created",
      lead: "Jan 16",
    },
    {
      title: "Awal Plastics",
      activity: "Today",
      label: "Cold",
      labelColor: "#6150E1",
      source: "Manually Created",
      lead: "Jan 16",
    },
    {
      title: "Awal Plastics",
      activity: "today",
      label: "Cold",
      labelColor: "#C1121F",
      source: "Manually Created",
      lead: "Jan 16",
    },
  ];

  useEffect(() => {
    let elemHeight = document.querySelector(
      ".main-card-container"
    )?.offsetHeight;
    let subcards = document.querySelectorAll(".subcard");
    subcards.forEach((subcard) => {
      subcard.style.height = elemHeight + "px";
    });
  }, []);
  const activeStatusData = [
    {
      id: "1",
      leadNo: "200167",
      status: "Status",
      statusType: [
        "PPJO",
        " PIS",
        "Sales Order",
        " Production",
        " QC",
        " Packaging",
        " Installation",
        "Payments",
      ],
      activeStatus: "PPJO",
    },
    {
      id: "2",
      leadNo: "200167",
      status: "Status",
      statusType: [
        "PPJO",
        " PIS",
        "Sales Order",
        " Production",
        " QC",
        " Packaging",
        " Installation",
        "Payments",
      ],
      activeStatus: "Sales Order",
    },
  ];

  return (
    <div className="widget-dashboard">
      <div className="dashboard-top-container">
        <div className="main-cards-wrapper">
          {mainCardData?.map((e, i) => {
            return (
              <div
                className="main-card-container"
                key={i}
                style={{
                  backgroundImage: `linear-gradient(to right,${e?.style})`,
                }}
              >
                <div className="row-1">
                  <div className="icon-wrapper">
                    {e?.icon && (
                      <Image src={priceTag} alt="" className="tag-img" />
                    )}
                  </div>

                  <p>{e?.no}</p>
                </div>

                <div className="row-2">
                  <div className="percentage-wrapper">
                    <Image src={topArrow} alt="" />
                    {e?.percentage}
                  </div>

                  <div className="description-wrapper">
                    <p>{e?.txt} (BHD)</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sub-cards-container">
          <div className="sub-cards-wrapper">
            {subCardData?.map((e, i) => {
              return (
                <div
                  className="subcard"
                  key={i}
                  style={{ backgroundColor: e?.style }}
                >
                  <p>{e?.no}</p>
                  <p>{e?.txt}</p>
                </div>
              );
            })}

            <div className="subcard" style={{ backgroundColor: "#DED6FF" }}>
              <p>+</p>
              <p>Widget</p>
            </div>
          </div>

          <div className="table-wrapper">
            <div className="top-pipelines-container">
              <div className="header-container">
                <h3>Top Pipelines</h3>
              </div>

              <div className="top-pipelines-cards-wrapper">
                {pipelineCardData.map((e, i) => {
                  return (
                    <div className="top-pipelines-card" key={i}>
                      <div className="pipeline-card-data">
                        <h5>{e?.head}</h5>
                        <p>{e?.client}</p>
                        <div className="card-footer">
                          <span>H</span>
                          <p style={{ fontWeight: 900 }}>BHD</p>

                          <p>{e?.no}</p>
                        </div>
                      </div>

                      <button className="arrow-right">
                        <Image src={rightArrow} alt="" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="view-leads-container">
              <div className="header-container">
                <h3>View Leads</h3>
              </div>

              <div className="leads-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Next Activity</th>
                      <th>Labels</th>
                      <th>Source</th>
                      <th>Lead Created</th>
                    </tr>
                  </thead>

                  <tbody>
                    {viewLeadsTableData.map((e, i) => {
                      return (
                        <tr key={i}>
                          <td>{e?.title}</td>
                          <td>{e?.activity}</td>
                          <td>
                            <span style={{ backgroundColor: e?.labelColor }}>
                              {e?.label}
                            </span>
                          </td>
                          <td>{e?.source}</td>
                          <td>{e?.lead}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="view-leads-footer">
                <p>Show More</p>
              </div>
            </div>
            <div className="priorities-container">
              <div className="header-container">
                <h3>Priorities today</h3>
              </div>
              <div className="priorityDivSub">
                <p>
                  Lead 200267{" "}
                  <button>
                    <Image src={rightArrowViolet} alt="" />
                  </button>
                </p>
                <p>
                  Lead 200267{" "}
                  <button>
                    <Image src={rightArrowViolet} alt="" />
                  </button>
                </p>{" "}
                <p>
                  Lead 200267{" "}
                  <button>
                    <Image src={rightArrowViolet} alt="" />
                  </button>
                </p>{" "}
                <p>
                  Lead 200267{" "}
                  <button>
                    <Image src={rightArrowViolet} alt="" />
                  </button>
                </p>{" "}
                <p>
                  Lead 200267{" "}
                  <button>
                    <Image src={rightArrowViolet} alt="" />
                  </button>
                </p>{" "}
                <p>
                  Lead 200267{" "}
                  <button>
                    <Image src={rightArrowViolet} alt="" />
                  </button>
                </p>{" "}
                <p>
                  Lead 200267{" "}
                  <button>
                    <Image src={rightArrowViolet} alt="" />
                  </button>
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-middle-container">
        <div className="ppjo-pending-status awal-plastic-cards ">
          <h2>PPJO Pending Status</h2>
          <hr className="awal-common-border-line " />
          <table className="ppjo-pending-table">
            <thead>
              <tr>
                <th>Artwork</th>
                <th>AutoCAD</th>
                <th>Site Visit</th>
                <th>Sample</th>
                <th>Estimation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lead 200649</td>
                <td>Lead 200768</td>
                <td>Lead 200345</td>
                <td>Lead 200348</td>
                <td>Lead 200349</td>
              </tr>
              <tr>
                <td>Lead 200468</td>
                <td>Lead 200458</td>
                <td>Lead 200795</td>
                <td>Lead 200267</td>
                <td>Lead 200054</td>
              </tr>
              <tr>
                <td>Lead 200159</td>
                <td>Lead 200795</td>
                <td>Lead 200267</td>
                <td>Lead 200498</td>
                <td>Lead 200248</td>
              </tr>
              <tr>
                <td>Lead 200468</td>
                <td>Lead 200294</td>
                <td>Lead 200468</td>
                <td>Lead 200024</td>
                <td>Lead 200349</td>
              </tr>
              <tr>
                <td>Lead 200184</td>
                <td>Lead 200458</td>
                <td>Lead 200498</td>
                <td>Lead 200105</td>
                <td>Lead 200164</td>
              </tr>
              <tr>
                <td>Lead 2005679</td>
                <td>Lead 200789</td>
                <td>Lead 200768</td>
                <td>Lead 2001240</td>
                <td>Lead 200495</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="active-projects awal-plastic-cards">
          <h2>Active Projects</h2>
          <hr className="awal-common-border-line " />
          <div className="active-project-lead-container">
            {activeStatusData.map((e) => (
              <div className="active-project-leads" key={e.id}>
                <h3>Lead {e.leadNo}</h3>
                <div className="active-project-status">
                  <div>{e.status}</div>
                  {e.statusType.map((status, index) => (
                    <div
                      key={index}
                      className={e.activeStatus === status ? "active" : ""}
                    >
                      {status}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <a href="" className="show-more">
              Show More
            </a>
          </div>
        </div>
      </div>

      {/* mehran ui changes */}
      <div className="dashboard-bottom-container">
        <div className="widget-dasboard-grap-section">
          <div className="widget-graph-sections">
            <div className="graph-first-section">
              <div className="active-project-graph awal-plastic-cards">
                <div>
                  <p className="widget-dashboard-title">Active Projects</p>
                  <hr className="awal-common-border-line" />
                  <div id="chart">
                    <ActiveProjectGraph />
                  </div>
                </div>
              </div>

              <div className="activities-section awal-plastic-cards">
                <div>
                  <p className="widget-dashboard-title">Activities</p>
                  <hr className="awal-common-border-line" />
                  {/* from here */}
                  <div>
                    <ul className="activities-list">
                      <li
                        style={{
                          backgroundColor: "#FF1540",
                          color: "white",
                        }}
                      >
                        <div>
                          <Image src={callimg} alt="" />
                        </div>
                        <p>Call</p>
                      </li>
                      <li>
                        <div>
                          {" "}
                          <Image src={deadlineimg} alt="" />
                        </div>
                        <p> Meeting</p>
                      </li>
                      <li>
                        <div>
                          {" "}
                          <Image src={emailimg} alt="" />{" "}
                        </div>
                        <p> Task</p>
                      </li>
                      <li>
                        <div>
                          {" "}
                          <Image src={mettingimg} alt="" />
                        </div>
                        <p> Deadline</p>
                      </li>
                      <li>
                        <div>
                          {" "}
                          <Image src={taskimg} alt="" />
                        </div>
                        <p>E-Mail</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="project-earning-section awal-plastic-cards">
                <div>
                  <p className="widget-dashboard-title">Product Earnings</p>
                  <hr className="awal-common-border-line" />
                  <div className="product-earning-main">
                    <div className="product-earning-graph">
                      <PieChart
                        lineWidth={30}
                        startAngle={180}
                        paddingAngle={3}
                        animate={true}
                        data={[
                          { value: 4, color: "#008F58" },
                          { value: 4, color: "#6150E1" },
                          { value: 4, color: "#FF1540" },
                          { value: 4, color: "#0A2472" },
                        ]}
                        labelPosition={72}
                      />
                    </div>
                  </div>
                  <ul className="product-earning-list">
                    <li>
                      <div
                        style={{
                          height: "14px",
                          width: "14px",
                          backgroundColor: "#0A2472",
                        }}
                      ></div>
                      <p className="product-title"> Country Flags</p>
                    </li>
                    <li>
                      <div
                        style={{
                          height: "14px",
                          width: "14px",
                          backgroundColor: "#FF1540",
                        }}
                      ></div>
                      <p className="product-title"> Raw materials</p>
                    </li>
                    <li>
                      <div
                        style={{
                          height: "14px",
                          width: "14px",
                          backgroundColor: "#6150E1",
                        }}
                      ></div>
                      <p className="product-title"> Standard Safety signs</p>
                    </li>
                    <li>
                      <div
                        style={{
                          height: "14px",
                          width: "14px",
                          backgroundColor: "#008F58",
                        }}
                      ></div>
                      <p className="product-title">Acrylic Products</p>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="graph-second-section">
              <div className="lead-status-section awal-plastic-cards">
                <div>
                  <p className="widget-dashboard-title">Lead Status</p>
                  <hr className="awal-common-border-line" />
                  <div>
                    <LeadStatusGraph />
                  </div>
                </div>
              </div>
              <div className="forecast-month-section awal-plastic-cards">
                <div>
                  <p className="widget-dashboard-title">Forecast this Month</p>
                  <hr className="awal-common-border-line" />
                  <div id="chart">
                    <ReactApexChart
                      options={options}
                      series={series}
                      type="bar"
                      height={350}
                    />
                  </div>
                </div>
              </div>

              <div className="empty-sec"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ends here */}
    </div>
  );
};

WidgetDashboard.getLayout = (page) => <CommonLayout>{page}</CommonLayout>;
export default WidgetDashboard;
