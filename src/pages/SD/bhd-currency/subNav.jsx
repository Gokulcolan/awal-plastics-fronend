import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { BsPin } from "react-icons/bs";
import { PiSortDescending } from "react-icons/pi";
import CommonSelectField from "../../../components/fields/commonSelect";
import { useFormik } from "formik";
import * as Yup from "yup";

function SubNav() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      contactPerson: "",
      organization: "",
      title: "",
    },
    validationSchema: Yup.object({
      contactPerson: Yup.string().required("Contact Person is required"),
      organization: Yup.string().required("Organization is required"),
      title: Yup.string().required("Title is required"),
    }),
    onSubmit: (val) => {
      console.log("Values", val);
    },
  });
  return (
    <div
      className="top-second-menus"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4px 12px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <BsPin
          style={{ verticalAlign: "top", marginTop: "3px", fontSize: "15px" }}
        />{" "}
        <h4 style={{ margin: "0", paddingLeft: "4px" }}>Pin filters</h4>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div>
          <PiSortDescending style={{ fontSize: "20px" }} />
        </div>
        <div style={{ width: "190px" }}>
          <CommonSelectField
            id="activity"
            label={""}
            defaultValue={"Sort by: Next activity"}
            formik={formik}
            options={[]}
            // customChange={(e) => setCurrentOption(e.target.value)}
            customStyles={{
              OutlinedInput: {
                padding: "4px !important",
              },
            }}
            generalStyles={true}
            noBorder={true}
          />
        </div>
      </div>
    </div>
  );
}

export default SubNav;
