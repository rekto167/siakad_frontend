import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const MuiTimePicker = ({ titleLabel, state, setState }) => {
  const handleChange = (e) => {
    
  };
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label={titleLabel}
          value={state}
          onChange={(newValue) => handleChange(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default MuiTimePicker;
