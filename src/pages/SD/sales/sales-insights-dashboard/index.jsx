import React from "react";
// import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import "./salesInsightDashboardStyles.scss";
import NavLayout from "@/layout/nav";
import PrimaryLayout from "@/layout/primary";
import { primarySideBarData } from "@/utils/mainData";
import LeadsCreatedByUser from "./charts/LeadsCreatedByUser";
import LeadsConversionBySource from "./charts/LeadsConversionBySource";
import PipelinesConversion from "./charts/PipelinesConversion";
import AverageValueOfWonPipelines from "./charts/AverageValueOfWonPipelines";
import PipelineDuration from "./charts/PipelineDuration";
import PipelinesWonOverTime from "./charts/PipelinesWonOverTime";
import PipelinesProgress from "./charts/PipelinesProgress";
import ActivitiesCompletedandPlanned from "./charts/ActivitiesCompletedandPlanned";
import PipelinesLostByReasons from "./charts/PipelinesLostByReasons";
import RevenueForecast from "./charts/RevenueForecast";

const index = () => {
  return (
    <NavLayout>
      <PrimaryLayout dropdown={primarySideBarData} heading={"My dashboard"}>
        <div className="kpi-dashboard-container">
          <div className="chart-main-container">
            <div className="chart-row-container">
              <div className="first-chart-container">
                <LeadsCreatedByUser />
              </div>

              <div className="second-chart-container">
                <LeadsConversionBySource />
              </div>
            </div>

            <div className="chart-row-container">
              <div className="first-chart-container">
                <PipelinesConversion />
              </div>

              <div className="second-chart-container">
                <div
                  className="date-outstanding-container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "5px",
                  }}
                >
                  <div
                    className="inventory-date-outstanding-container"
                    style={{ width: "49%" }}
                  >
                    <AverageValueOfWonPipelines />
                  </div>
                  <div
                    className="receivable-date-outstanding-container"
                    style={{ width: "49%" }}
                  >
                    <PipelineDuration />
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-row-container">
              <div className="first-chart-container">
                <PipelinesWonOverTime />
              </div>

              <div className="second-chart-container">
                <PipelinesProgress />
              </div>
            </div>

            <div className="chart-row-container">
              <div className="second-chart-container">
                <div
                  className="date-outstanding-container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "5px",
                  }}
                >
                  <div
                    className="inventory-date-outstanding-container"
                    style={{ width: "49%" }}
                  >
                    <ActivitiesCompletedandPlanned />
                  </div>
                  <div
                    className="receivable-date-outstanding-container"
                    style={{ width: "49%" }}
                  >
                    <PipelinesLostByReasons />
                  </div>
                </div>
              </div>

              <div className="first-chart-container">
                <RevenueForecast />
              </div>
            </div>
          </div>
        </div>
      </PrimaryLayout>
    </NavLayout>
  );
};

export default index;
