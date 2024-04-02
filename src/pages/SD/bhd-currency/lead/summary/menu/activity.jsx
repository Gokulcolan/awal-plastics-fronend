import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { ImFlag } from "react-icons/im";
import { MdOutlineAccessTime } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TbBoxMultiple } from "react-icons/tb";
import { RiFile4Fill } from "react-icons/ri";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { IoIosContact } from "react-icons/io";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { LuBuilding2 } from "react-icons/lu";
import "react-datepicker/dist/react-datepicker.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import "react-big-calendar/lib/css/react-big-calendar.css";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa6";
import OutlinedInput from "@mui/material/OutlinedInput";
function Activity() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChanges = (event) => {
    setSelectedOption(event.target.value);
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <div
        className="activity"
        style={{ border: "1px solid #E4E4E5", backgroundColor: "white" }}
      >
        <div className="left-part" style={{ borderRight: "1px solid #E4E4E5" }}>
          <div
            style={{
              marginLeft: "10px",

              width: "95%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                "& > *": {
                  m: 1,
                  alignItems: "baseline",
                  marginLeft: "3rem",
                  marginTop: "10px",
                },
              }}
            >
              <OutlinedInput
                id="outlined-adornment-weight"
                placeholder="Meeting"
                variant="outlined"
                style={{}}
                sx={{
                  input: {
                    fontSize: "22.82px",
                    color: " #65686F",
                    width: "94%",
                    fontWeight: 500,
                    "&::placeholder": {
                      opacity: 1,
                    },
                  },
                  label: { color: "blue" },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "20.82px",
                    fontWeight: "600",
                    verticalAlign: "middle",
                  },
                }}
                inputProps={{
                  style: { padding: "7px" },
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                "& > *": {
                  m: 1,
                  alignItems: "baseline",
                  marginLeft: "3rem",
                  marginTop: "10px",
                },
              }}
            >
              <ButtonGroup
                aria-label="Basic button group"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                <Button
                  className="custom-outline"
                  style={{ textTransform: "none", marginBottom: "8px", border: '1px solid #d1d1d4', color: 'black' }}
                >
                  <MdPhoneInTalk
                    style={{ paddingRight: "10px", fontSize: "30px" }}
                  />
                  Call
                </Button>
                <Button
                  className="custom-outline"
                  style={{ textTransform: "none", marginBottom: "8px", border: '1px solid #d1d1d4', color: 'black' }}
                >
                  <IoMdContacts
                    style={{ paddingRight: "10px", fontSize: "30px" }}
                  />
                  Meeting
                </Button>
                <Button
                  className="custom-outline"
                  style={{ textTransform: "none", marginBottom: "8px", border: '1px solid #d1d1d4', color: 'black' }}
                >
                  <MdOutlineAccessTime
                    style={{ paddingRight: "10px", fontSize: "30px" }}
                  />
                  Task
                </Button>
                <Button
                  className="custom-outline"
                  style={{ textTransform: "none", marginBottom: "8px", border: '1px solid #d1d1d4', color: 'black' }}
                >
                  <ImFlag style={{ paddingRight: "10px", fontSize: "30px" }} />
                  Deadline
                </Button>
                <Button
                  className="custom-outline"
                  style={{ textTransform: "none", marginBottom: "8px", border: '1px solid #d1d1d4', color: 'black' }}
                >
                  <HiOutlineMailOpen
                    style={{ paddingRight: "10px", fontSize: "30px" }}
                  />
                  Email
                </Button>
              </ButtonGroup>
            </Box>

            <div
              className="date-time"
              style={{ marginTop: "10px", display: "flex" }}
            >
              <MdOutlineAccessTime
                style={{
                  fontSize: "x-large",
                  color: "#65686F",
                  verticalAlign: "middle",
                }}
              />
              <div style={{ marginLeft: "25px" }}>
                <TextField
                  style={{ marginRight: "10px", width: '150px' }}
                  id="outlined-basic"
                  label="Jan 16, 2024"
                  variant="outlined"
                  size="small"
                  InputLabelProps={{
                    style: {},
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                <TextField
                  id="outlined-basic"
                  label="h: mm PM"
                  variant="outlined"
                  size="small"
                  style={{ width: "130px", marginRight: "10px" }}
                  InputProps={{}}
                />

                <span
                  style={{
                    verticalAlign: "-webkit-baseline-middle",
                    marginRight: "10px", color: '#595a61'
                  }}
                >
                  _
                </span>

                <TextField
                  id="outlined-basic"
                  label="h: mm PM"
                  variant="outlined"
                  size="small"
                  style={{ width: "130px", marginRight: "15px" }}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                <TextField
                  id="outlined-basic"
                  label="Jan 16, 2024"
                  variant="outlined"
                  size="small"
                  style={{ width: "170px", marginRight: "15px" }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </div>




            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
                width: "100%",
              }}
            >
              <HiOutlineDotsHorizontal
                style={{ fontSize: "x-large", color: "#65686F" }}
              />
              <p
                style={{
                  marginLeft: "24px",
                  color: "#0D68C5",
                  fontSize: "18px",
                }}
              >
                <span style={{ color: "black" }}>Add</span> guests, location,
                video call,description
              </p>
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TbBoxMultiple
                style={{ fontSize: "x-large", color: "#65686F" }}
              />
              <ButtonGroup
                sx={{
                  userSelect: "none",
                  boxShadow: "0px 1px 2px 0px rgba(42, 54, 71, 0.05)",
                  marginLeft: "25px",
                }}
              >
                <Button
                  sx={{
                    border: "1px solid rgba(33, 35, 44, 0.24)",
                    borderRight: "none",
                    textTransform: "capitalize",

                    fontSize: "14px",

                    paddingRight: "5px",
                    paddingLeft: "10px",
                    color: ' #21232C'

                  }}
                >
                  Free
                </Button>
                <Button
                  sx={{
                    border: "1px solid rgba(33, 35, 44, 0.24)",
                    borderLeft: "none",
                    paddingRight: "4px",
                  }}
                  size="small"
                >
                  <ArrowDropDownIcon sx={{ color: "rgba(33, 35, 44, 0.72)" }} />
                </Button>
              </ButtonGroup>
              <CiCircleInfo
                style={{
                  fontSize: "xx-large",
                  paddingLeft: "10px",
                  verticalAlign: "middle",
                }}
              />
            </div>

            <div>
              <div style={{ display: "flex" }}>
                <RiFile4Fill
                  style={{
                    fontSize: "x-large",
                    verticalAlign: "top",
                    color: "#65686F",
                  }}
                />

                <textarea
                  cols="10"
                  rows="7"
                  style={{
                    resize: "none",
                    backgroundColor: "#FFF6D6",
                    outline: "none",
                    marginLeft: "22px",
                    width: "110%",
                    border: "1px solid #F6EDCF",
                    borderRadius: "5px",
                    height: "105px",
                  }}
                ></textarea>
              </div>

              <p
                style={{
                  margin: "0 0 1rem 45px",
                  color: "#65686F",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Notes are visible within Pipedrive, but not to event guests
              </p>
            </div>

            <div style={{ display: "flex" }}>
              <IoIosContact style={{ fontSize: "x-large", color: "#65686F" }} />
              <Select
                value={selectedOption}
                onChange={handleChange}
                displayEmpty
                style={{ width: "95%", border: "none", marginLeft: "22px" }}
                sx={{ p: 0, '& .MuiOutlinedInput-input': { p: '10px' } }}
              >
                <MenuItem value="">John</MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
            </div>

            <div style={{ marginTop: "1rem", display: 'flex' }}>
              <InsertLinkOutlinedIcon
                style={{ fontSize: "x-large", color: "#65686F" }}
              />

              <div style={{ marginLeft: '20px', display: 'flex', border: '1px solid #d1d1d4', width: '100%', padding: '10px 10px 8px 10px', borderRadius: "5px" }}>
                <h4 style={{ width: '96%', color: '#65686F' }}>file name</h4>
                <CloseOutlinedIcon style={{ color: '#65686F' }} />
              </div>

            </div>

            <div style={{ marginLeft: '44px', display: 'flex', border: '1px solid #d1d1d4', padding: '10px 10px 8px 10px', marginTop: '10px', borderRadius: "5px" }}>
              <IoPersonOutline style={{ marginTop: '5px' }} />

              <div style={{ width: '96%' }}>
                <div style={{ border: '1px solid #d1d1d4', padding: '0px 10px 0px 8px', display: 'flex', width: '7rem', marginLeft: '10px', borderRadius: '2px' }}>
                  <CloseOutlinedIcon style={{ color: '#65686F' }} />
                  <h4 style={{
                    color: '#65686F', paddingTop: '3px'
                  }}>John</h4></div>
              </div>
              <CloseOutlinedIcon style={{ color: '#65686F' }} />
            </div>


            <div style={{ marginLeft: '44px', display: 'flex', border: '1px solid #d1d1d4', padding: '10px 10px 8px 10px', marginTop: '10px', marginBottom: '20px', borderRadius: "5px", }}>
              <LuBuilding2 style={{ color: '#65686F' }} />
              <h4 style={{ width: '96%', color: '#65686F', marginLeft: '10px' }}>file name</h4>
              <CloseOutlinedIcon style={{ color: '#65686F' }} />
            </div>
          </div>




          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "end",
              backgroundColor: "#F5F5F6",
              padding: "10px 15px",
            }}
          >
            <input type="checkbox" />
            <label htmlFor="" style={{ marginLeft: "10px", fontSize: "15px" }}>
              Mark as done
            </label>
            <Button
              variant="outlined"
              style={{
                color: "black",
                borderColor: "rgb(152 152 159)",
                marginLeft: "10px",
                textTransform: "none",
                backgroundColor: "white",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#2D8647",
                marginLeft: "10px",
                textTransform: "none",
              }}
            >
              Save
            </Button>
          </div>
        </div>

        <div className="right-part"></div>
      </div>

      <div
        className="focus-container"
        style={{ backgroundColor: "#F5F5F6", marginTop: "2rem" }}
      >
        <Button variant="text" style={{ color: "black" }}>
          Focus
        </Button>
        <IoIosArrowDown style={{ verticalAlign: "text-bottom" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "18px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #E7E7E8",
            }}
          >
            <BsFillPeopleFill style={{ color: "#65686F" }} />
          </div>

          <div
            style={{
              backgroundColor: "white",
              width: "95%",
              padding: "15px",
              border: "1px solid #E7E7E8",
            }}
          >
            <div style={{ display: "flex" }}>
              <FaRegCircle
                style={{ paddingRight: "8px", fontSize: "x-large" }}
              />
              <h4>Meeting</h4>
            </div>
            <div
              style={{
                display: "flex",
                gap: "18px",
                paddingTop: "5px",
                fontSize: "11px",
              }}
            >
              <p>
                <span style={{ color: "green", paddingRight: "7px" }}>
                  Today
                </span>
                John
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <IoPersonOutline />
                John
              </p>
              <div style={{ display: 'flex' }}>
                <LuBuilding2 style={{ color: '#65686F' }} /> <p style={{ marginLeft: '5px' }}>File name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Activity;
