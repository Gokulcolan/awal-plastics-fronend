import { LEADS_INBOX, WIDGET_DASHBOARD } from "@/layout/routes/routes";
import { widgetDashboard, LeadDashboard } from "@/utils/mainData";

export const LayoutData = [
  { id: 0, path: WIDGET_DASHBOARD, data: widgetDashboard,parent:"sales" },
  {
    id: 1,
    path: LEADS_INBOX,
    data: LeadDashboard,
    parent:'leads'
  },
];
