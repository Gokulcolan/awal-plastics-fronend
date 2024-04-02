import CommonTextField from "@/components/fields/commonText";
import NavLayout from "@/layout/nav";
import PrimaryLayout from "@/layout/primary";
import {
  AddContactDropDownInfo,
  AddContactInfo,
  AddressInfo,
} from "@/utils/commonData";
import { primarySideBarData } from "@/utils/mainData";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, Typography } from "@mui/material";
import "./contactInformation.scss";
import CommonUpload from "@/components/fields/commonUpload";
import CommonSelectField from "@/components/fields/commonSelect";
import CommonTextArea from "@/components/fields/commonTextArea";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AddContact = () => {
  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({}),
    onSubmit: () => {},
  });
  return (
    <NavLayout>
      <PrimaryLayout dropdown={primarySideBarData} header={"My dashboard"}>
        <div className="addContactForm">
          <div>
            <Typography variant="h6">Contact Information</Typography>
          </div>
          <br />
          <div>
            <label htmlFor="" style={{ fontWeight: "500" }}>
              Contact Image
            </label>
            <div className="ContactimgCard">
              <AccountCircleIcon sx={{ fontSize: "30px" }} />
            </div>
          </div>
          <br />
          <Grid container spacing={2}>
            {AddContactDropDownInfo.map((val, i) => (
              <Grid item xs={4} key={i}>
                <CommonSelectField
                  label={val.label}
                  formik={formik}
                  labelClassName="contactTabsLabel"
                  customStyles={{
                    OutlinedInput: {
                      border: "1px solid black",
                      padding: "10px",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <br />
          <Grid container spacing={2}>
            {AddContactInfo.map((val, i) => (
              <Grid item xs={4} key={i}>
                <CommonTextField
                  label={val.label}
                  formik={formik}
                  labelClassName="contactTabsLabel"
                  customStyles={{
                    OutlinedInput: {
                      border: "1px solid black",
                      borderRadius: "4px",
                      height: "10px",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <br />
          <div className="contactHead">
            <Typography variant="h6">Address Information</Typography>
            <button className="addcontactbtn">Copy Address</button>
          </div>
          <br />
          <Grid container spacing={2}>
            {AddressInfo.map((val, i) => (
              <Grid item xs={6} key={i}>
                <CommonTextField
                  label={val.label}
                  labelClassName="contactTabsLabel"
                  formik={formik}
                  customStyles={{
                    OutlinedInput: {
                      border: "1px solid black",
                      borderRadius: "4px",
                      height: "10px",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <br />
          <div className="contactHead">
            <Typography variant="h6">Description Information</Typography>
          </div>
          {/* textarea */}
          <CommonTextArea
            label={"Description"}
            labelClassName="contactTabsLabel"
            formik={formik}
            customStyles={{
              OutlinedInput: {
                border: "1px solid black",
                borderRadius: "4px",
                width: "100%",
                height: "80px",
              },
            }}
          />
          <br />
          <CommonUpload label={"Upload Screenshot from shijilat"}  />
          <div className="formbtnalign">
            <button className="addcontactbtn">Create Contact</button>
            <button className="cancelBtn">Cancel</button>
          </div>
        </div>
      </PrimaryLayout>
    </NavLayout>
  );
};

export default AddContact;
