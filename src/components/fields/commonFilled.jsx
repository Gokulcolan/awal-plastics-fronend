import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import "./filedStyles.scss";

const CommonFilled = ({
  id,
  label,
  formik,
  customStyles,
  disabled,
  placeholder,
  required,
  propscolor,
  labelClassName,
  propsbg,
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
    <div className="formik-filled-wrapper">
      <label htmlFor={id} className={labelClassName}>
        {label}
        {required && <span className="field-required">*</span>}
      </label>
      <TextField
        id={id}
        margin="normal"
        fullWidth
        disabled={disabled}
        type={type}
        placeholder={id}
        onBlur={formik.handleBlur}
        onChange={
          type === "number" && validateNumber
            ? handleNumberChange
            : formik.handleChange
        }
        value={formik.values[id]}
        error={Boolean(formik.touched[id] && formik.errors[id])}
        helperText={<>{formik.touched[id] && formik.errors[id]}</>}
        variant="filled"
        sx={{
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
          width: "100%",
          mt: 0,
          mb: 0,
          "& .css-10botns-MuiInputBase-input-MuiFilledInput-input": {
            borderBottom: `1px solid ${propscolor}`,
            backgroundColor: `${propsbg}`,
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

export default CommonFilled;
