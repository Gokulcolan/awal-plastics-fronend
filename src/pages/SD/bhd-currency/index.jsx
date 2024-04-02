import React from "react";
import NavLayout from "@/layout/nav";
import "./dealsStyles.scss";
import DragAndDrop from "./DND";

const BHD = () => {
  return <DragAndDrop />;
};

BHD.getLayout = (page) => <NavLayout>{page}</NavLayout>;

export default BHD;
