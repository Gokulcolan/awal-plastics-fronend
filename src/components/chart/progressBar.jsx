import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme, barcolor }) => ({
  marginTop: "10px",
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      barcolor || (theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"),
  },
}));

const CustomizedProgressBars = ({ value, color }) => {
  return (
    <BorderLinearProgress
      variant="determinate"
      value={value}
      barcolor={color}
      style={{ margin: "0" }}
    />
  );
};

export default CustomizedProgressBars;
