import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import "./filedStyles.scss";

const CommonTextArea = ({
  id,
  label,
  formik,
  customStyles,
  disabled,
  placeholder,
  required,
  labelClassName,
  type = "text",
  NumberValidation,
  validateNumber = false,
  inputProps = {},
  height,
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

export default CommonTextArea;

// import * as React from "react";
// import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
// import { styled } from "@mui/system";

// export default function commonTextArea({ placeholder, height }) {
//   const Textarea = styled(BaseTextareaAutosize)(
//     `
//     width: 100%;
//     font-size: 14px;
//     font-weight: 500;
//     line-height: 1.5;
//     padding: 6px 12px;
//     border-radius: 5px;
//     color: black;
//     background: white;
//     border: 1px solid rgba(33, 35, 44, 0.23);
//     box-shadow: none;
//     height: 50px

//     &:focus-visible {
//       outline: 0;
//     }
//   `
//   );

//   return (
//     <Textarea
//       style={{ height: `${height}px`, width:"100%" }}
//       aria-label="maximum height"
//       placeholder={placeholder}
//     />
//   );
// }
