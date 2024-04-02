import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { AiFillFlag } from "react-icons/ai";
import { CgOrganisation } from "react-icons/cg";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import { HiUser } from "react-icons/hi2";
import { GrNotes } from "react-icons/gr";
import { FaRegCalendarMinus } from "react-icons/fa6";
import { FaRegCalendarPlus } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import "../leadStyles.scss";
import { Button } from "@mui/material";
import Notes from "./menu/notes";
import Activity from "./menu/activity";
import MeetingScheduler from "./menu/meetingScheduler";
import Call from "./menu/call";
import Email from "./menu/email";
import Files from "./menu/files";
import Documents from "./menu/documents";
import Invoice from "./menu/invoice";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  //   borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const SummaryPage = () => {
  const [expanded, setExpanded] = useState("panel1");
  const [activeTab, setActiveTab] = useState("Notes");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const summaryData = [
    {
      icon: <LiaMoneyBillSolid className="summary-data-icon" />,
      title: "BHD 100,00.000",
      color: false,
    },
    {
      icon: <AiFillFlag className="summary-data-icon" />,
      title: "January 18, 2024",
      color: false,
    },
    {
      icon: (
        <FaRegUser
          className="summary-data-icon-color"
          style={{ fontSize: "14px" }}
        />
      ),
      title: "Naveen Kumar",
      color: true,
    },
    {
      icon: <CgOrganisation className="summary-data-icon-color" />,
      title: "ABCD Company",
      color: true,
    },
  ];

  const personData = [
    {
      label: (
        <div
          style={{
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            backgroundColor: "rgba(33, 35, 44, 0.07)",
            marginRight: "10px",
          }}
        >
          <HiUser
            style={{
              height: "32px",
              width: "32px",
              borderRadius: "50%",
              padding: "5px 1px",
              color: "rgba(43, 116, 218, 1)",
              padding: "4px 0px",
              marginTop: "2px",
              marginLeft: "-1px",
            }}
          />
        </div>
      ),
      content: "Naveen Kumar",
      type: "",
      color: true,
    },
    {
      label: "Phone",
      content: "+973 39794758 ",
      type: "(Mobile)",
      color: true,
    },
    {
      label: "Email",
      content: "abc@gmail.com",
      type: "(Work)",
      color: true,
    },
    {
      label: "First Name",
      content: "Naveen Kumar",
      type: "",
      color: false,
    },
    {
      label: "Last Name",
      content: "Naveen",
      type: "",
      color: false,
    },
  ];

  const headerData = [
    {
      icon: <GrNotes className="header-data-icon" />,
      title: "Notes",
      component: <Notes />,
    },
    {
      icon: <FaRegCalendarMinus />,
      title: "Activity",
      component: <Activity />,
    },
    {
      icon: <FaRegCalendarPlus />,
      title: "Meeting Scheduler",
      component: <MeetingScheduler />,
    },
    {
      icon: <IoCallOutline />,
      title: "Call",
      component: <Call />,
    },
    {
      icon: <MdOutlineEmail />,
      title: "Email",
      component: <Email />,
    },
    {
      icon: <IoIosAttach />,
      title: "Files",
      component: <Files />,
    },
    {
      icon: <HiOutlineDocumentText />,
      title: "Documents",
      component: <Documents />,
    },
    {
      icon: <LiaFileInvoiceDollarSolid />,
      title: "Invoice",
      component: <Invoice />,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "10px",
        backgroundColor: "#f5f5f6",
      }}
    >
      <div
        style={{
          width: "30%",
          borderRight: "1px solid rgba(33, 35, 44, 0.12)",
        }}
      >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            style={{}}
          >
            <Typography style={{ fontSize: "16px", fontWeight: 600 }}>
              Summary
            </Typography>

            <IoSettingsOutline />
          </AccordionSummary>
          <AccordionDetails>
            {summaryData?.map((data, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginBottom: "10px",
                }}
              >
                <p>{data?.icon}</p>
                <p
                  className={
                    data?.color
                      ? "summary-data-title-color"
                      : "summary-data-title"
                  }
                >
                  {data?.title}
                </p>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography style={{ fontSize: "16px", fontWeight: 600 }}>
              Details
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <EditOutlinedIcon className="details-flex-icon" />
              <MoreHorizOutlinedIcon className="details-flex-icon" />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <p className="summary-data-title">
              Add custom fields to include more details about the Pipelines.
            </p>

            <div>
              <Button variant="contained" className="custom-field-btn">
                <AddIcon sx={{ fontSize: "18px" }} /> &nbsp; Custom Field
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography style={{ fontSize: "16px", fontWeight: 600 }}>
              Person
            </Typography>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <FilterListIcon className="details-flex-icon-color" />
              <EditOutlinedIcon className="details-flex-icon" />
              <MoreHorizOutlinedIcon className="details-flex-icon" />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            {personData?.map((data, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginBottom: "10px",
                  gap: "15px",
                }}
              >
                <p
                  className={"summary-data-title"}
                  style={{
                    width: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  {data?.label}
                </p>
                <p
                  className={
                    data?.color
                      ? "summary-data-title-color"
                      : "summary-data-title"
                  }
                >
                  {data?.content}
                  <span className="summary-data-title">{data?.type}</span>
                </p>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            style={{}}
          >
            <Typography style={{ fontSize: "16px", fontWeight: 600 }}>
              Organization
            </Typography>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <FilterListIcon className="details-flex-icon-color" />
              <EditOutlinedIcon className="details-flex-icon" />
              <MoreHorizOutlinedIcon className="details-flex-icon" />
            </div>
          </AccordionSummary>
          <AccordionDetails className="flex-div">
            <p>
              <CgOrganisation className="summary-data-icon-color" />{" "}
            </p>
            <p className="summary-data-title">ABCD Company</p>
          </AccordionDetails>
        </Accordion>
      </div>

<div style={{ width: "68%", paddingRight: "20px", backgroundColor: 'white' }}>
        <div className="menu-header-container">
          <div
            style={{
              border: "1px solid rgba(33, 35, 44, 0.12)",
            }}
          >
            <div
              className="menu-header-flex-div-container"
              style={{
                width: "70%",
              }}
            >
              {headerData?.map((data, i) => (
                <div
                  key={i}
                  className="menu-header-flex-div"
                  onClick={() => {
                    setActiveTab(data?.title);
                  }}
                >
                  <p
                    className={
                      activeTab === data.title
                        ? "menu-header-icon-color"
                        : "menu-header-icon"
                    }
                  >
                    {data?.icon}
                  </p>
                  <p
                    className={
                      activeTab === data.title
                        ? "menu-header-title-color"
                        : "menu-header-title"
                    }
                  >
                    {data?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="summary-card-body">
            {headerData?.map(
              (data, i) =>
                activeTab === data.title && (
                  <div key={i} className="summary-card-body">
                    {data.component}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
