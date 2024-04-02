import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const CommonRadio = ({
  id,
  name,
  label,
  formik,
  options,
  fields,
  customChange,
}) => {
  return (
    <div className="formik-input-wrapper">
      <label htmlFor={id}>{label}</label>
      <FormControl component="fieldset">
        <RadioGroup
          id={id}
          name={id}
          value={fields[name]}
          onChange={(e) => {
            formik.handleChange(e);
            // If we any extra change function please use this one
            if (customChange) customChange(e);
          }}
          onBlur={formik.handleBlur}
          row
        >
          {options.map((option, index) => (
            <FormControlLabel
              key={option.value + index}
              value={option.value}
              control={
                <Radio
                  checkedIcon={<div className="custom_radio_icon_checked" />}
                  icon={<div className="custom_radio_icon" />}
                />
              }
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default CommonRadio;
