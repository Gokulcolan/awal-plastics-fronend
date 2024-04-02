import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import "./common.scss";

const ReusableModal = ({ children, open, onClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    width: "90%",
    maxWidth: "650px",
    bgcolor: "white",
    border: "none !important",
    // padding: "60px 60px",
    borderRadius: "5px",
    height: "auto",
    // overflowY: "scroll",
  };

  return (
    // <div>
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      // disableBackdropClick
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style} className="modal-container initiate-modal">
          {children}
        </Box>
      </Fade>
    </Modal>
    // </div>
  );
};

export default ReusableModal;
