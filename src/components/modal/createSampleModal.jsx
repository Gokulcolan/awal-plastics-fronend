import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import "./contactInfoModal.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { SampleCreationFields } from "@/utils/commonData";
import CommonTextField from "@/components/fields/commonText";
import CommonSelectField from "@/components/fields/commonSelect";
import CommonUpload from "@/components/fields/commonUpload";

function CreateSampleModal(props) {
  const { openModal, setOpenModal } = props;
  const [showContent, setShowContent] = useState(true);
  

  const handleClose = () => {
    setOpenModal(false);
    setShowContent(true); // Reset showContent state when closing the modal
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
    <Dialog
      open={openModal}
      onClose={setOpenModal}
      fullWidth
      maxWidth="sm"
      PaperProps={{ style: { borderRadius: 40, padding: "20px" } }}
    >
      <div className="ContactModalPad">
        <div className="modalHeadCreation">
          <div className="modalTitle1">
            <Typography align="center" style={{ fontWeight: "bold",fontSize:"20px" }}>
              Sample Creation
            </Typography>
          </div>
          <div className="closeIcon">
            <CloseIcon onClick={handleClose} sx={{ fontSize: "18px" }} />
          </div>
        </div>
        <br />
        <br />
        {showContent ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#eff5fd",
              padding: "30px 25px",
              borderRadius: "50px",
            }}
          >
            <Grid container spacing={2}>
              {SampleCreationFields?.map((val, i) => (
                <Grid item md={6} lg={6} key={i}>
                  {val.id === "dropdown" ? (
                    <CommonSelectField
                      formik={formik}
                      label={val.label}
                      customStyles={{
                        OutlinedInput: {
                          backgroundColor: "white !important",
                        },
                      }}
                    />
                  ) : val.id === "checkbox" ? (
                    <div>
                      <label>{val.label}</label>
                      <br />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Yes"
                        labelPlacement="end"
                        sx={{ marginTop: "20px" }}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="No"
                        labelPlacement="end"
                        sx={{ marginTop: "20px" }}
                      />
                    </div>
                  ) : val.id === "upload" ? (
                    <CommonUpload label={val.label} />
                  ) : (
                    <CommonTextField
                      formik={formik}
                      label={val.label}
                      customStyles={{
                        OutlinedInput: {
                          backgroundColor: "white",
                        },
                      }}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          <div style={{ display: "block", textAlign: "center" }}>
            <CheckCircleOutlineIcon
              sx={{ fontSize: "100px", color: "#0071b9" }}
            />
            <br />
            <span>Sample Created</span>
          </div>
        )}
        <br />
        <br />
        <button
          className="RequestModalBtn"
          onClick={showContent ? () => setShowContent(false) : handleClose}
          style={{ backgroundColor: showContent ? "green" : "red" }}
        >
          {showContent ? "Enter" : "Close"}
        </button>
      </div>
    </Dialog>
  );
}

export default CreateSampleModal;
