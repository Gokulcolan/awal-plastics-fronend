import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { BiBarChartAlt2 } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AddIcon from "@mui/icons-material/Add";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { IoFilterSharp } from "react-icons/io5";
import ReusableModal from "../../../components/modals/reusableModal";
import { IoMdAdd } from "react-icons/io";
import PipelineModal from "./pipelineModal";

function DealsNav() {
  const [age, setAge] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          padding: "4px 12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div>
            <ButtonGroup
              size="large"
              aria-label="Small button group"
              sx={{
                ".MuiButtonGroup-grouped": {
                  borderColor: "rgba(33, 35, 44, 0.24)",
                  margon: 0,
                  padding: "7px 14px",
                },
              }}
            >
              <Button key="icon1">
                <BiBarChartAlt2
                  style={{
                    height: "22px",
                    width: "22px",
                    transform: "rotate(180deg)",
                    color: "black",
                  }}
                />
              </Button>
              <Button key="icon2">
                <FiMenu
                  style={{ height: "22px", width: "22px", color: "black" }}
                />
              </Button>
              <Button key="icon3">
                <CurrencyExchangeIcon
                  sx={{ fontSize: "20px", color: "black" }}
                />
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2D8647",
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: 600,
                boxShadow: "none",
              }}
              onClick={openModal}
            >
              <IoMdAdd style={{ fontSize: "17px", marginRight: "10px" }} />
              Pipelines
            </Button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#21232C" }}>
              Rs468,806.50
            </p>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#21232C" }}>
              3 Pipelines
            </p>
          </div>
          <div>
            <ButtonGroup
              size="large"
              aria-label="Small button group"
              sx={{
                ".MuiButtonGroup-grouped": {
                  borderColor: "rgba(33, 35, 44, 0.24)",
                },
              }}
            >
              <Button key="icon1">
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": {
                      border: 0,
                    },
                    "& .MuiSelect-select": {
                      padding: "0px",
                      margin: "0px",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em
                      style={{
                        marginRight: "10px",
                        textTransform: "capitalize",
                      }}
                    >
                      <BiBarChartAlt2
                        style={{
                          height: "18px",
                          width: "18px",
                          transform: "rotate(180deg)",
                          marginBottom: "-5px",
                        }}
                      />{" "}
                      Pipeline
                    </em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Button>
              <Button key="icon2">
                <EditOutlinedIcon
                  style={{
                    height: "19px",
                    width: "19px",
                    color: "black",
                    transform: "rotate(7deg)",
                  }}
                />
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                boxShadow: "none",
                "& .MuiSelect-select": {
                  padding: "10px",
                  margin: "0px",
                },
              }}
            >
              <MenuItem value="">
                <em style={{ marginRight: "10px", fontSize: "14px" }}>
                  <IoFilterSharp
                    style={{
                      height: "18px",
                      width: "18px",
                      marginBottom: "-5px",
                    }}
                  />{" "}
                  Everyone
                </em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
      </div>

      <ReusableModal open={isModalOpen} onClose={closeModal}>
        <PipelineModal handleCloseModal={closeModal} />
      </ReusableModal>
    </>
  );
}

export default DealsNav;
