import { Card, CardContent, Typography } from "@mui/material";
import "./salesDashboardStyle.scss";
import { customerCard, summaryCard, totalCard } from "./commonData";

const SummaryUpdate = ({ currentView }) => {
  return (
    <>
      <div style={{ width: "100%", boxShadow:"0px 4px 20px 0px #6150E11A"}}>
        <Card
          sx={{ borderRadius: "20px", width: "100%" }}
          className="summary_main"
        >
          <div style={{ width: "100%" }} className="summary_cards">
            <CardContent sx={{ width: "33%" }}>
              <Typography
                sx={{ color: "black", fontWeight: "600", fontSize:"20px" }}
                variant="h6"
              >
                Summary Update As of 14/04/2024
              </Typography>
              {summaryCard?.map((s) => {
                return (
                  <>
                    <div className="summary-updates">
                      {/* <Card
                        sx={{
                          borderLeft: "10px solid #0D68C5",
                          borderRadius: "6px",
                          mt: 1,
                          boxShadow:"0px 4px 20px 0px #6150E11A",
                          paddingBottom:"0",
                        }}
                      >
                        <CardContent
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            
                          }}
                        >
                          <Typography className="font_style">
                            {s?.label}
                          </Typography>
                          <Typography className="font_style">
                            {s?.count}
                          </Typography>
                        </CardContent>
                      </Card> */}
                     
                        <p className="font_style">{s?.label}</p>
                        <p className="font_style">{s?.count}</p>
                      </div>
                    
                  </>
                );
              })}
            </CardContent>
            <CardContent sx={{ width: "33%" }}>
              <Typography
                sx={{ color: "black", fontWeight: "600", fontSize:"20px"  }}
                variant="h6"
              >
                Customer Outstanding Report
              </Typography>
              {customerCard?.map((s) => {
                return (
                  <>
                    {/* <Card
                      sx={{
                        borderLeft: "10px solid #FF1540",
                        borderRadius: "6px",
                        mt: 1,
                        boxShadow:"0px 4px 20px 0px #6150E11A",
                        paddingBottom:"0"
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography className="font_style">
                          {s?.label}
                        </Typography>
                        <Typography className="font_style">
                          {s?.count}
                        </Typography>
                      </CardContent>
                    </Card> */}
                    <div className="customer-outstanding" >
                        <p className="font_style">{s?.label}</p>
                        <p className="font_style">{s?.count}</p>
                      </div>
                  </>
                );
              })}
            </CardContent>
            <CardContent sx={{ width: "33%" }}>
              <Typography
                sx={{ color: "black", fontWeight: "600",fontSize:"20px" }}
                variant="h6"
              >
                Total Payouts
              </Typography>
              {totalCard?.map((s) => {
                return (
                  <>
                    {/* <Card
                      sx={{
                        borderLeft: "10px solid #FFBD15",
                        borderRadius: "6px",
                        mt: 1,
                        boxShadow:"0px 4px 20px 0px #6150E11A",
                       
                      }}
                    >
                      <CardContent
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography className="font_style">
                          {s?.label}
                        </Typography>
                        <Typography className="font_style">
                          {s?.count}
                        </Typography>
                      </CardContent>
                    </Card> */}
                    <div className="total-payouts" >
                        <p className="font_style">{s?.label}</p>
                        <p className="font_style">{s?.count}</p>
                      </div>
                  </>
                );
              })}
            </CardContent>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SummaryUpdate;
