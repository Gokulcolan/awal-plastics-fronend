import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import "./kpisDashboardStyles.scss";
import ActualSales from "./charts/actualSales";
import SalesByRegion from "./charts/salesByRegion";
import SalesByChannel from "./charts/salesByChannel";
import SalesByProduct from "./charts/salesByProduct";
import InventoryDateOutstanding from "./charts/inventoryDateOutstanding";
import ReceivableDateOutstanding from "./charts/receivableDateOutstanding";
import SalesGrowth from "./charts/salesGrowth";
import NavLayout from "@/layout/nav";
import PrimaryLayout from "@/layout/primary";
import { primarySideBarData } from "@/utils/mainData";

function index() {
  const kpisCardData = [
    {
      percentage: "43%",
      salesNo: "16,461",
      sales: "Sales",
    },
    {
      percentage: "",
      salesNo: "15,645",
      sales: "Sales Target",
    },
    {
      percentage: "",
      salesNo: "16,461",
      sales: "Target Acheivement",
    },
    {
      percentage: "",
      salesNo: "11,264",
      sales: "Sales Last Year",
    },
    {
      percentage: "",
      salesNo: "5,264",
      sales: "Gross Profit",
    },
    {
      percentage: "",
      salesNo: "36%",
      sales: "Gross Profit Margin",
    },
  ];
  return (
    <NavLayout>
      <PrimaryLayout dropdown={primarySideBarData} heading={"My dashboard"}>
        <div className="kpi-dashboard-container">
          <div className="card-whole-container">
            {kpisCardData.map((data, i) => (
              <div
                key={i}
                className="card-container"
                style={{
                  backgroundColor:
                    data?.sales === "Sales"
                      ? "rgba(255, 21, 64, 1)"
                      : data?.sales === "Sales Target"
                      ? "rgba(97, 80, 225, 1)"
                      : data?.sales === "Target Acheivement"
                      ? "rgba(10, 36, 114, 1)"
                      : data?.sales === "Sales Last Year"
                      ? "rgba(0, 143, 88, 1)"
                      : data?.sales === "Gross Profit"
                      ? "rgba(255, 189, 21, 1)"
                      : data?.sales === "Gross Profit Margin"
                      ? "rgba(20, 65, 223, 1)"
                      : "",
                }}
              >
                <div className="card-percent-container">
                  <p className="card-percent">
                    {data?.percentage} &nbsp;
                    {data?.percentage !== "" && (
                      <IoArrowForwardCircleOutline className="card-percent-arrow-icon" />
                    )}
                  </p>
                </div>

                <div className="sales-no-container">
                  <p className="slaes-no">{data?.salesNo}</p>
                </div>

                <div className="slaes-container">
                  <p className="sales">{data?.sales}</p>
                </div>
                <div></div>
              </div>
            ))}
          </div>
          <div className="chart-main-container">
            <div className="chart-row-container">
              <div className="first-chart-container">
                <SalesByProduct />
              </div>

              <div className="second-chart-container">
                <ActualSales />
              </div>
            </div>

            <div className="chart-row-container">
              <div className="first-chart-container">
                <SalesByRegion />
              </div>

              <div
                className="second-chart-container"
                style={{ border: "none" }}
              >
                <div
                  className="date-outstanding-container"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "5px",
                  }}
                >
                  <div
                    className="inventory-date-outstanding-container"
                    style={{ width: "49%" }}
                  >
                    <InventoryDateOutstanding />
                  </div>
                  <div
                    className="receivable-date-outstanding-container"
                    style={{ width: "49%" }}
                  >
                    <ReceivableDateOutstanding />
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-row-container">
              <div className="first-chart-container">
                <SalesByChannel />
              </div>

              <div className="second-chart-container">
                <SalesGrowth />
              </div>
            </div>
          </div>
        </div>
      </PrimaryLayout>
    </NavLayout>
  );
}

export default index;
