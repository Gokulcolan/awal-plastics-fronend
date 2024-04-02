import React, { useState } from "react";
import NavLayout from "@/layout/nav";
import PrimaryLayout from "@/layout/primary";
import { primarySideBarData } from "@/utils/mainData";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import "./salesFormStyle.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonTextField from "@/components/fields/commonText";
import PersonIcon from "@mui/icons-material/Person";
import {
  addresstitle,
  commercialData,
  projectData,
  technicalData,
} from "./commonFeildNames";
import CommonIcon from "@/components/fields/commonIcon";
import CommonSelectField from "@/components/fields/commonSelect";
import CommonFilled from "@/components/fields/commonFilled";

const SalesEnquiryForm = () => {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      role: "",
    },
    validationSchema: Yup.object({
      role: Yup.string().required("Role is required"),
    }),
    onSubmit: (val) => {
      console.log("Values", val);
    },
  });

  return (
    <>
      <NavLayout>
        <PrimaryLayout dropdown={primarySideBarData} header={"My dashboard"}>
          <div className="sf_main">
            <Card>
              <CardContent>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    paddingLeft: "31px",
                  }}
                  variant="h6"
                >
                  Sales Enquiry Form
                </Typography>
              </CardContent>
              <Card
                sx={{
                  marginLeft: "15px",
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      marginLeft: "15px",
                    }}
                    variant="h6"
                  >
                    General Information
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid sx={{ ml: 2 }} item xs={3.8} md={3.8}>
                      <CommonTextField
                        formik={formik}
                        inputProps={{
                          sx: {
                            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                              border: "1px solid black",
                            },
                            pt: 1,
                          },
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon sx={{ color: "#dadada" }} />
                              {/* Replace with your desired icon */}
                            </InputAdornment>
                          ),
                        }}
                        id="email"
                        placeholder="Enter Customer Name"
                      />
                    </Grid>
                  </Grid>
                  <Typography
                    sx={{
                      mt: 2,
                      color: "black",
                      fontSize: "20px",
                      marginLeft: "15px",
                    }}
                  >
                    Address
                  </Typography>
                  <CardContent sx={{ pt: 0 }}>
                    <Grid container spacing={2}>
                      {addresstitle?.map((s) => {
                        return (
                          <>
                            <Grid item xs={4} sm={4} md={4} xl={4}>
                              {s.textfield ? (
                                <CommonIcon
                                  id={s.id}
                                  formik={formik}
                                  icon={s?.icon}
                                />
                              ) : s.textfieldalone ? (
                                <CommonTextField id={s.id} formik={formik} />
                              ) : s.select ? (
                                <CommonSelectField id={s.id} formik={formik} />
                              ) : (
                                <CommonTextField
                                  id={s.id}
                                  formik={formik}
                                  placeholder={s?.placeholder}
                                />
                              )}
                            </Grid>
                          </>
                        );
                      })}
                    </Grid>
                  </CardContent>
                  <CardContent>
                    <Typography
                      sx={{ color: "black", fontSize: "20px" }}
                      variant="h6"
                    >
                      Project
                    </Typography>
                    <Grid container spacing={2}>
                      {projectData?.map((s) => {
                        return (
                          <>
                            <Grid item xs={4} sm={4} md={4} xl={4}>
                              {s.textfield ? (
                                <CommonIcon
                                  id={s.id}
                                  formik={formik}
                                  icon={s?.icon}
                                />
                              ) : s.select ? (
                                <CommonSelectField
                                  id={s.id}
                                  defaultValue={s.id}
                                  icons={s?.icons}
                                  formik={formik}
                                  propscolor="black"
                                />
                              ) : (
                                <CommonTextField
                                  id={s.id}
                                  formik={formik}
                                  placeholder={s?.placeholder}
                                />
                              )}
                            </Grid>
                          </>
                        );
                      })}
                    </Grid>
                  </CardContent>
                </CardContent>
              </Card>
              <Card
                sx={{
                  mr: 5,
                  ml: 5,
                  m: 3,
                  backgroundColor: "#0080001A",
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      pt: 1,
                      color: "#008000",
                    }}
                    variant="h4"
                  >
                    Technical
                  </Typography>
                  <Grid sx={{ pt: 0 }} container spacing={2}>
                    {technicalData?.map((s, index) => (
                      <Grid
                        key={index}
                        item
                        xs={s.filledlong ? 12 : 4}
                        sm={s.filledlong ? 12 : 4}
                        md={s.filledlong ? 12 : 4}
                        xl={s.filledlong ? 12 : 4}
                      >
                        {s.filled || s.filledlong || s.filledsingle ? (
                          <CommonFilled
                            id={s.id}
                            formik={formik}
                            icon={s?.icons}
                            propscolor="green"
                            propsbg="white"
                          />
                        ) : s.textfieldalone ? (
                          <CommonTextField
                            id={s.id}
                            placeholder={s?.id}
                            formik={formik}
                            propscolor="black"
                          />
                        ) : s.textfield ? (
                          <CommonTextField
                            id={s.id}
                            formik={formik}
                            placeholder={s.id}
                            propscolor="green"
                            customStyles={{
                              OutlinedInput: {
                                backgroundColor: "white",
                                // height: "10px",
                              },
                            }}
                          />
                        ) : s.select ? (
                          <CommonSelectField
                            id={s.id}
                            defaultValue={s.id}
                            formik={formik}
                            propscolor="green"
                            sx={{
                              root: {
                                "& .MuiOutlinedInput-input": {
                                  backgroundColor: "white",
                                  height: "10px",
                                  // padding: "17px",
                                },
                              },
                            }}
                          />
                        ) : s.empty ? null : null}
                      </Grid>
                    ))}

                  </Grid>
                </CardContent>
              </Card>
              <Card
                sx={{
                  mr: 5,
                  ml: 5,
                  m: 3,
                  mt: 4,
                  backgroundColor: "#6150E11A",
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      mb: 1,
                      mt: 1,
                      color: "#6150E1",
                    }}
                    variant="h4"
                  >
                    Commercial
                  </Typography>
                  <Grid container spacing={3}>
                    {commercialData?.map((s) => {
                      return (
                        <>
                          {s.select ? (
                            <Grid item xs={4} sm={4} md={4} xl={4}>
                              <CommonSelectField
                                id={s.id}
                                formik={formik}
                                propscolor="#6150E1"
                                defaultValue={s.id}
                                sx={{
                                  root: {
                                    "& .MuiOutlinedInput-input": {
                                      backgroundColor: "white",
                                      padding: "17px",
                                    },
                                  },
                                }}
                              />
                            </Grid>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </Grid>
                </CardContent>
              </Card>
            </Card>
            <Card
              sx={{ mt: 4, boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
            >
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="primary"
                  aria-label="secondary tabs example"
                >
                  <Tab
                    sx={{
                      backgroundColor: value === 0 ? "#0d68c5" : "transparent",
                      color: value === 0 ? "white !important" : "black",
                      border: value === 0 ? "solid 1px #c2d9f0 !important" : "",
                      padding:"5px !important"
                    }}
                    label="Draw"
                  />
                  <Tab
                    sx={{
                      backgroundColor: value === 1 ? "#0d68c5" : "transparent",
                      color: value === 1 ? "white !important" : "black",
                      border: value === 1 ? "solid 1px #c2d9f0 !important" : "",
                      padding:"5px !important"
                    }}
                    label="Type"
                  />
                  <Tab
                    sx={{
                      backgroundColor: value === 2 ? "#0d68c5" : "transparent",
                      color: value === 2 ? "white !important" : "black",
                      border: value === 2 ? "solid 1px #c2d9f0 !important" : "",
                      padding:"5px !important"
                    }}
                    label="Upload"
                  />
                </Tabs>

                {/* Render tab content based on the selected tab */}
                <Box p={3}>
                  {value === 0 && <div>Draw Tab Content</div>}
                  {value === 1 && <div>Type Tab Content</div>}
                  {value === 2 && <div>Upload Tab Content</div>}
                </Box>
              </Box>
              <CardContent sx={{ m: 5 }}>
                <Button
                  sx={{
                    textTransform: "none",
                    float: "right",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                >
                  Submit
                </Button>
              </CardContent>
            </Card>
            <div className="button_style">
              <Button
                sx={{
                  textTransform: "none",
                  float: "right",
                  backgroundColor: "#6150E1",
                  color: "white",
                  fontWeight: "bold",
                  m: 1,
                  fontSize: "16px",
                }}
                variant="contained"
              >
                Create Lead
              </Button>
              <Button
                sx={{
                  textTransform: "none",
                  float: "right",
                  backgroundColor: "#FF1540",
                  fontWeight: "bold",
                  m: 1,
                  fontSize: "16px",
                }}
                variant="contained"
              >
                Cancel
              </Button>
            </div>
          </div>
        </PrimaryLayout>
      </NavLayout>
    </>
  );
};

export default SalesEnquiryForm;
