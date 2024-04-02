import React, { useState } from "react";
import CommonSelectField from "@/components/fields/commonSelect";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./menuStyles.scss";
import { Button } from "@mui/material";
import { LiaEdit } from "react-icons/lia";

function Notes() {
  const [activeTab, setActiveTab] = useState("Notes");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      contactPerson: "",
      organization: "",
      title: "",
    },
    validationSchema: Yup.object({
      contactPerson: Yup.string().required("Contact Person is required"),
      organization: Yup.string().required("Organization is required"),
      title: Yup.string().required("Title is required"),
    }),
    onSubmit: (val) => {
      console.log("Values", val);
    },
  });

  const headerData = [
    {
      title: "All",
    },
    {
      title: "Notes (0)",
    },
    {
      title: "Activities (0)",
    },
    {
      title: "Email (0)",
    },
    {
      title: "Files",
    },
    {
      title: "Documents",
    },
    {
      title: "Invoices",
    },
    {
      title: "Changelog",
    },
  ];
  return (
    <div>
      <div
        style={{
          height: "200px",
          border: "1px solid rgba(33, 35, 44, 0.12)",
          backgroundColor: "rgba(255, 246, 214, 1)",
        }}
      >
        <p
          style={{
            fontSize: "13.89px",
            fontWeight: 500,
            color: "rgba(33, 35, 44, 1)",
            padding: "10px",
          }}
        >
          Got the lead thru references and had initial level discussion
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "120px",
            padding: "0px 10px",
          }}
        >
          <div>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                color: "rgba(0, 0, 0, 1)",
                backgroundColor: "white",
                fontSize: "12px",
                fontWeight: 500,
                border: "1px solid rgba(0, 0, 0, 0.2)",
                padding: "4px 10px",
              }}
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                color: "white",
                backgroundColor: "rgba(45, 134, 71, 1)",
                fontSize: "12px",
                fontWeight: 500,
                padding: "4px 10px",
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
      <div style={{ width: "100px", marginTop: "25px" }}>
        <CommonSelectField
          id="callOptions"
          label={""}
          defaultValue={"Focus"}
          formik={formik}
          options={[]}
          // customChange={(e) => setCurrentOption(e.target.value)}
          customStyles={{
            OutlinedInput: {
              padding: "4px !important",
            },
          }}
          noBorder={true}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "rgba(0, 0, 0, 0.6)",
              textAlign: "center",
            }}
          >
            No focus items yet
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 400,
              color: "rgba(0, 0, 0, 0.6)",
              textAlign: "center",
            }}
          >
            Scheduled activities, pinned notes, email drafts and scheduled
            emails will appear here.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            style={{
              color: "rgba(13, 104, 197, 1)",
              textTransform: "capitalize",
              backgroundColor: "rgba(235, 235, 235, 1)",
              boxShadow: "none",
              padding: "2px 10px",
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            + Schedule an activity
          </Button>
        </div>
      </div>

      <div style={{ width: "100px" }}>
        <CommonSelectField
          id="callOptions"
          label={""}
          defaultValue={"History"}
          formik={formik}
          options={[]}
          // customChange={(e) => setCurrentOption(e.target.value)}
          customStyles={{
            OutlinedInput: {
              padding: "4px !important",
            },
          }}
          noBorder={true}
        />
      </div>

      <div>
        <div className="history-header-flex-div-container">
          {headerData?.map((data, i) => (
            <div
              key={i}
              className="history-header-flex-div"
              onClick={() => {
                setActiveTab(data?.title);
              }}
            >
              <p
                className={
                  activeTab === data.title
                    ? "history-header-selected"
                    : "history-header-not-selected"
                }
              >
                {data?.title}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LiaEdit
                style={{ fontSize: "40px", color: "rgba(0, 0, 0, 0.6)" }}
              />
            </div>

            <div className="history-notes">No notes added yet</div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  textTransform: "unset",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "rgba(13, 104, 197, 1)",
                  border: "none",
                }}
              >
                Add a note
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
