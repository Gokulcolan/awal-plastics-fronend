import trade from "@/assets/icons/trade.svg";
import target from "@/assets/icons/target.svg";
import sales from "@/assets/icons/sales.svg";
import Projects from "@/assets/icons/Projects.svg";
import More from "@/assets/icons/More.svg";
import Inbox from "@/assets/icons/Inbox.svg";
import feedback from "@/assets/icons/feedback.svg";
import Contacts from "@/assets/icons/Contacts.svg";
import Bhd from "@/assets/icons/Bhd.svg";
import Activities from "@/assets/icons/Activities.svg";
import blackTarget from "@/assets/icons/black-target.svg";
import building from "@/assets/icons/building.svg";
import blackUser from "@/assets/icons/black-user.svg";
import dollar from "@/assets/icons/dollar.svg";
import blackCalender from "@/assets/icons/black-calendar.svg";
import period from "@/assets/icons/period.svg";
import user from "@/assets/icons/user.svg";
import share from "@/assets/icons/share.svg";
import column from "@/assets/icons/column.svg";
import filter from "@/assets/icons/filter.svg";
import sort from "@/assets/icons/sort.svg";
import counter from "@/assets/icons/counter-sales.svg";
import email from "@/assets/icons/e-mail.svg";
import instagram from "@/assets/icons/instagram.svg";
import whatsapp from "@/assets/icons/whatsapp.svg";
import phoneCall from "@/assets/icons/phone-call.svg";
import activeInbox from "@/assets/icons/active-inbox.svg";
import { LEADS_INBOX, SALES_DASHBOARD } from "@/layout/routes/routes";
import plus from "@/assets/icons/plus-icon.svg";
import inbox from "@/assets/icons/inbox-small-icon.svg";
import archive from "@/assets/icons/archive-icon.svg";

export const sidebarData = [
  {
    id: 1,
    image: trade,
    active: true,
    path: `/SD/sales/${SALES_DASHBOARD}`,
    parent: "sales",
  },

  {
    id: 4,
    image: target,
    active: false,
    path: `/SD/${LEADS_INBOX}`,
    parent: "leads",
  },
  {
    id: 11,
    image: Bhd,
    active: false,
    path: "/SD/bhd-currency/",
    parent: "bhd-currency",
  },
  {
    id: 5,
    image: sales,
    active: false,
    // path: "/SD/estimation/",
    parent: "estimation",
  },
  {
    id: 6,
    image: Projects,
    active: false,
    // path: "/SD/Projects/",
    parent: "project",
  },

  {
    id: 8,
    image: Inbox,
    active: false,
    path: `/SD/sales-inbox/contact-informations/`,
    parent: "sales-inbox",
  },
  {
    id: 12,
    image: Activities,
    active: false,
    path: "/SD/activities-library/",
  },
  {
    id: 10,
    image: Contacts,
    active: false,
    // path: "/SD/Contacts/",/
  },
  {
    id: 9,
    image: feedback,
    active: false,
    // path: "/SD/feedback/",
  },
  {
    id: 7,
    image: More,
    active: false,
    // path: "/SD/More/",
  },
];

