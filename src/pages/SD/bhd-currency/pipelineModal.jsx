import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import CommonTextField from "../../../components/fields/commonText";
import CommonSelectField from "../../../components/fields/commonSelect";
import CommonTextArea from "../../../components/fields/commonTextArea";
import CommonUploadFile from "../../../components/fields/commonUploadFile";
import { InputAdornment } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { BiGridAlt } from "react-icons/bi";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./dealsStyles.scss";

function PipelineModal({ handleCloseModal }) {
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
  return (
    <div>
      <div className="pipeline-header-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px",
            backgroundColor: "rgba(245, 245, 246, 1)",
            borderBottom: "1px solid rgba(33, 35, 44, 0.12)",
          }}
        >
          <p style={{ color: "rgba(33, 35, 44, 1)" }}>Add Pipelines</p>
          <CloseIcon
            onClick={handleCloseModal}
            style={{
              fontSize: "20px",
              color: "rgba(33, 35, 44, 1)",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <div
        className="pipeline-body-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px",
          height: "600px",
          overflowY: "scroll",
        }}
      >
        <div
          style={{
            width: "50%",
            borderRight: "1px solid rgba(33, 35, 44, 0.12)",
            paddingRight: "16px",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <div style={{ marginBottom: "10px", marginTop: "110px" }}>
              <CommonTextField
                formik={formik}
                labelClassName={"label-pipeline-modal"}
                inputProps={{
                  sx: {},
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineOutlinedIcon
                        sx={{
                          color: "black",
                          fontSize: "18px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                customStyles={{
                  OutlinedInput: {
                    padding: "4px !important",
                  },
                }}
                id="contactPerson"
                label="Contact Person"
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <CommonTextField
                formik={formik}
                labelClassName={"label-pipeline-modal"}
                inputProps={{
                  sx: {},
                  startAdornment: (
                    <InputAdornment position="start">
                      <CorporateFareIcon
                        sx={{
                          color: "black",
                          fontSize: "18px",
                          paddingLeft: "-5px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                customStyles={{
                  OutlinedInput: {
                    padding: "4px !important",
                    color: "rgba(101, 104, 111, 1)",
                  },
                }}
                id="organization"
                label="Organization"
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <CommonTextField
                formik={formik}
                labelClassName={"label-pipeline-modal"}
                customStyles={{
                  OutlinedInput: {
                    padding: "4px !important",
                    color: "rgba(101, 104, 111, 1)",
                  },
                }}
                id="title"
                label="Title"
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <div style={{ width: "49%" }}>
                <CommonTextField
                  formik={formik}
                  labelClassName={"label-pipeline-modal"}
                  customStyles={{
                    OutlinedInput: {
                      padding: "4px !important",
                      color: "rgba(101, 104, 111, 1)",
                    },
                  }}
                  id="title"
                  label="Value"
                />
              </div>
              <div style={{ width: "49%", marginTop: "27px" }}>
                <CommonSelectField
                  id="callOptions"
                  label={""}
                  defaultValue={"BHD"}
                  formik={formik}
                  options={[]}
                  // customChange={(e) => setCurrentOption(e.target.value)}
                  customStyles={{
                    OutlinedInput: {
                      padding: "4px !important",
                    },
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <CommonSelectField
                id="callOptions"
                label={"Labels"}
                defaultValue={""}
                labelClassName={"label-pipeline-modal"}
                formik={formik}
                options={[]}
                // customChange={(e) => setCurrentOption(e.target.value)}
                customStyles={{
                  OutlinedInput: {
                    padding: "4px !important",
                  },
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <p style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "10px" }}>
                  Add Products
                </p>
              </div>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <CommonSelectField
                id="callOptions"
                label={"Pipeline"}
                defaultValue={"Pipeline"}
                labelClassName={"label-pipeline-modal"}
                formik={formik}
                options={[]}
                // customChange={(e) => setCurrentOption(e.target.value)}
                customStyles={{
                  OutlinedInput: {
                    padding: "4px !important",
                  },
                }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <CommonSelectField
                id="callOptions"
                label={"Owner"}
                defaultValue={"John Doe (You)"}
                labelClassName={"label-pipeline-modal"}
                formik={formik}
                options={[]}
                // customChange={(e) => setCurrentOption(e.target.value)}
                customStyles={{
                  OutlinedInput: {
                    padding: "4px !important",
                  },
                }}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <CommonTextField
                formik={formik}
                labelClassName={"label-pipeline-modal"}
                placeholder={"MM/DD/YYYY"}
                customStyles={{
                  OutlinedInput: {
                    padding: "4px !important",
                    color: "rgba(101, 104, 111, 1)",
                  },
                }}
                id="closeDate"
                label="Expected Close Date"
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <CommonSelectField
                id="callOptions"
                label={"Visible to"}
                defaultValue={"Item owner's visibility group"}
                labelClassName={"label-pipeline-modal"}
                formik={formik}
                inputProps={{
                  sx: {},
                  startAdornment: (
                    <InputAdornment position="start">
                      <BiGridAlt
                        style={{
                          color: "black",
                          fontSize: "18px",
                          paddingLeft: "-5px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                options={[]}
                // customChange={(e) => setCurrentOption(e.target.value)}
                customStyles={{
                  OutlinedInput: {
                    padding: "4px !important",
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            width: "50%",
            paddingLeft: "16px",
            marginTop: 0,
            marginTop: "-65px",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "19%" }}>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "rgba(33, 35, 44, 1)",
                    marginBottom: "10px",
                  }}
                >
                  PERSON
                </p>
              </div>
              <div style={{ width: "81%", marginTop: "5px" }}>
                <hr />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <div style={{ width: "49%" }}>
                <CommonTextField
                  formik={formik}
                  labelClassName={"label-pipeline-modal"}
                  customStyles={{
                    OutlinedInput: {
                      padding: "4px !important",
                      color: "rgba(101, 104, 111, 1)",
                    },
                  }}
                  id="title"
                  label="Phone"
                />
              </div>
              <div style={{ width: "49%", marginTop: "27px" }}>
                <CommonSelectField
                  id="callOptions"
                  label={""}
                  defaultValue={"Work"}
                  formik={formik}
                  options={[]}
                  // customChange={(e) => setCurrentOption(e.target.value)}
                  customStyles={{
                    OutlinedInput: {
                      padding: "4px !important",
                    },
                  }}
                />
              </div>
            </div>

            <div>
              <Button
                sx={{
                  textTransform: "capitalize",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(101, 104, 111, 1)",
                }}
              >
                {" "}
                <AddSharpIcon
                  sx={{
                    fontSize: "14px",
                    marginRight: "5px",
                    marginBottom: "3px",
                  }}
                />{" "}
                Add phone
              </Button>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <div style={{ width: "49%" }}>
                <CommonTextField
                  formik={formik}
                  labelClassName={"label-pipeline-modal"}
                  customStyles={{
                    OutlinedInput: {
                      padding: "4px !important",
                      color: "rgba(101, 104, 111, 1)",
                    },
                  }}
                  id="title"
                  label="Email"
                />
              </div>
              <div style={{ width: "49%", marginTop: "27px" }}>
                <CommonSelectField
                  id="callOptions"
                  label={""}
                  defaultValue={"Work"}
                  formik={formik}
                  options={[]}
                  // customChange={(e) => setCurrentOption(e.target.value)}
                  customStyles={{
                    OutlinedInput: {
                      padding: "4px !important",
                    },
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(101, 104, 111, 1)",
                }}
              >
                {" "}
                <AddSharpIcon
                  sx={{
                    fontSize: "14px",
                    marginRight: "5px",
                    marginBottom: "3px",
                  }}
                />{" "}
                Add email
              </Button>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <p
                className="label-pipeline-modal"
                style={{ marginBottom: "8px" }}
              >
                Notes
              </p>
              <CommonTextArea
                id="reason"
                formik={formik}
                placeholder={""}
                height={100}
              />
            </div>

            <div>
              <CommonUploadFile
                id="uploadFile"
                formik={formik}
                label={"Upload"}
                labelClassName={"label-pipeline-modal"}
                placeholder={"Browse"}
              />
            </div>

            <div style={{ marginBottom: "10px" }}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(101, 104, 111, 1)",
                }}
              >
                {" "}
                <AddSharpIcon
                  sx={{
                    fontSize: "14px",
                    marginRight: "5px",
                    marginBottom: "3px",
                  }}
                />{" "}
                Add Attachment
              </Button>
            </div>
            <div>
              <p> </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pipeline-footer-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "8px",
            backgroundColor: "rgba(245, 245, 246, 1)",
            borderTop: "1px solid rgba(33, 35, 44, 0.12)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <div>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  fontWeight: 600,
                  boxShadow: "none",
                  border: "1px solid rgba(33, 35, 44, 0.24)",
                  padding: "4px 14px",
                  color: "rgba(33, 35, 44, 1)",
                }}
              >
                Cancel
              </Button>
            </div>

            <div>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(45, 134, 71, 1)",
                  textTransform: "capitalize",
                  fontSize: "14px",
                  fontWeight: 600,
                  boxShadow: "none",
                  border: "1px solid rgba(33, 35, 44, 0.24)",
                  padding: "4px 14px",
                  color: "white",
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PipelineModal;
