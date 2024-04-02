import { Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import PrimaryLayout from "@/layout/primary";
import NavLayout from "@/layout/nav";
import { primarySideBarData } from "@/utils/mainData";
import "./activitiesLibrary.scss";
import CommonSelectField from "@/components/fields/commonSelect";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  BackLitSign,
  EditLitSign,
  FrontLitSign,
  PVCLitSign,
  SelectOptionForActivitieCard,
} from "@/utils/commonData";
import SquareIcon from "@mui/icons-material/Square";
import Image from "next/image";
import { useRouter } from "next/router";
import CreateSampleModal from "../../../components/modal/createSampleModal";
// import useRouterPush from "@/hooks/routerUtils";

const ActivitiesLibrary = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  // const [cardData, setCardData] = useState("");
  // const push = useRouterPush();
  // push("/SD/activities-library/viewCard");

  const handleViewCard = (val) => {
    if (typeof val === "object") {
      router.push({
        pathname: "/SD/activities-library/viewCard",
        query: { cardData: JSON.stringify(val) }, // Pass data as a query parameter
      });
    } else {
      console.error("Invalid data:", val);
    }
  };

  const handleCreateSample = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({}),
    onSubmit: () => {},
  });

  return (
    <div>
      <NavLayout>
        <PrimaryLayout dropdown={primarySideBarData} header={"My dashboard"}>
          <div className="alignRow">
            <Typography variant="h6">Sample Library</Typography>
            <button className="createBtn" onClick={handleCreateSample}>
              Create New Sample
            </button>
          </div>
          <div>
            <Paper style={{ padding: "20px" }}>
              <Grid
                container
                spacing={2}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Grid item sm={6} xs={12}>
                  {/* Content for the first column */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label htmlFor="" style={{ marginRight: "10px" }}>
                      Filter
                    </label>
                    <CommonSelectField
                      formik={formik}
                      defaultValue={"select sign type"}
                      options={SelectOptionForActivitieCard.map((option) => ({
                        value: option,
                        label: option,
                      }))}
                    />
                  </div>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <div className="btnCategory">
                    <label htmlFor="">Category</label>
                    {/* Content for the second column */}
                    <button className="ctg-btn">Aluminium</button>
                    <button className="ctg-btn">Acrylic</button>
                    <button className="ctg-btn">Stainless Steel</button>
                    <button className="ctg-btn">Marble</button>
                  </div>
                </Grid>
              </Grid>
              <div>
                <Typography variant="h6" sx={{ margin: "20px 0px" }}>
                  Front Lit-Sign
                </Typography>
                <Grid container spacing={2}>
                  {FrontLitSign.map((val, i) => (
                    <Grid key={i} item xl={2} lg={3} md={4} sm={6} xs={12}>
                      <div
                        className="ActivitieCard"
                        onClick={() => handleViewCard(val)}
                      >
                        <Image src={val.img} alt="#" height={120} />
                        <br />
                        <span className="card-item">
                          Sample Code: {val.SampleCode}
                        </span>
                        <span className="card-item">
                          Sales Order No: {val.FOC}
                        </span>
                        <span className="card-item">
                          Availability:{" "}
                          {val.Availability === "Available To Show" ? (
                            <SquareIcon
                              sx={{ fontSize: "14px", color: "green" }}
                            />
                          ) : (
                            <SquareIcon
                              sx={{ fontSize: "14px", color: "red" }}
                            />
                          )}{" "}
                          {val.Availability}{" "}
                        </span>
                        <span className="card-item">Room No: {val.RoomNo}</span>
                        <span className="card-item">Rack No: {val.RackNo}</span>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
              <div>
                <Typography variant="h6" sx={{ margin: "20px 0px" }}>
                  Back Lit-Sign
                </Typography>
                <Grid container spacing={2}>
                  {BackLitSign.map((val, i) => (
                    <Grid key={i} item xl={2} lg={3} md={4} sm={6} xs={12}>
                      <div
                        className="ActivitieCard"
                        onClick={() => handleViewCard(val)}
                      >
                        <Image src={val.img} alt="#" height={120} />
                        <br />
                        <span className="card-item">
                          Sample Code: {val.SampleCode}
                        </span>
                        <span className="card-item">
                          Sales Order No: {val.FOC}
                        </span>
                        <span className="card-item">
                          Availability:{" "}
                          {val.Availability === "Available To Show" ? (
                            <SquareIcon
                              sx={{ fontSize: "14px", color: "green" }}
                            />
                          ) : (
                            <SquareIcon
                              sx={{ fontSize: "14px", color: "red" }}
                            />
                          )}{" "}
                          {val.Availability}{" "}
                        </span>
                        <span className="card-item">Room No: {val.RoomNo}</span>
                        <span className="card-item">Rack No: {val.RackNo}</span>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
              <div>
                <Typography variant="h6" sx={{ margin: "20px 0px" }}>
                  Edge Lit-Sign
                </Typography>
                <Grid container spacing={2}>
                  {EditLitSign.map((val, i) => (
                    <Grid key={i} item xl={2} lg={3} md={4} sm={6} xs={12}>
                      <div
                        className="ActivitieCard"
                        onClick={() => handleViewCard(val)}
                      >
                        <Image src={val.img} alt="#" height={120} />
                        <br />
                        <span className="card-item">
                          Sample Code: {val.SampleCode}
                        </span>
                        <span className="card-item">
                          Sales Order No: {val.FOC}
                        </span>
                        <span className="card-item">
                          Availability:{" "}
                          {val.Availability === "Available To Show" ? (
                            <SquareIcon
                              sx={{ fontSize: "14px", color: "green" }}
                            />
                          ) : (
                            <SquareIcon
                              sx={{ fontSize: "14px", color: "red" }}
                            />
                          )}{" "}
                          {val.Availability}{" "}
                        </span>
                        <span className="card-item">Room No: {val.RoomNo}</span>
                        <span className="card-item">Rack No: {val.RackNo}</span>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
              <div>
                <Typography variant="h6" sx={{ margin: "20px 0px" }}>
                  PVC Sign Board
                </Typography>
                <Grid container spacing={2}>
                  {PVCLitSign.map((val, i) => (
                    <Grid key={i} item xl={2} lg={3} md={4} sm={6} xs={12}>
                      <div
                        className="ActivitieCard"
                        onClick={() => handleViewCard(val)}
                      >
                        <Image src={val.img} alt="#" height={120} />
                        <br />
                        <span className="card-item">
                          Sample Code: {val.SampleCode}
                        </span>
                        <span className="card-item">
                          Sales Order No: {val.FOC}
                        </span>
                        <span className="card-item">
                          Availability:{" "}
                          {val.Availability === "Available To Show" ? (
                            <SquareIcon
                              sx={{ fontSize: "14px", color: "green" }}
                            />
                          ) : (
                            <SquareIcon
                              sx={{ fontSize: "14px", color: "red" }}
                            />
                          )}{" "}
                          {val.Availability}{" "}
                        </span>
                        <span className="card-item">Room No: {val.RoomNo}</span>
                        <span className="card-item">Rack No: {val.RackNo}</span>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Paper>
          </div>
          <CreateSampleModal
            openModal={modalOpen}
            setOpenModal={handleModalClose}
          />
        </PrimaryLayout>
      </NavLayout>
    </div>
  );
};

export default ActivitiesLibrary;