export const primarySideBarData = [
  {
    id: "sidebar1",
    name: "Dashboards",
    endpoint: "dashboards",
    active: true,
    children: [
      {
        id: "sidebar1-1",
        name: "Sales Dashboard",
        endpoint: "sales-dashboard",
        active: true,
      },
      {
        id: "sidebar1-2",
        name: "Manager Dashboard",
        endpoint: "manager-dashboard",
        active: false,
      },
      {
        id: "sidebar1-3",
        name: "Widget Dashboard",
        endpoint: "widget-dashboard",
        active: false,
      },
      {
        id: "sidebar1-4",
        name: "KPIs Dashboard",
        endpoint: "kpis-dashboard",
        active: false,
      },
      {
        id: "sidebar1-5",
        name: "Sales Insights Dashboard",
        endpoint: "sales-insights-dashboard",
        active: false,
      },
    ],
  },
  {
    id: "sidebar2",
    name: "Sales",
    endpoint: "sales",
    active: true,
    children: [
      {
        id: "sidebar2-1",
        name: "Sales Insights Dashboard",
        endpoint: "sales-insights-dashboard",
        active: false,
      },
    ],
  },
  {
    id: "sidebar3",
    name: "Contact",
    endpoint: "contact",
    active: true,
    children: [
      {
        id: "sidebar3-1",
        name: "Contact Information",
        endpoint: "contact-informations",
        active: false,
      },
    ],
  },
  {
    id: "sidebar4",
    name: "Reports",
    endpoint: "reports",
    active: true,
    children: [
      {
        id: "sidebar4-1",
        name: "My reports",
        endpoint: "my-reports",
        active: true,
        children: [
          {
            id: "sidebar4-1-1",
            name: "Leads created by users",
            endpoint: "leads-users",
            active: false,
            icon: blackTarget,
          },
          {
            id: "sidebar4-1-2",
            name: "New organization report",
            endpoint: "New organization report",
            active: false,
            icon: building,
          },
          {
            id: "sidebar4-1-3",
            name: "New people report",
            endpoint: "New people report",
            active: false,
            icon: blackUser,
          },
          {
            id: "sidebar4-1-4",
            name: "Leads conversion by s…",
            endpoint: "Leads conversion by s…",
            active: false,
            icon: blackTarget,
          },
          {
            id: "sidebar4-1-5",
            name: "Pipelines conversion",
            endpoint: "Pipelines conversion",
            active: false,
            icon: dollar,
          },
          {
            id: "sidebar4-1-6",
            name: "Pipelines progress",
            endpoint: "Pipelines progress",
            active: false,
            icon: dollar,
          },
          {
            id: "sidebar4-1-7",
            name: "Pipelines won over time",
            endpoint: "Pipelines won over time",
            active: false,
            icon: dollar,
          },
          {
            id: "sidebar4-1-8",
            name: "Average value of won d…",
            endpoint: "Average value of won d…",
            active: false,
            icon: dollar,
          },
          {
            id: "sidebar4-1-9",
            name: "Pipelines duration",
            endpoint: "Pipelines duration",
            active: false,
            icon: dollar,
          },
          {
            id: "sidebar4-1-10",
            name: "Activities completed an…",
            endpoint: "Activities completed an…",
            active: false,
            icon: blackCalender,
          },
          {
            id: "sidebar4-1-11",
            name: "Pipelines lost by reasons",
            endpoint: "Pipelines lost by reasons",
            active: false,
            icon: dollar,
          },
          {
            id: "sidebar4-1-12",
            name: "Products sold",
            endpoint: "Products sold",
            active: false,
            icon: dollar,
          },
        ],
      },
    ],
  },
];

export const primaryNav = [
  {
    id: "1",
    name: "period",
    label: "Period",
    image: true,
    imageSrc: period,
    drop: true,
    type: "actionButton",
  },
  {
    id: "2",
    name: "user",
    label: "User",
    image: true,
    imageSrc: user,
    drop: true,
    type: "actionButton",
  },
  {
    id: "5",
    type: "divider",
  },
  {
    id: "3",
    name: "share",
    label: "Share",
    image: true,
    imageSrc: share,
    drop: false,
    type: "actionButton",
  },
  {
    id: "4",
    name: "export",
    label: "Export",
    image: false,
    imageSrc: "",
    drop: true,
    type: "actionButton",
  },
];

export const primaryNavLeads = [
  {
    id: "1",
    name: "8-leads",
    label: "8 leads",
    type: "text",
  },
  {
    id: "2",
    name: "filter",
    label: "Filter",
    image: true,
    imageSrc: filter,
    drop: true,
    type: "actionButton",
  },
  {
    id: "3",
    name: "manage-columns",
    label: "Manage Columns",
    image: true,
    imageSrc: column,
    drop: true,
    type: "actionButton",
  },
  {
    id: "4",
    name: "everyone",
    label: "Everyone",
    image: true,
    imageSrc: sort,
    drop: true,
    type: "actionButton",
  },
  {
    id: "5",
    type: "more",
  },
];

