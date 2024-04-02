import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import "../sales-dashboard/salesDashboardStyle.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ppjoCardData, ppjoConversions } from "./commonData";
import DailyStatus from "./dailyStatus";
import CommonLayout from "@/layout/commonLayout";
import { useEffect, useState } from "react";

const PpjoStatus = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const oTop = document
        .getElementById("counter")
        .getBoundingClientRect().top;

      if (!animationStarted && oTop < window.innerHeight) {
        document.querySelectorAll(".counter").forEach((element) => {
          const startValue = parseInt(element.innerText, 10);
          let currentCount = 0;

          const updateCounter = () => {
            if (currentCount <= startValue) {
              element.innerText = Math.ceil(currentCount) + "+";
              currentCount += startValue / 200; // You can adjust the speed by changing the divisor
              requestAnimationFrame(updateCounter);
            }
          };

          updateCounter();
        });

        setAnimationStarted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationStarted]);

  return (
    <div className="ppjo-main-div">
      <div>
        <Card
          sx={{ borderRadius: "10px", boxShadow: "0px 4px 20px 0px #6150E11A" }}
          className="ppjo-card"
        >
          <CardContent className="ppjo-content">
            <Typography className="ppjo-typo">PPJO Status</Typography>{" "}
            <MoreHorizIcon className="more" sx={{ color: "black" }} />
          </CardContent>
        </Card>
      </div>
      <div className="total-main ppjo-status-cards">
        {ppjoCardData?.map((a, i) => {
          return (
            <div key={i}  className={`totalcard-style ${
              a.backgroundcolor === "linear-gradient"
                ? "linear-gradient"
                : a.backgroundcolor
            }`} style={{ backgroundColor: a?.backgroundcolor }}>
              {/* <Card
                sx={{ borderRadius: "20px", boxShadow:"0px 4px 20px 0px #6150E11A",padding:"6px 0px"}}
                className={`total-cards ${
                  a.backgroundcolor === "linear-gradient"
                    ? "linear-gradient"
                    : a.backgroundcolor
                }`}
              >
                <CardContent
                  style={{ backgroundColor: a?.backgroundcolor }}
                  className="total-content"
                >
                  <Typography className="total-typo" variant="h6">
                    {a?.label}
                  </Typography>{" "}
                  <Typography className="total-count" variant="h4" >
                    {a?.count}
                  </Typography>
                </CardContent>
              </Card> */}
              <h2>{a?.label}</h2>
              <p> {a?.count}</p>
            </div>
          );
        })}
      </div>
      <div className="totalcard_con ">
        <Card
          className="ppjo_card_con"
          style={{ boxShadow: "0px 4px 20px 0px #6150E11A" }}
        >
          <CardContent className="ppjo-content">
            <Typography className="ppjo-typo" variant="h6" gutterBottom>
              PPJO Conversions
            </Typography>
            <MoreHorizIcon className="more" sx={{ color: "black", mt: 1 }} />
          </CardContent>
          <div className="ppjo-conversion-cards">
            {ppjoConversions?.map((a, i) => {
              return (
                // <Card
                //   key={i}
                //   className="total_cards_pojocon"
                //   style={{
                //     backgroundColor: a?.backgroundcolor,
                //     boxShadow:"0px 4px 20px 0px #6150E11A"
                //   }}>
                //     <CardContent
                //       className="total_content_pojocon"
                  
                //     >
                //       <Typography
                //         className="total_typo_con"
                //       >
                //         {a?.label}
                //       </Typography>{" "}
                //       <Typography
                //         className="total-count"
                       
                //       >
                //         {a?.count}
                //       </Typography>{" "}
                //     </CardContent>
                //   </Card>
                  <div key={i} style={{
                        backgroundColor: a?.backgroundcolor,
                        boxShadow:"0px 4px 20px 0px #6150E11A"
                      }}>
                     <h2>{a?.label}</h2>
              <p> {a?.count}</p>
                  </div>
                
              );
            })}
          </div>
        </Card>
      </div>
      <div className="daily">
        <DailyStatus />
      </div>
      <div className="daily"> </div>
    </div>
  );
};
PpjoStatus.getLayout = (page) => <CommonLayout>{page}</CommonLayout>;
export default PpjoStatus;
