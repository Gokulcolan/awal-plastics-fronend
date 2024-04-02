import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavLayout from "@/layout/nav";
import { useFormik } from "formik";
import * as Yup from "yup";
import PrimaryLayout from "@/layout/primary";
import { primarySideBarData } from "@/utils/mainData";
import {
  ProductCreationPriceConfig,
  TabDescriptions,
  BOMQuantityData,
  BOLData,
  PriceConfiguratorCreated,
} from "@/utils/commonData";
import CommonSelectField from "@/components/fields/commonSelect";
import { CardContent, Grid } from "@mui/material";
import "./contactInformation.scss";
import CommonTextArea from "@/components/fields/commonTextArea";
import BomTable from "@/components/contactInfoTable/billOfMatrialTable";
import QuickEstimateTable from "@/components/contactInfoTable/quickEstimate";
import BolTable from "@/components/contactInfoTable/billOfLabour";

function CustomTabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const ContactTabs = () => {
  const [value, setValue] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const [showTable, setShowTable] = useState([false, false, false]);

  // tab switch
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //  price config content show
  const handleCreate = () => {
    setShowContent(!showContent);
  };

  //  Table content show
  const handleClick = (index) => {
    setShowTable((prevState) => {
      const newState = [...prevState];
      newState[index] = true; // Open the clicked tab
      return newState;
    });
  };

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({}),
    onSubmit: () => {},
  });

  return (
    <NavLayout>
      <PrimaryLayout dropdown={primarySideBarData} header={"My dashboard"}>
        <div className="addContactForm">
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab sx={{ textTransform: "none" }} label="Product Creation" />
              <Tab sx={{ textTransform: "none" }} label="Bill of Materials" />
              <Tab sx={{ textTransform: "none" }} label="Bill of Labor" />
              <Tab sx={{ textTransform: "none" }} label="Quick Estimate" />
            </Tabs>

            {/* 1st tab content */}
            <CustomTabPanel value={value} index={0}>
              <Typography variant="h6">Price Configurator</Typography>
              {showContent && (
                <div>
                  <br />
                  <Grid container spacing={1}>
                    {ProductCreationPriceConfig.map((val, i) => (
                      <Grid item xs={6} key={i}>
                        <CommonSelectField label={val.label} formik={formik} />
                      </Grid>
                    ))}
                  </Grid>
                  <br />
                  <div className="descriptionCard">
                    {TabDescriptions.map((val, i) => (
                      <CommonTextArea
                        label={val.label}
                        key={i}
                        formik={formik}
                        customStyles={{
                          OutlinedInput: {
                            border: "2px solid #e7f0f9",
                            borderRadius: "4px",
                            backgroundColor: "white",
                            width: "100%",
                            height: "60px",
                          },
                        }}
                      />
                    ))}
                  </div>
                  <br />
                  <div>
                    <button className="CreateBtn" onClick={handleCreate}>
                      Create
                    </button>
                  </div>
                </div>
              )}
              {/* Content to show after clicking the Create button */}
              <br />
              {!showContent && (
                <div>
                  <CardContent>
                    <Grid container spacing={2} style={{ maxWidth: "600px" }}>
                      {PriceConfiguratorCreated.map((val, i) => (
                        <React.Fragment key={i}>
                          <Grid
                            item
                            xs={6}
                            className="labelCard"
                            sx={{ padding: "10px" }}
                          >
                            <Typography color="textSecondary">
                              {val.label}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            className="valueCard"
                            sx={{ padding: "15px" }}
                          >
                            <Typography variant="body1">{val.value}</Typography>
                          </Grid>
                        </React.Fragment>
                      ))}
                    </Grid>
                  </CardContent>
                </div>
              )}
            </CustomTabPanel>
            {/* 2nd tab content */}
            <CustomTabPanel value={value} index={1}>
              <Typography variant="h6">BOM Standard Quantity</Typography>
              <br />
              <Grid container spacing={1}>
                {BOMQuantityData.map((val, i) => (
                  <Grid item xs={6} key={i}>
                    <CommonSelectField
                      label={val.label}
                      formik={formik}
                      customStyles={{
                        outlinedInput: {
                          height: "10px", // this height is not working we need to check later
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
              <br />
              <div style={{ paddingTop: "40px" }}>
                <button className="CreateBtn" onClick={() => handleClick(0)}>
                  Save
                </button>
              </div>
              <div style={{ paddingTop: "40px" }}>
                {showTable[0] && <BomTable />}
              </div>
            </CustomTabPanel>
            {/* 3rd tab content */}
            <CustomTabPanel value={value} index={2}>
              <Typography variant="h6">BOL Standard Duration</Typography>
              <br />
              <Grid container spacing={1}>
                {BOLData.map((val, i) => (
                  <Grid item xs={6} key={i}>
                    <CommonSelectField
                      label={val.label}
                      formik={formik}
                      customStyles={{
                        outlinedInput: {
                          height: "10px", // this height is not working we need to check later
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
              <br />
              <div style={{ paddingTop: "40px" }}>
                <button className="CreateBtn" onClick={() => handleClick(1)}>
                  Save
                </button>
              </div>
              <div style={{ paddingTop: "50px" }}>
                {showTable[1] && <BolTable />}
              </div>
            </CustomTabPanel>
            {/* 4th tab content */}
            <CustomTabPanel value={value} index={3}>
              <Typography variant="h6">
                Create Standard Template For the Product Code:
                FPAPFC142512141300
              </Typography>
              <br />
              <Grid container spacing={1}>
                {BOLData.map((val, i) => (
                  <Grid item xs={4} key={i}>
                    <CommonSelectField
                      label={val.label}
                      formik={formik}
                      customStyles={{
                        outlinedInput: {
                          height: "10px", // this height is not working we need to check later
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
              <br />
              <div>
                <button className="CreateBtn" onClick={() => handleClick(2)}>
                  Generate
                </button>
              </div>
              {/* table */}
              <div style={{ paddingTop: "50px" }}>
                {showTable[2] && <QuickEstimateTable />}
              </div>
            </CustomTabPanel>
          </Box>
        </div>
      </PrimaryLayout>
    </NavLayout>
  );
};

export default ContactTabs;