export const primaryNavHeadLeads = [
  {
    id: "nav-head-1",
    type: "toggle-icons",
    children: [
      {
        id: "child-img-1",
        imageSrc: inbox,
        active: true,
        className: "",
      },
      {
        id: "child-img-2",
        imageSrc: archive,
        active: false,
        className: "",
      },
    ],
  },
  {
    id: "nav-head-2",
    name: "lead",
    label: "Lead",
    image: true,
    imageSrc: plus,
    drop: false,
    className: "lead-button",
    type: "actionButton",
  },
  {
    id: "nav-head-3",
    name: "existing customer",
    label: "Existing Customer",
    image: false,
    imageSrc: "",
    drop: false,
    className: "blue-button",
    type: "actionButton",
  },
  {
    id: "nav-head-4",
    name: "existing project",
    label: "Existing Project",
    image: false,
    imageSrc: "",
    drop: false,
    className: "blue-button",
    type: "actionButton",
  },
  // {
  //   id: "nav-head-5",
  //   name: "Search Leads, Projects, Customer",
  //   placeholder: "Search Leads, Projects, Customer",
  //   type: "searchBar",
  // }
];
export const primaryNavMiddleLeads = [
  {
    id: "nav-head-5",
    name: "Search Leads, Projects, Customer",
    placeholder: "Search Leads, Projects, Customer",
    type: "searchBar",
  },
];
// export const primaryNavHeadLeadsSearch=[
//   {
//     id: "nav-head-5",
//     name: "Search Leads, Projects, Customer",
//     placeholder: "Search Leads, Projects, Customer",
//     type: "searchBar",
//   },
// ]

export const leadSidebarData = [
  {
    id: "sidebar-1",
    name: "Leads Inbox",
    endpoint: "leads-inbox",
    active: false,
    icon: activeInbox,
    class: "lead-parent-list",
  },
  {
    id: "sidebar-2",
    name: "Counter Sales",
    endpoint: "counter-sales",
    active: false,
    icon: counter,
    class: "lead-parent-list",
  },
  {
    id: "sidebar-3",
    class: "capital-letter",
    name: "LEADSOURCES",
  },
  {
    id: "sidebar-4",
    name: "WhatsApp",
    endpoint: "whatsapp",
    active: false,
    icon: whatsapp,
    class: "lead-child-list",
  },
  {
    id: "sidebar-5",
    name: "Instagram",
    endpoint: "instagram",
    active: false,
    icon: instagram,
    class: "lead-child-list",
  },
  {
    id: "sidebar-6",
    name: "Phone Call",
    endpoint: "phone-call",
    active: false,
    icon: phoneCall,
    class: "child-list",
  },
  {
    id: "sidebar-7",
    name: "E-Mail",
    endpoint: "e-mail",
    active: false,
    icon: email,
    class: "lead-child-list",
  },
];

