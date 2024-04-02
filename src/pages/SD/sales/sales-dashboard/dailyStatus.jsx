import { Card, CardContent, Divider, Typography } from "@mui/material";
import "../sales-dashboard/salesDashboardStyle.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";
import PpjoStatus from "@/assets/icons/ppjo-status.svg";

import {
  invoceMonthly,
  invoceYearly,
  pipelineCard,
  ppjoDaily,
  ppjoMonthly,
  ppjoQuotationDaily,
  ppjoQuotationMonthly,
  ppjoQuotationYearly,
  ppjoYearly,
  salesCardDaily,
  salesCardMonthly,
  salesCardYearly,
  wipCardDaily,
  wipCardMonthly,
  wipCardYearly,
} from "./commonData";
import SummaryUpdate from "./summaryUpdate";
import Pipeline from "./pipeline";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useEffect, useState } from "react";

const DailyStatus = () => {
  const [currentView, setCurrentView] = useState("daily");
  const [ppjoData, setPpjoData] = useState([]);
  const [qutoData, setQutoData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [wipData, setWipData] = useState([]);
  const [pipelineData, setPipeLineData] = useState([]);

  useEffect(() => {
    fetchDataBasedOnView();
  }, [currentView]);

  const fetchDataBasedOnView = () => {
    if (currentView === "daily") {
      setPpjoData(ppjoDaily);
      setQutoData(ppjoQuotationDaily);
      setSalesData(salesCardDaily);
      setWipData(wipCardDaily);
      setPipeLineData(pipelineCard);
    } else if (currentView === "monthly") {
      setPpjoData(ppjoMonthly);
      setQutoData(ppjoQuotationMonthly);
      setSalesData(salesCardMonthly);
      setWipData(wipCardMonthly);
      setPipeLineData(invoceMonthly);
    } else if (currentView === "yearly") {
      setPpjoData(ppjoYearly);
      setQutoData(ppjoQuotationYearly);
      setSalesData(salesCardYearly);
      setWipData(wipCardYearly);
      setPipeLineData(invoceYearly);
    }
  };
  const handleNextClick = () => {
    const views = ["daily", "monthly", "yearly"];
    const currentIndex = views.indexOf(currentView);
    const nextIndex = (currentIndex + 1) % views.length;
    setCurrentView(views[nextIndex]);
  };
  return (
    <>
      <Card className="daily_main" sx={{ borderRadius: "20px" }}>
        <Card
          sx={{ borderRadius: "10px", boxShadow: "0px 4px 20px 0px #6150E11A" }}
          className="ppjo-card"
        >
          <CardContent className="ppjo-content">
            <div style={{ display: "flex", alignItems:"center", gap: "20px" }}>
              <Typography className="ppjo-typo" variant="h6">
                Daily Status
              </Typography>
              {/* <Typography className="ppjo-date" gutterBottom>
                12.02.2024
              </Typography> */}
            </div>

            <div className="daily_flexx">
              <div className="daily-one">
                <ArrowLeftIcon
                  sx={{ fontSize: "40px", cursor: "pointer" }}
                  onClick={handleNextClick}
                />
                <Typography className="ppjo-typo" variant="h6" gutterBottom>
                  {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
                </Typography>
                <ArrowRightIcon
                  sx={{ fontSize: "40px", cursor: "pointer" }}
                  onClick={handleNextClick}
                />
              </div>
              <div>
                <MoreHorizIcon
                  className="more"
                  sx={{ color: "black" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="pojo_quot_cards">
          <div className="daily_ppjo_status">
            <Card
              sx={{
                // width: "100%",
                borderRadius: "20px",
                boxShadow: "0px 4px 20px 0px #6150E11A",
              }}
              className="daily_ppjo"
            >
              <CardContent className="ppjo-content">
                <Typography className="ppjo-typo" variant="h6" >
                  PPJO
                </Typography>
                <MoreHorizIcon
                  className="more"
                  sx={{ color: "black" }}
                />
              </CardContent>
              <div style={{ width: "100%" }} className="daily_total_open">
                {ppjoData?.map((d, i) => {
                  return (
                    <>
                      {/* <CardContent className="pojo_quot_content">
                        <div className="">
                          <Image src={PpjoStatus} alt="PPJO STATUS" />
                        </div>
                        <div className="pojo_quot_content-detail ">
                          <Typography className="pojo_quot_label" gutterBottom>
                            {d?.label}
                          </Typography>
                          <Typography
                            className="daily_count"
                            sx={{
                              color: "#6150E1",
                              fontWeight: "600",
                              fontSize: "16px",
                            }}
                            gutterBottom
                          >
                            {d?.count}
                          </Typography>
                        </div>
                      </CardContent> */}
                      <div className="total-ppjo-cards">
                      <div className="image-container">
                          <Image src={PpjoStatus} alt="PPJO STATUS" />
                        </div>
                        <div className="text-container">
                          <h3>{d?.label}</h3>
                          <p>{d?.count}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </Card>
          </div>
          <div className="daily_quotation">
            <Card
              sx={{
                borderRadius: "20px",
                boxShadow: "0px 4px 20px 0px #6150E11A",
              }}
              className="daily_ppjo_quto"
            >
              <CardContent className="ppjo-content">
                <Typography className="ppjo-typo" variant="h6" gutterBottom>
                  Quotation
                </Typography>
                <MoreHorizIcon className="more" sx={{ color: "black" }} />
              </CardContent>
              <div className="quot_main_div">
                {qutoData?.map((a, i) => {
                  return (
                    <>
                      {/* <Card
                        className="quota_main_card"
                        sx={{ boxShadow: "0px 4px 20px 0px #6150E11A" }}
                      >
                        <CardContent
                          style={{
                            backgroundColor: a?.backgroundcolor,
                          }}
                          className="quota_main_card-sub "
                        >
                          <Typography className="quot_label" gutterBottom>
                            {a?.label}
                          </Typography>
                          <Typography
                            className="quot_count count_colorr"
                            gutterBottom
                          >
                            {a?.count}
                          </Typography>
                        </CardContent>
                      </Card> */}
                      <div className="quota_main_card"
                        sx={{ boxShadow: "0px 4px 20px 0px #6150E11A" }}>
                        <h3>{a?.label}</h3>
                        <p>{a?.count}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
        <div className="">
          <div style={{ width: "100%" }} className="sale_wip_maincard ">
            <div style={{ width: "49%" }} className=" sales-order sale_wip_maincard-sub">
              <Card
                className="sales_main_card"
                sx={{ boxShadow: "0px 4px 20px 0px #6150E11A",borderRadius:"15px" }}
              >
                <CardContent className="sales-content">
                  <Typography className="sale_typo" variant="h6">
                    Sales Order
                  </Typography>
                  <MoreHorizIcon className="more_sale" sx={{}} />
                </CardContent>
                <div className="sales_card_content">
                  {salesData?.map((s) => {
                    return (
                      <>
                        <div>
                          {/* {" "}
                          <CardContent className="border" sx={{}}>
                            <Typography
                              className="sales_label"
                              sx={{color:""}}
                              variant="h6"
                              gutterBottom
                            >
                              {s?.label}
                            </Typography>{" "}
                            <Typography
                              className="wip_count count_color"
                              variant="h6"
                              gutterBottom
                            >
                              {s?.count}
                            </Typography>
                          </CardContent> */}
                          <h3>{s?.label}</h3>
                          <p className="">{s?.count}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Card>
            </div>
            <div style={{ width: "49%" }} className="wip sale_wip_maincard-sub">
              <Card
                className="wip_main_card"
                sx={{ boxShadow: "0px 4px 20px 0px #6150E11A" }}
              >
                <CardContent className="wip-content">
                  <Typography className="sale_typo" variant="h6">
                    WIP
                  </Typography>
                  <MoreHorizIcon className="more_sale" sx={{}} />
                </CardContent>
                <div className="wip_card_content">
                  {wipData?.map((s) => {
                    return (
                      <>
                        <div>
                          {/* {" "}
                          <CardContent sx={{}}>
                            <Typography
                              className="sales_label"
                              variant="h6"
                              gutterBottom
                            >
                              {s?.label}
                            </Typography>
                            <Typography
                              className="wip_count  count_color"
                              variant="h6"
                              gutterBottom
                            >
                              {s?.count}
                            </Typography>
                          </CardContent> */}
                          <h3>{s?.label}</h3>
                          <p className="">{s?.count}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div style={{paddingTop:"40px"}}>
          {currentView === "daily" && <SummaryUpdate />}
        </div>
        <div style={{paddingTop:"30px"}}>
          <Pipeline pipelineData={pipelineData} currentView={currentView} />
        </div> 
      </Card>
    </>
  );
};

export default DailyStatus;
