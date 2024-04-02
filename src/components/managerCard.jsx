import { Card, CardContent, Grid, Typography } from "@mui/material";
import { ManagerCardDetails } from "@/utils/commonData";
import CustomizedProgressBars from "./chart/progressBar";
import AreaChart from "./chart/areaChart";
import CardFlip from "react-card-flip";
import OutboundIcon from "@mui/icons-material/Outbound";

const ManagerCards = ({ isFlipped }) => {
  return (
    <Grid container spacing={2}>
      {ManagerCardDetails?.map((val, i) => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={i}>
          <CardFlip isFlipped={isFlipped}>
            <div key="front">
              <Card className="cardEffect">
                <CardContent className="cardPaddingRemove">
                  <div className="cardHead">
                    <Typography className="cardTitle">
                      {val.frontData.Name}
                    </Typography>
                    <Typography className="cardID">
                      {val.frontData.id}
                    </Typography>
                  </div>
                  <img
                    src={val.frontData.image.src}
                    alt="#"
                    className="cardImageCenter"
                  />
                  <div className="cardBorder">
                    <div className="alignRow">
                      <Typography className="bhdValue">
                        <span className="bhd">BHD </span>
                        {val.frontData.graphCurrency}
                      </Typography>
                      <Typography className="bhdDate">
                        {val.frontData.graphDate}
                        <OutboundIcon
                          className="cardIcon"
                          style={{ color: val.frontData.color }}
                        />
                      </Typography>
                    </div>
                    <CustomizedProgressBars
                      value={val.frontData.progressValue}
                      color={val.frontData.color}
                    />
                    <div className="alignRow">
                      <Typography className="progressPercent">
                        {val.frontData.progressValue}%
                      </Typography>
                      <Typography className="progressPercent">
                        {val.frontData.progressCurrency}
                      </Typography>
                    </div>
                  </div>
                  <div className="cardBorder">
                    <div className="alignRow">
                      <Typography className="bhdValue">
                        <span className="bhd">BHD </span>
                        {val.frontData.graphCurrency}
                      </Typography>
                      <Typography className="bhdDate">
                        {val.frontData.graphDate}
                        <OutboundIcon
                          className="cardIcon"
                          style={{ color: val.frontData.color }}
                        />
                      </Typography>
                    </div>
                  </div>
                  <AreaChart
                    graphcolor={val.frontData.graphColor}
                    graphvalue={val.frontData.graphValues}
                  />
                </CardContent>
              </Card>
            </div>
            <div key="back">
              <Card className="cardEffect">
                <CardContent className="cardPaddingRemove">
                  <>
                    <div className="cardHead">
                      <Typography className="cardTitle">
                        {val.backData.Name}
                      </Typography>
                      <Typography>{val.backData.id}</Typography>
                    </div>
                    <img
                      src={val.backData.image.src}
                      alt="#"
                      className="cardImageCenter"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <div className="cardBorder">
                      <div className="alignRow">
                        <Typography className="bhdValue">
                          {" "}
                          <span className="bhd">BHD </span>
                          {val.backData.graphCurrency}
                        </Typography>
                        <Typography className="bhdDate">
                          {val.backData.graphDate}
                          <OutboundIcon
                            className="cardIcon"
                            style={{ color: val.backData.color }}
                          />
                        </Typography>
                      </div>
                      <CustomizedProgressBars
                        value={val.backData.progressValue}
                        color={val.backData.color}
                      />
                      <div className="alignRow">
                        <Typography>{val.backData.progressValue}%</Typography>
                        <Typography>{val.backData.progressCurrency}</Typography>
                      </div>
                    </div>
                    <div className="cardBorder">
                      <div>
                        <div className="alignRow">
                          <Typography className="bhdValue">
                            <span className="bhd">BHD </span>{" "}
                            {val.backData.graphCurrency}
                          </Typography>
                          <Typography className="bhdDate">
                            {val.backData.graphDate}
                            <OutboundIcon
                              className="cardIcon"
                              style={{ color: val.backData.color }}
                            />
                          </Typography>
                        </div>
                        <AreaChart
                          graphcolor={val.backData.graphColor}
                          graphvalue={val.backData.graphValues}
                        />
                      </div>
                    </div>
                  </>
                </CardContent>
              </Card>
            </div>
          </CardFlip>
        </Grid>
      ))}
    </Grid>
  )
}

export default ManagerCards;
