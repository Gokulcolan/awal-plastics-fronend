import React from "react";
import {
  InputAdornment,
  MenuItem,
  TextField,
  inputLabelClasses,
} from "@mui/material";
import { UilAngleDown } from "@iconscout/react-unicons";
import "./filedStyles.scss";
import { useState, useEffect } from "react";

const CommonSelectField = ({
  id,
  label,
  formik,
  icons,
  options,
  sx,
  customStyles,
  defaultValue,
  value,
  disabled,
  required,
  customChange,
  labelClassName,
  propscolor,
  statusChecker = false,
}) => {
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    setSelectedValue(formik.values[id] || defaultValue || value);
  }, [defaultValue, formik.values, id, value]);

  return (
    <div className="formik-select-wrapper">
      <label
        htmlFor={id}
        style={{ display: label === "" ? "none" : "block" }}
        className={labelClassName}
      >
        {label}
        {required && <span className="field-required">*</span>}
      </label>

      
      <TextField
        id={id}
        select
        fullWidth
        margin="normal"
        // placeholder={id}
        name={id}
        disabled={disabled}
        onBlur={formik.handleBlur}
        onChange={(e) => {
          formik.handleChange(e);
          // If we need any extra change function use this one
          if (customChange) customChange(e);
        }}
        value={formik.values[id] || defaultValue}
        className="select-menu-item"
        variant="outlined"
        error={Boolean(formik.touched[id] && formik.errors[id])}
        helperText={<>{formik.touched[id] && formik.errors[id]}</>}
        sx={{
          ".MuiOutlinedInput-notchedOutline": sx?.outlinedInput,
          "& .MuiOutlinedInput-input": customStyles?.OutlinedInput,
          ...sx?.root,
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
          width: "100%",
          mt: 0,
          mb: 0,
          "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline, & .css-26l3qy-MuiOutlinedInput-notchedOutline":
            {
              border: `1px solid ${propscolor}`,
            },
          "& .css-1d3z3hw-MuiOutlinedInput-input, & .css-26l3qy-MuiOutlinedInput-input":
            {
              color: selectedValue === defaultValue ? "#bbbbbb" : "black",
            },
        }}
        InputProps={{
          ...customStyles?.startAdornment,
          sx: {
            color: selectedValue === defaultValue ? "#bbbbbb" : "black",
            [`&.${inputLabelClasses.shrink}`]: {
              color: selectedValue === defaultValue ? "#bbbbbb" : "black",
            },
            ...sx?.inputProps,
          },
          startAdornment: icons && (
            <InputAdornment position="start">{icons}</InputAdornment>
          ),
        }}
        SelectProps={{
          IconComponent: UilAngleDown,
          MenuProps: {
            PaperProps: {
              style: {
                maxHeight: "250px",
              },
            },
          },
        }}
      >
        {/* This code will only work if there is any default value */}
        {/* {selectedValue === defaultValue && ( */}
        <MenuItem value={defaultValue} disabled hidden>
          {defaultValue}
        </MenuItem>
        {/* )} */}
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {/* This is only for the status dropdown (i.e Active or Disabled) */}
            {statusChecker && (
              <div
                className={option.active ? "active-dot" : "non-active-dot"}
              ></div>
            )}
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default CommonSelectField;
