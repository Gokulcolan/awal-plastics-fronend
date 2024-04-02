import React from "react";
import LeadNav from "./leadNav";
import NavLayout from "@/layout/nav";
import { MdKeyboardArrowRight } from "react-icons/md";
import SummaryPage from "./summary";

function Lead() {
  return (
    <NavLayout>
      <LeadNav />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "10px",
          padding: "0px 20px",
        }}
      >
        <p
          style={{
            color: "rgba(13, 104, 197, 1)",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          Pipeline
        </p>
        <p style={{ marginTop: "5px" }}>
          <MdKeyboardArrowRight style={{ color: "rgba(13, 104, 197, 1)" }} />
        </p>
        <p
          style={{
            color: "rgba(13, 104, 197, 1)",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          Demo Scheduled
        </p>
      </div>
      <SummaryPage />
    </NavLayout>
  );
}

export default Lead;
