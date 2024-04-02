import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import NavLayout from "@/layout/nav";
import PrimaryLayout from "@/layout/primary";
import { primarySideBarData } from "@/utils/mainData";
import CommonSelectField from "@/components/fields/commonSelect";
import { SelectOptionForActivitieCard } from "@/utils/commonData";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import "./activitiesLibrary.scss";
import SquareIcon from "@mui/icons-material/Square";
import ActivitieCardRequestModal from "@/components/modal/activitieModal";

const viewCard = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState();

  let cardData = null;

  if (router.query.cardData) {
    try {
      cardData = JSON.parse(router.query.cardData);
    } catch (error) {
      console.error("Error parsing card data:", error);
    }
  }

  const handleRequestModal = (e) => {
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
          <Paper style={{ padding: "20px" }} elevation={0}>
            <div style={{borderBottom:"solid 1px #e7e7e7",paddingBottom:"10px",marginBottom:"10px"}}>
              <Typography variant="h6">Sample Library</Typography>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={4}>
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
            </Grid>
            <br />
            <br />

            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <div style={{ maxWidth: "100%", height: "auto" }}>
                  <Image
                    src={cardData?.img.src}
                    alt="#"
                    width={500}
                    height={300}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <div className="ActivitieCard">
                  <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                    Sample Code:{cardData?.SampleCode}
                  </span>
                  <br />
                  <typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Modi nobis, sequi, fugit ut atque iure deleniti facilis
                    harum error tenetur tempora neque eligendi fuga aliquid.
                    Quidem ipsum perspiciatis hic enim.
                  </typography>
                  <br />
                  <span>Sample Code:{cardData?.SampleCode}</span>
                  <br />
                  <span>FOC:{cardData?.FOC}</span>
                  <br />
                  <span>
                    Availability:{" "}
                    {cardData?.Availability === "Available To Show" ? (
                      <SquareIcon sx={{ fontSize: "14px", color: "green",}} />
                    ) : (
                      <SquareIcon sx={{ fontSize: "14px", color: "red" }} />
                    )}{" "}
                    {cardData?.Availability}{" "}
                  </span>
                  <br />
                  <span>Room No :{cardData?.RoomNo}</span>
                  <br />
                  <span>Rack No :{cardData?.RackNo}</span>
                </div>
              </Grid>
            </Grid>
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>PPJO : #213987</span>
              <button
                className="ctg-btn"
                onClick={(e) => {
                  handleRequestModal(e);
                }}
              >
                Request
              </button>
            </div>
          </Paper>
          <ActivitieCardRequestModal
            openModal={modalOpen}
            setOpenModal={handleModalClose}
          />
        </PrimaryLayout>
      </NavLayout>
    </div>
  );
};

export default viewCard;
