import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { PiUserCircleFill } from "react-icons/pi";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { HiUser } from "react-icons/hi2";
import { AiFillAppstore } from "react-icons/ai";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";

const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merge",
];

function LeadNav() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 20px",
      }}
    >
      <div>
        <p style={{ fontSize: "25px", fontWeight: 400 }}>Awal Plastic Lead</p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <div>
          <ButtonGroup
            ref={anchorRef}
            aria-label="Button group with a nested menu"
            sx={{ border: "none", userSelect: "none" }}
          >
            <Button
              onClick={handleClick}
              sx={{
                border: "none",
                textTransform: "capitalize",
                color: "rgba(33, 35, 44, 1)",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              <div
                style={{
                  height: "38px",
                  width: "38px",
                  borderRadius: "50%",
                  border: "1px solid rgba(33, 35, 44, 0.24)",
                  backgroundColor: "rgba(33, 35, 44, 0.07)",
                  marginRight: "10px",
                }}
              >
                <HiUser
                  style={{
                    height: "36px",
                    width: "36px",
                    borderRadius: "50%",
                    padding: "5px 1px",
                    color: "rgba(33, 35, 44, 0.5)",
                    padding: "4px 0px",
                    marginTop: "6px",
                  }}
                />
              </div>
              <div>
                <p style={{ marginTop: "5px" }}>John Doe</p>
                <p
                  style={{
                    fontSize: "11.81px",
                    fontWeight: 500,
                    textAlign: "left",
                    marginBottom: "3px",
                  }}
                >
                  Owner
                </p>
              </div>
            </Button>
            <Button
              sx={{ border: "none" }}
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon sx={{ color: "rgba(33, 35, 44, 0.72)" }} />
            </Button>
          </ButtonGroup>
          {/* <Popper
              sx={{
                zIndex: 1,
              }}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            disabled={index === 2}
                            selected={index === selectedIndex}
                            onClick={(event) =>
                              handleMenuItemClick(event, index)
                            }
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper> */}
        </div>
        <div>
          <ButtonGroup
            ref={anchorRef}
            aria-label="Button group with a nested menu"
            sx={{
              userSelect: "none",
              boxShadow: "0px 1px 2px 0px rgba(42, 54, 71, 0.05)",
            }}
          >
            <Button
              onClick={handleClick}
              sx={{
                border: "1px solid rgba(33, 35, 44, 0.24)",
                borderRight: "none",
                textTransform: "capitalize",
                color: "rgba(33, 35, 44, 1)",
                fontSize: "14px",
                fontWeight: 600,
                paddingRight: "5px",
                paddingLeft: "10px",
              }}
            >
              1 follower
            </Button>
            <Button
              sx={{
                border: "1px solid rgba(33, 35, 44, 0.24)",
                borderLeft: "none",
                paddingRight: "4px",
              }}
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon sx={{ color: "rgba(33, 35, 44, 0.72)" }} />
            </Button>
          </ButtonGroup>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div>
            <Button
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(45, 134, 71, 1)",
                color: "white",
                padding: "5px 10px",
                minWidth: 0,
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Won
            </Button>
          </div>
          <div>
            <Button
              sx={{
                textTransform: "capitalize",
                backgroundColor: "rgba(216, 60, 56, 1)",
                color: "white",
                padding: "5px 10px",
                minWidth: 0,
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Lost
            </Button>
          </div>
        </div>
        <div>
          <Button
            sx={{
              textTransform: "capitalize",
              backgroundColor: "transparent",
              color: "rgba(33, 35, 44, 1)",
              padding: "5px 10px",
              minWidth: 0,
              fontSize: "14px",
              fontWeight: 600,
              border: "1px solid rgba(33, 35, 44, 0.24)",
            }}
          >
            Reopen
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div>
            <ButtonGroup
              ref={anchorRef}
              aria-label="Button group with a nested menu"
              sx={{
                userSelect: "none",
                boxShadow: "0px 1px 2px 0px rgba(42, 54, 71, 0.05)",
                padding: "5px 0px",
              }}
            >
              <Button
                onClick={handleClick}
                sx={{
                  border: "1px solid rgba(33, 35, 44, 0.24)",
                  borderRight: "none",
                  textTransform: "capitalize",
                  color: "rgba(33, 35, 44, 1)",
                  fontSize: "18px",
                  fontWeight: 600,
                  padding: "5px 0px",
                }}
              >
                <AiFillAppstore />
              </Button>
              <Button
                sx={{
                  border: "1px solid rgba(33, 35, 44, 0.24)",
                  borderLeft: "none",
                  padding: "5px 0px",
                  minWidth: 0,
                }}
                size="small"
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                <ArrowDropDownIcon sx={{ color: "rgba(33, 35, 44, 0.72)" }} />
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <Button
              style={{
                border: "1px solid rgba(33, 35, 44, 0.24)",
                padding: "5px 10px",
                minWidth: 0,
              }}
            >
              <MoreHorizSharpIcon sx={{ color: "rgba(33, 35, 44, 1)" }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadNav;