export const widgetDashboard = [
  {
    type: "primarySideBarData",
    data: [
      {
        id: "sidebar1",
        name: "Dashboards",
        // endpoint: "dashboards",
        active: true,
        children: [
          {
            id: "sidebar1-1",
            name: "Sales Dashboard",
            endpoint: "sales-dashboard",
            active: true,
          },
          {
            id: "sidebar1-2",
            name: "Manager Dashboard",
            endpoint: "manager-dashboard",
            active: false,
          },
          {
            id: "sidebar1-3",
            name: "Widget Dashboard",
            endpoint: "widget-dashboard",
            active: false,
          },
          {
            id: "sidebar1-4",
            name: "KPIs Dashboard",
            endpoint: "kpis-dashboard",
            active: false,
          },
          {
            id: "sidebar1-5",
            name: "Sales Insights Dashboard",
            endpoint: "sales-insights-dashboard",
            active: false,
          },
        ],
      },
      {
        id: "sidebar2",
        name: "Sales",
        // endpoint: "sales",
        active: true,
        children: [
          {
            id: "sidebar2-1",
            name: "Sales Enquiry Form",
            endpoint: "sales-enquiry-form",
            active: false,
          },
        ],
      },
      {
        id: "sidebar3",
        name: "Contact",
        // endpoint: "contact",
        active: true,
        children: [
          {
            id: "sidebar3-1",
            name: "Contact Information",
            endpoint: "contact-informations",
            active: false,
          },
        ],
      },
      {
        id: "sidebar4",
        name: "Reports",
        // endpoint: "reports",
        active: true,
        children: [
          {
            id: "sidebar4-1",
            name: "My reports",
            endpoint: "my-reports",
            active: true,
            children: [
              {
                id: "sidebar4-1-1",
                name: "Leads created by users",
                endpoint: "leads-users",
                active: false,
                icon: blackTarget,
              },
              {
                id: "sidebar4-1-2",
                name: "New organization report",
                endpoint: "New organization report",
                active: false,
                icon: building,
              },
              {
                id: "sidebar4-1-3",
                name: "New people report",
                endpoint: "New people report",
                active: false,
                icon: blackUser,
              },
              {
                id: "sidebar4-1-4",
                name: "Leads conversion by s…",
                endpoint: "Leads conversion by s…",
                active: false,
                icon: blackTarget,
              },
              {
                id: "sidebar4-1-5",
                name: "Pipelines conversion",
                endpoint: "Pipelines conversion",
                active: false,
                icon: dollar,
              },
              {
                id: "sidebar4-1-6",
                name: "Pipelines progress",
                endpoint: "Pipelines progress",
                active: false,
                icon: dollar,
              },
              {
                id: "sidebar4-1-7",
                name: "Pipelines won over time",
                endpoint: "Pipelines won over time",
                active: false,
                icon: dollar,
              },
              {
                id: "sidebar4-1-8",
                name: "Average value of won d…",
                endpoint: "Average value of won d…",
                active: false,
                icon: dollar,
              },
              {
                id: "sidebar4-1-9",
                name: "Pipelines duration",
                endpoint: "Pipelines duration",
                active: false,
                icon: dollar,
              },
              {
                id: "sidebar4-1-10",
                name: "Activities completed an…",
                endpoint: "Activities completed an…",
                active: false,
                icon: blackCalender,
              },
              {
                id: "sidebar4-1-11",
                name: "Pipelines lost by reasons",
                endpoint: "Pipelines lost by reasons",
                active: false,
                icon: dollar,
              },
              {
                id: "sidebar4-1-12",
                name: "Products sold",
                endpoint: "Products sold",
                active: false,
                icon: dollar,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "primaryNavHeads",
    data: [
      {
        id: "1",
        name: "my-dashboard",
        label: "My dashboard",
        type: "text",
      },
    ],
  },
  {
    type: "primaryNav",
    data: [
      {
        id: "1",
        name: "period",
        label: "Period",
        image: true,
        imageSrc: period,
        drop: true,
        type: "actionButton",
      },
      {
        id: "2",
        name: "user",
        label: "User",
        image: true,
        imageSrc: user,
        drop: true,
        type: "actionButton",
      },
      {
        id: "5",
        type: "divider",
      },
      {
        id: "3",
        name: "share",
        label: "Share",
        image: true,
        imageSrc: share,
        drop: false,
        type: "actionButton",
      },
      {
        id: "4",
        name: "export",
        label: "Export",
        image: false,
        imageSrc: "",
        drop: true,
        type: "actionButton",
      },
    ],
  },
];

export const LeadDashboard = [
  {
    type: "primarySideBarData",
    data: [
      {
        id: "sidebar-1",
        name: "Leads Inbox",
        endpoint: "leads-inbox",
        active: false,
        icon: activeInbox,
        class: "lead-parent-list",
      },
      {
        id: "sidebar-2",
        name: "Counter Sales",
        endpoint: "counter-sales",
        active: false,
        icon: counter,
        class: "lead-parent-list",
      },
      {
        id: "sidebar-3",
        class: "capital-letter",
        name: "LEADSOURCES",
      },
      {
        id: "sidebar-4",
        name: "WhatsApp",
        endpoint: "whatsapp",
        active: false,
        icon: whatsapp,
        class: "lead-child-list",
      },
      {
        id: "sidebar-5",
        name: "Instagram",
        endpoint: "instagram",
        active: false,
        icon: instagram,
        class: "lead-child-list",
      },
      {
        id: "sidebar-6",
        name: "Phone Call",
        endpoint: "phone-call",
        active: false,
        icon: phoneCall,
        class: "child-list",
      },
      {
        id: "sidebar-7",
        name: "E-Mail",
        endpoint: "e-mail",
        active: false,
        icon: email,
        class: "lead-child-list",
      },
    ],
  },
  {
    type: "primaryNavHeads",
    data: [
      {
        id: "nav-head-1",
        type: "toggle-icons",
        children: [
          {
            id: "child-img-1",
            imageSrc: inbox,
            active: false,
            className: "",
          },
          {
            id: "child-img-2",
            imageSrc: archive,
            active: false,
            className: "",
          },
        ],
      },
      {
        id: "nav-head-2",
        name: "lead",
        label: "Lead",
        image: true,
        imageSrc: plus,
        drop: false,
        className: "lead-button",
        type: "actionButton",
      },
      {
        id: "nav-head-3",
        name: "existing customer",
        label: "Existing Customer",
        image: false,
        imageSrc: "",
        drop: false,
        className: "blue-button",
        type: "actionButton",
      },
      {
        id: "nav-head-4",
        name: "existing project",
        label: "Existing Project",
        image: false,
        imageSrc: "",
        drop: false,
        className: "blue-button",
        type: "actionButton",
      },
      {
        id: "nav-head-5",
        name: "Search Leads, Projects, Customer",
        placeholder: "Search Leads, Projects, Customer",
        type: "searchBar",
      },
    ],
  },
  {
    type: "primaryNav",
    data: [
      {
        id: "1",
        name: "8-leads",
        label: "8 leads",
        type: "text",
      },
      {
        id: "2",
        name: "filter",
        label: "Filter",
        image: true,
        imageSrc: filter,
        drop: true,
        type: "actionButton",
      },
      {
        id: "3",
        name: "manage-columns",
        label: "Manage Columns",
        image: true,
        imageSrc: column,
        drop: true,
        type: "actionButton",
      },
      {
        id: "4",
        name: "everyone",
        label: "Everyone",
        image: true,
        imageSrc: sort,
        drop: true,
        type: "actionButton",
      },
      {
        id: "5",
        type: "more",
      },
    ],
  },
];

export const dndData = [
  {
    title: "Qualified",
    cards: [
      { id: 1, leadName: "Awal Plastics Lead 1", amount: "BHD 34,600" },
      { id: 2, leadName: "Another Lead 2", amount: "BHD 45,800" },
    ],
  },
  {
    title: "Contact Made",
    cards: [
      { id: 3, leadName: "Awal Plastics Lead 3", amount: "BHD 34,600" },
      { id: 4, leadName: "Awal Plastics Lead 4", amount: "BHD 34,600" },
    ],
  },
  {
    title: "Demo Scheduled",
    cards: [{ id: 5, leadName: "Awal Plastics Lead 5", amount: "BHD 34,600" }],
  },
  {
    title: "Proposal Made",
    cards: [{ id: 6, leadName: "Awal Plastics Lead 6", amount: "BHD 34,600" }],
  },
  {
    title: "Negotiations Started",
    cards: [{ id: 7, leadName: "Awal Plastics Lead 7", amount: "BHD 34,600" }],
  },
];
