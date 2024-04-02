import React from "react";

import BusinessIcon from "@mui/icons-material/Business";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import CallEndIcon from "@mui/icons-material/CallEnd";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TaskIcon from "@mui/icons-material/Task";
import DescriptionIcon from "@mui/icons-material/Description";

export const addresstitle = [
  {
    icon: <BusinessIcon />,
    textfield: true,
    id: "Enter Building Number",
  },
  {
    icon: <AddRoadIcon />,
    textfield: true,
    id: "Enter Road Number",
  },
  {
    icon: <EditRoadIcon />,
    textfield: true,
    id: "Enter Area",
  },
  {
    textfield: true,
    id: "Attn",
  },
  {
    icon: <CallEndIcon />,
    textfield: true,
    id: "Telephone Number",
  },
  {
    icon: <PhoneIphoneIcon />,
    textfield: true,
    id: "Mobile Number",
  },
  {
    icon: <LocalPrintshopIcon />,
    textfield: true,
    id: "Fax Number",
  },
  {
    icon: <MailOutlineIcon />,
    textfield: true,
    id: "E-Mail ID",
  },
];
export const projectData = [
  {
    icon: <BusinessIcon />,
    textfield: true,
    id: "Enter Project Name",
  },

  {
    icons: <TaskIcon />,
    select: true,
    id: "Select Project Mode",
  },
  {
    icons: <DescriptionIcon />,
    select: true,
    id: "Select Cost Mode",
  },
];
export const technicalData = [
  {
    select: true,
    id: "Select Sign Type",
  },
  {
    select: true,
    id: "Materials",
  },
  {
    select: true,
    id: "Material Thickness",
  },
  {
    select: true,
    id: "Material Grade",
  },
  {
    select: true,
    id: "Type",
  },
  {
    select: true,
    id: "Letter Return",
  },
  {
    select: true,
    id: "Profile",
  },
  {
    select: true,
    id: "Illumination Type",
  },
  {
    empty: true,
  },
  {
    select: true,
    id: "ATM",
  },
  {
    select: true,
    id: "Media",
  },
  {
    select: true,
    id: "Lamination",
  },
  {
    select: true,
    id: "Select Digital Printing",
  },
  {
    select: true,
    id: "Reflective",
  },
  {
    select: true,
    id: "Embroidery",
  },
  {
    select: true,
    id: "Cloth Type",
  },
  {
    filled: true,
    id: "Describe :",
  },
  {
    select: true,
    id: "Product Type",
  },
  {
    filled: true,
    id: "Describe :",
  },
  {
    select: true,
    id: "Select Paint Finish",
  },
  {
    select: true,
    id: "Maintenance",
  },
  {
    filledlong: true,
    id: "Material Specification :",
  },
  {
    textfield: true,
    id: "Previous Costing Estimation Number",
  },
  {
    textfield: true,
    id: "Quotation Number",
  },
  {
    textfield: true,
    id: "LPO Number",
  },
  {
    filledsingle: true,
    id: "Competitor (If ANY)",
  },
  {
    textfield: true,
    id: "Other Specific Information",
  },
  {
    textfield: true,
    id: "Height of Installation In Mtrs",
  },
  {
    textfield: true,
    id: "Surface Of Installation",
  },
  {
    select: true,
    id: "Select Time Of Installation",
  },
  {
    select: true,
    id: "Choose Permit Requirement",
  },
  {
    select: true,
    id: "Removable Of Existing Sign",
  },
  {
    filled: true,
    id: "If Yes Please Describe :",
  },
  {
    select: true,
    id: "Installation Equipment",
  },
  {
    select: true,
    id: "Power Availability",
  },
  {
    select: true,
    id: "Generator Required",
  },
  {
    select: true,
    id: "Delivery",
  },
  {
    select: true,
    id: "Packaging",
  },
  {
    select: true,
    id: "Palette",
  },
  {
    select: true,
    id: "Logistic Transportation",
  },
  {
    select: true,
    id: "Specify Mode",
  },
  {
    select: true,
    id: "Unboxing Facility At Site",
  },
];

export const commercialData = [
  {
    select: true,
    id: "Terms Of Payment",
  },
  {
    select: true,
    id: "Price Mode",
  },
];

const CommonFeildNames = () => {
  return <></>;
};

export default CommonFeildNames;
