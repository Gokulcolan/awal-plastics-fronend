import React from "react";
import Dialog from "@mui/material/Dialog";
import { AddressInfo, ModalDataContactInfo } from "@/utils/commonData";
import { Box, Grid, Paper, Typography } from "@mui/material";
import "./contactInfoModal.scss";
import screenshot from "../../assets/image/ModalImg/screenshot.png";
import Image from "next/image";

function ContactInfoDialogSlide({ open, setOpen, handleClose }) {
  return (
    <Dialog open={open} onClose={setOpen} maxWidth="sm">
      <div className="ContactModalPad">
        <Typography align="center" className="modalTitle">
          Contact Information
        </Typography>
        <Grid container spacing={1}>
          {ModalDataContactInfo?.map((val, i) => (
            <Grid item xs={6} key={i}>
              <Paper
                style={{
                  padding: "0px 10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "none",
                }}
              >
                <Typography className="modelFonts" style={{ width: "55%" }}>
                  {val.label}
                </Typography>
                <Typography>-</Typography>
                <Typography className="modelFonts">{val.value}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Typography align="center" className="modalTitle">
          Address Information
        </Typography>
        <Grid container spacing={1}>
          {AddressInfo?.map((val, i) => (
            <Grid item xs={6} key={i}>
              <Paper
                style={{
                  padding: "0px 10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "none",
                }}
              >
                <Typography className="modelFonts" style={{ width: "55%" }}>
                  {val.label}
                </Typography>
                <Typography>-</Typography>
                <Typography className="modelFonts">{val.value}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Typography align="center" className="modalTitle">
          Sijilat Screenshot
        </Typography>
        <div className="modalImg">
          <Image src={screenshot} alt="Screenshot" width={200} height={100} />
        </div>
        <button className="modalBtn" onClick={handleClose}>
          Close
        </button>
      </div>
    </Dialog>
  );
}

export default ContactInfoDialogSlide;
