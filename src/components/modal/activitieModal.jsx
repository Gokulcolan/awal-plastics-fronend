import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Typography } from "@mui/material";
import "./contactInfoModal.scss";
import CommonTextField from "@/components/fields/commonText";
import { useFormik } from "formik";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function ActivitieCardRequestModal(props) {
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
        <div className="modalHead">
          <div className="modalTitle1">
            <Typography align="center" style={{fontWeight:"bold"}}>Sample Request</Typography>
          </div>
          <div className="closeIcon">
            <CloseIcon onClick={handleClose} sx={{fontSize:"18px"}} />
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
            }}
          >
            <label htmlFor="" style={{ marginRight: "15px" }}>
              Enter Purpose
            </label>
            <CommonTextField
              formik={formik}
              customStyles={{
                OutlinedInput: {
                  border: "2px solid #e7f0f9",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  height: "5px",
                },
              }}
            />
          </div>
        ) : (
          <div style={{ display: "block", textAlign: "center" }}>
            <CheckCircleOutlineIcon
              sx={{ fontSize: "100px", color: "#0071b9" }}
            />
            <br />
            <span>Sample Request Sent</span>
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

export default ActivitieCardRequestModal;
