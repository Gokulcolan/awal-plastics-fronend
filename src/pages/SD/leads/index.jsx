import React from "react";
import {
  leadSidebarData,
  primaryNavHeadLeads,
  primaryNavLeads,
} from "@/utils/mainData";
import CommonLayout from "@/layout/commonLayout";
import LeadsInbox from "./leads-inbox";

const Leads = () => {
  return <LeadsInbox />;
};

Leads.getLayout = (page) => (
  <CommonLayout
    primaryData={{
      search: false,
      heading: false,
      primarySideBar: leadSidebarData,
      primaryNavBar: primaryNavLeads,
      primaryNavHeadingData: primaryNavHeadLeads,
    }}
  >
    {page}
  </CommonLayout>
);

export default Leads;
