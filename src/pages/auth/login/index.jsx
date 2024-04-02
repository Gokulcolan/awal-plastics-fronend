import React, { useEffect, useState } from "react";
import useRouterPush from "@/hooks/routerUtils";
import lightBlue from "../../../assets/image/lightBlue.svg";
import redBox from "../../../assets/image/redBox.svg";
import darkGreenBox from "../../../assets/image/darkGreenBox.svg";
import yellowBox from "../../../assets/image/yellowBox.svg";
import darkBlueBox from "../../../assets/image/darkBlueBox.svg";
import pinkBox from "../../../assets/image/pinkBox.svg";
import orangeBox from "../../../assets/image/orangeBox.svg";
import lightGreenBox from "../../../assets/image/lightGreenBox.svg";
import mainLogo from "../../../assets/image/mainLogo.svg";
import GLogo from "../../../assets/image/G-Logo.svg";
import allLoginImg from "../../../assets/image/allLoginImg.svg";
import centerLogo from "../../../assets/image/centerLogo.svg";
import Image from "next/image";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import "./loginStyle.scss";

const Login = () => {
  const [siteName, setSiteName] = useState("HRMS");
  const [textColor, setTextColor] = useState("#0D68C5");
  const [bgClass, setBgClass] = useState("HRMs");
  const [btnClass, setBtnClass] = useState("hrmsColor");
  const [slide, setSlide] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [LoginOne, setLoginOne] = useState("");
  // const [Login2, setLogin2] = useState("");
  const [path, setPath] = useState("/SD/sales/sales-dashboard/");
  // const [loginanim, setLoginAnim] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const push = useRouterPush();
  // const push = useRouterPush();
  const data = [
    {
      value: 0,
      name: "Sales & Estimation",
      image: lightBlue,
      path: "/SD/sales/sales-dashboard/",
      style: {
        top: "0%",
        right: "40%",
      },
      applyStyle: {
        logBgClass: "HRMsBgClass",
        hdColor: "#1575d6",
        btnClass: "hrmsColor",
      },
    },
    {
      value: 1,
      name: "Procurement",
      image: redBox,
      path: "/SD/sales/sales-dashboard/",
      style: {
        top: "12%",
        right: "15%",
      },
      applyStyle: {
        logBgClass: "SalesBgClass",
        hdColor: "#ef0d36",
        btnClass: "salesColor",
      },
    },
    {
      value: 2,
      path: "/SD/sales/sales-dashboard/",
      name: "Stores",
      image: darkGreenBox,
      style: {
        top: "37%",
        right: "3%",
      },
      applyStyle: {
        logBgClass: "procurementBgClass",
        hdColor: "#00a569",
        btnClass: "procurementColor",
      },
    },
    {
      value: 3,
      path: "/SD/sales/sales-dashboard/",
      name: "Production",
      image: yellowBox,
      style: {
        bottom: "12%",
        right: "15%",
      },
      applyStyle: {
        logBgClass: "productionBgClass",
        hdColor: "#ffbc15",
        btnClass: "productionColor",
      },
    },
    {
      value: 4,
      path: "/SD/sales/sales-dashboard/",
      name: "Maintenance",
      image: darkBlueBox,

      style: {
        bottom: "0%",
        right: "39%",
      },
      applyStyle: {
        logBgClass: "qualityBgClass",
        hdColor: "#0642da",
        btnClass: "qualitycolor",
      },
    },
    {
      value: 5,
      path: "/SD/sales/sales-dashboard/",
      name: "HRMS",
      image: pinkBox,
      style: {
        bottom: "12%",
        left: "15%",
      },
      applyStyle: {
        logBgClass: "installationBgClass",
        hdColor: "#d135b2",
        btnClass: "installationcolor",
      },
    },
    {
      value: 6,
      path: "/SD/sales/sales-dashboard/",
      name: "Finance",
      image: orangeBox,
      style: {
        top: "38%",
        left: "3%",
      },
      applyStyle: {
        logBgClass: "maintenancesBgClass",
        hdColor: "#dc6a00",
        btnClass: "maintenancescolor",
      },
    },
    {
      value: 7,
      path: "/SD/sales/sales-dashboard/",
      name: "IT & Security",
      image: lightGreenBox,
      style: {
        top: "12%",
        left: "15%",
      },
      applyStyle: {
        logBgClass: "financeBgClass",
        hdColor: "#008e00",
        btnClass: "financecolor",
      },
    },
  ];
  const customStyles = {
    "& legend": { display: "none" },
    "& fieldset": { top: 0 },
    root: {
      height: "25px",
    },
    input: {
      padding: "6px",
      backgroundColor: "white",
    },
  };
  const diffLogin = (siteName, bgClass, txtColor, btnClass, path) => {
    if (txtColor !== textColor) {
      setSlide(!slide);
    }
    setSiteName(siteName);
    setBgClass(bgClass);
    setTextColor(txtColor);
    setBtnClass(btnClass);
    setLoginOne("");
    setPath(path);
  };

  return (
    <>
      <div className="loginParent">
        <div className="loginParentSub">
          <div className="allLoginImgDiv">
            <Image src={allLoginImg} className="allLoginImg" />
          </div>
          <div className="allLogin">
            <div className="colorDiv"></div>
            <div className="rotativeDiv">
              {data.map((dataItem, index) => {
                return (
                  <div
                    onClick={() =>
                      diffLogin(
                        dataItem.name,
                        dataItem.applyStyle.logBgClass,
                        dataItem.applyStyle.hdColor,
                        dataItem.applyStyle.btnClass,
                        dataItem.path
                      )
                    }
                    className="loginChild"
                    style={{
                      position: "absolute",
                      top: dataItem.style?.top,
                      bottom: dataItem.style?.bottom,
                      right: dataItem.style?.right,
                      left: dataItem.style?.left,
                      backgroundPosition: "center",
                    }}
                    key={index}
                  >
                    <div className="innerBgImage">
                      <Image
                        src={dataItem.image}
                        alt="green"
                        className="bgImg"
                      />
                      <p className="para">{dataItem.name} </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="allLoginCenterDiv"></div>
            <div className="centerDivSub">
              <Image src={mainLogo} className="mainLogo" />
            </div>
          </div>
          <div className="loginCridentialMain">
            <div className={`loginCridential ${bgClass}`}>
              <h2 className="loginMainHeading" style={{ color: textColor }}>
                {siteName}
              </h2>
              <div
                className={`loginCridentialParent ${
                  slide ? "logSlideAdd" : "logSlideRemove"
                }`}
              >
                <div className="loginCridentialSub ">
                  <div className="loginCridentialSubChild ">
                    <h4>Welcome Back</h4>
                    <div className="CridentialSubChilds">
                      <label htmlFor="email">Login</label>
                      <TextField
                        sx={{ ...customStyles, borderRadius: "10px" }}
                        className="subChildsTextfield"
                        id="outlined-basic"
                        placeholder="Email or phone number"
                        variant="outlined"
                        onChange={(e) => setLoginOne(e.target.value)}
                        value={LoginOne}
                      />
                    </div>
                    <div className="CridentialSubChilds">
                      <label htmlFor="password">Password</label>
                      <FormControl
                        variant="outlined"
                        sx={{
                          ...customStyles,
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      >
                        <OutlinedInput
                          placeholder="Enter your Password"
                          className="subChildsTextfield"
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          // label="Enter your Password  "
                        />
                      </FormControl>
                    </div>
                    <div className="CridentialSubChilds dFlex">
                      <div className="CridentialSubChildsLeft">
                        <label className="switch">
                          <input type="checkbox" id="checkbox" />
                          <span className={`slider ${btnClass}`}></span>
                        </label>
                        <label htmlFor="checkbox">Remember me</label>
                      </div>
                      <div className="CridentialSubChildsRight">
                        <a href="#">Forgot password?</a>
                      </div>
                    </div>
                    <div className="CridentialSubChilds ">
                      <Button
                        variant="contained"
                        className="signInBtn"
                        onClick={() => push(path)}
                      >
                        Sign in
                      </Button>
                    </div>
                    <div className="CridentialSubChilds divide">
                      <Button variant="contained" className="googleSignInBtn">
                        <Image src={GLogo} className="gLogo" />
                        <p>Or sign in with Google</p>
                      </Button>
                      <p className="newUserLink">
                        Dont have an account? <a href="#">Sign up now</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="loginCridentialSub">
                  <div className="loginCridentialSubChild">
                    <h4>Welcome Back</h4>
                    <div className="CridentialSubChilds">
                      <label htmlFor="email">Login</label>
                      <TextField
                        sx={{ ...customStyles, borderRadius: "10px" }}
                        className="subChildsTextfield"
                        id="outlined-basic"
                        placeholder="Email or phone number"
                        variant="outlined"
                        onChange={(e) => setLoginOne(e.target.value)}
                        value={LoginOne}
                      />
                    </div>
                    <div className="CridentialSubChilds">
                      <label htmlFor="password">Password</label>
                      <FormControl
                        variant="outlined"
                        sx={{
                          ...customStyles,
                          backgroundColor: "white",
                          borderRadius: "10px",
                        }}
                      >
                        <OutlinedInput
                          placeholder="Enter your Password"
                          className="subChildsTextfield"
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          // label="Enter your Password  "
                        />
                      </FormControl>
                    </div>
                    <div className="CridentialSubChilds dFlex">
                      <div className="CridentialSubChildsLeft">
                        <label className="switch">
                          <input type="checkbox" id="checkbox" />
                          <span className={`slider ${btnClass}`}></span>
                        </label>
                        <label htmlFor="checkbox">Remember me</label>
                      </div>
                      <div className="CridentialSubChildsRight">
                        <a href="#">Forgot password?</a>
                      </div>
                    </div>
                    <div className="CridentialSubChilds ">
                      <Button
                        variant="contained"
                        onClick={() => push(path)}
                        className="signInBtn"
                      >
                        Sign in
                      </Button>
                    </div>
                    <div className="CridentialSubChilds divide">
                      <Button variant="contained" className="googleSignInBtn">
                        <Image src={GLogo} className="gLogo" />
                        <span>Or sign in with Google</span>
                      </Button>
                      <p className="newUserLink">
                        Dont have an account? <a href="#">Sign up now</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

{
  /* <button onClick={() => push("/SD")}>Navig</button> */
}
