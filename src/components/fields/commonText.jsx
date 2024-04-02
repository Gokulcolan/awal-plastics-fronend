import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import "./filedStyles.scss";

const CommonTextField = ({
  id,
  label,
  formik,
  customStyles,
  disabled,
  placeholder,
  required,
  propscolor,
  labelClassName,
  type = "text",
  NumberValidation,
  propsbg,
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
      <TextField
        id={id}
        margin="normal"
        fullWidth
        multiline={false}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        onBlur={formik.handleBlur}
        onChange={
          type === "number" && validateNumber
            ? handleNumberChange
            : formik.handleChange
        }
        value={formik.values[id]}
        error={Boolean(formik.touched[id] && formik.errors[id])}
        helperText={<>{formik.touched[id] && formik.errors[id]}</>}
        variant="outlined"
        sx={{
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
          width: "100%",
          mt: 0,
          mb: 0,
          "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline, & .css-26l3qy-MuiOutlinedInput-notchedOutline":
            {
              border: `1px solid ${propscolor} !important`,
            },

          "& .MuiOutlinedInput-input": customStyles?.OutlinedInput,
          backgroundColor: disabled && "#f5f6fa",
          ...inputSx,
        }}
        InputProps={{
          ...otherInputProps,
          startAdornment: startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : null,
        }}
        {...props}
      />
    </div>
  );
};

export default CommonTextField;
