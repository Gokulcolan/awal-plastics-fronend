import { TeamSalesCurrencyYear, TeamSalesDetails } from "@/utils/commonData";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import CustomizedProgressBars from "./chart/progressBar";
import CardFlip from "react-card-flip";
import LineChart from "./chart/lineChart";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const TeamSalesCard = ({
  isFlipped,
  content,
  disabledValue,
  handleTeamCard,
}) => {
  return (
    <Card className="cardEffects">
      <CardContent>
        <>
          <div className="alignRow teamSalesHeadingDiv">
            <h2 className="teamSalesHeading">Team Sales</h2>
            <div className="alignRow arrowDiv">
              <ArrowLeftIcon
                onClick={() => handleTeamCard("Previous")}
                className={`arrow ${disabledValue && "arrowDisabled"}`}
              />
              <div
                style={{
                  marginTop: "5px",
                  color: "#ff1540",
                  textAlign: "center",
                }}
              >
                {content}
              </div>
              <ArrowRightIcon
                onClick={() => handleTeamCard("Next")}
                className={`arrow ${!disabledValue && "arrowDisabled"}`}
              />
            </div>
          </div>
          <CardFlip isFlipped={isFlipped}>
            <div
              key="front"
              className="CardFlipDiv"
              style={{ padding: "10px" }}
            >
              <Card className="cardEffects">
                <CardContent className="CardContentDiv">
                  <div className="alignRow currencyYearDiv">
                    {TeamSalesCurrencyYear?.map((val) => (
                      <>
                        <div className="salesCurrencyDiv">
                          <Typography className="bhdValue">
                            <span className="bhd">BHD</span>
                            {val.currency}
                          </Typography>

                          <Typography className="bhdDate">
                            {val.date}
                          </Typography>
                          <CustomizedProgressBars
                            value={39}
                            color={"#0a2472"}
                          />
                          <div className="alignRow">
                            <Typography className="progressValue">
                              {val.progressValue}%
                            </Typography>
                            <Typography className="progressValue">
                              <span className="bhd">BHD</span>
                              {val.progressCurrency}
                            </Typography>
                          </div>
                        </div>
                      </>
                    ))}
                    {TeamSalesCurrencyYear?.map((val) => (
                      <>
                        <div className="salesCurrencyDiv">
                          <Typography className="bhdValue">
                            <span className="bhd">BHD</span>
                            {val.currency}
                          </Typography>
                          <Typography className="bhdDate">
                            {val.date}
                          </Typography>

                          <div className="alignRow">
                            <Typography className="progressValue">
                              {val.progressValue}%
                            </Typography>
                            <Typography className="progressValue">
                              {val.progressCurrency}
                            </Typography>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                  <div className="leaderboardDiv">
                    <h3 className="cardTitles">Leaderboard This Year</h3>
                    <div className="leaderboardContentParent">
                      {TeamSalesDetails?.map((val) => (
                        <>
                          <div className="alignRow leaderboardContent">
                            <Typography className="teamsData">
                              {val.name}
                            </Typography>
                            <Typography className="teamsData">
                              <span>BHD</span>
                              <span>{val.currency}</span>
                            </Typography>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="linechartDiv">
                    <LineChart />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div key="back" className="CardFlipDiv" style={{ padding: "10px" }}>
              <Card className="cardEffects">
                <CardContent className="CardContentDiv">
                  <div className="alignRow currencyYearDiv">
                    {TeamSalesCurrencyYear?.map((val) => (
                      <>
                        <div className="salesCurrencyDiv">
                          <Typography className="bhdValue">
                            <span className="bhd">BHD</span>
                            {val.currency}
                          </Typography>
                          <Typography className="bhdDate">
                            {val.date}
                          </Typography>
                          <CustomizedProgressBars
                            value={39}
                            color={"#0a2472"}
                          />
                          <div className="alignRow">
                            <Typography className="progressValue">
                              {val.progressValue}%
                            </Typography>
                            <Typography className="progressValue">
                              <span className="bhd">BHD</span>
                              {val.progressCurrency}
                            </Typography>
                          </div>
                        </div>
                      </>
                    ))}
                    {TeamSalesCurrencyYear?.map((val) => (
                      <>
                        <div className="salesCurrencyDiv">
                          <Typography className="bhdValue">
                            <span className="bhd">BHD</span>
                            {val.currency}
                          </Typography>
                          {/* <br /> */}
                          <Typography className="bhdDate">
                            {val.date}
                          </Typography>

                          <div className="alignRow">
                            <Typography className="progressValue">
                              {val.progressValue}%
                            </Typography>
                            <Typography className="progressValue">
                              {val.progressCurrency}
                            </Typography>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                  <div className="leaderboardDiv">
                    <h3 className="cardTitles">Leaderboard This Year</h3>
                    <div className="leaderboardContentParent">
                      {TeamSalesDetails?.map((val) => (
                        <>
                          <div className="alignRow leaderboardContent">
                            <Typography className="teamsData">
                              {val.name}
                            </Typography>
                            <Typography className="teamsData">
                              <span>BHD</span>
                              <span>{val.currency}</span>
                            </Typography>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="linechartDiv">
                    <LineChart />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardFlip>
        </>
      </CardContent>
    </Card>
  );
};

export default TeamSalesCard;
