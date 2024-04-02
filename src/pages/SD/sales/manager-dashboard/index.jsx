// ManagerDashboard.js
import React, { useState } from "react";
import TeamSalesCard from "@/components/progressCard";
import ManagerCards from "@/components/managerCard";
import { Grid } from "@mui/material";
import "./managerDashboardStyle.scss";
import CommonLayout from "@/layout/commonLayout";

const ManagerDashboard = () => {
  const [cardFlipped, setCardFlipped] = useState(false);
  const [disabledValue, setDisabledValue] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = ["Awal Arabia", "Awal Plastics"];

  const handleTeamCard = (value) => {
    setCardFlipped(!cardFlipped);
    value === "Next"
      ? setCurrentIndex((prevIndex) =>
          prevIndex === content.length - 1 ? 0 : prevIndex + 1
        )
      : setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? content.length - 1 : prevIndex - 1
        );
    setDisabledValue(!disabledValue);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TeamSalesCard
            handleTeamCard={handleTeamCard}
            isFlipped={cardFlipped}
            currentIndex={currentIndex}
            content={content[currentIndex]}
            disabledValue={disabledValue}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
          <ManagerCards isFlipped={cardFlipped} />
        </Grid>
      </Grid>
    </div>
  );
};

ManagerDashboard.getLayout = (page) => <CommonLayout>{page}</CommonLayout>;

export default ManagerDashboard;
