import React from "react";
import { IconButton } from "@mui/material";
import { UilEye } from "@iconscout/react-unicons";
import { UilEyeSlash } from "@iconscout/react-unicons";
import CommonTextField from "./commonText";

const CommonPasswordField = ({
  id,
  formik,
  showPassword,
  setShowPassword,
  label,
  ...props
}) => (
  <CommonTextField
    id={id}
    label={label}
    formik={formik}
    error={Boolean(formik.touched[id] && formik.errors[id])}
    helperText={formik.touched[id] && formik.errors[id]}
    type={showPassword}
    InputProps={{
      endAdornment:
        showPassword === "text" ? (
          <IconButton onClick={() => setShowPassword("password")}>
            <UilEye />
          </IconButton>
        ) : (
          <IconButton onClick={() => setShowPassword("text")}>
            <UilEyeSlash />
          </IconButton>
        ),
    }}
    {...props}
  />
);

export default CommonPasswordField;
