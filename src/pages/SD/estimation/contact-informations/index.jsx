import CommonTable from "@/components/commonTable";
import ContactInfoDialogSlide from "@/components/modal/contactInfoTableModal";
import NavLayout from "@/layout/nav";
import PrimaryLayout from "@/layout/primary";
import { ContactInfoTableData, ContactInfoTableHead } from "@/utils/commonData";
import { primarySideBarData } from "@/utils/mainData";
import { Typography } from "@mui/material";
import React from "react";
// import "./contactInformation.scss";

const ContactInformation = () => {
  const [open, setOpen] = React.useState(false);

  const modalOpen = () => {
    setOpen(true);
  };

  return (
    <NavLayout>
      <PrimaryLayout dropdown={primarySideBarData} header={"My dashboard"}>
        <div>
          <div className="contactHead">
            <Typography variant="h6">Contact Information</Typography>
            <button className="addcontactbtn"> + Add Contact</button>
          </div>
          <CommonTable
            columns={ContactInfoTableHead}
            rows={ContactInfoTableData}
            modalOpen={setOpen}
            // custom styles
            customStyles={{
              tableContainer: {
                boxShadow: "none",
              },
              tableHeaderCell: {
                fontWeight: "bold",
                backgroundColor: "#e1eeff",
                color: "black",
                fontSize: "14px",
                padding: "10px",
                borderBottom: "0px",
              },
              tableRowEven: {
                backgroundColor: "white",
              },
              tableRowOdd: {
                backgroundColor: "#f9fbff",
              },
              tableCell: {
                color: "black",
                padding: "10px",
                borderBottom: "0px",
                fontSize: "14px",
              },
            }}
          />
          <ContactInfoDialogSlide
            open={open}
            handleClose={() => setOpen(false)}
          />
        </div>
      </PrimaryLayout>
    </NavLayout>
  );
};

export default ContactInformation;
