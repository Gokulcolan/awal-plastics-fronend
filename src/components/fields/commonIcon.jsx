import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import "./filedStyles.scss";
import CommonTextField from "./commonText";

const CommonIcon = ({
  id,
  label,
  formik,
  customStyles,
  disabled,
  placeholder,
  required,
  labelClassName,
  icon,
  type = "text",
  NumberValidation,
  validateNumber = false,
  inputProps = {},
  ...props
}) => {
  const handleNumberChange = (event) => {
    NumberValidation(event, id);
  };

  const { sx: inputSx = {}, startAdornment, ...otherInputProps } = inputProps;

  return (
    <div className="formik-input-wrapper">
      <label htmlFor={id} className={labelClassName}>
        {label}
        {required && <span className="field-required">*</span>}
      </label>
      <CommonTextField
        formik={formik}
        inputProps={{
          sx: {
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${
                customStyles?.OutlinedInput?.borderColor || "black"
              }`,
            },
          },
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        id={id}
        placeholder={id}
      />
    </div>
  );
};

export default CommonIcon;
