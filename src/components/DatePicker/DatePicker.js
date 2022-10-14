import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePick = ({ value, setValue, label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
        renderInput={params => (
          <TextField
            {...params}
            sx={{
              '& .MuiTextField-root': {
                fontSize: '1.6rem',
              },
              '& .MuiInputBase-root': {
                // fontSize: '1.6rem',
                color: 'var(--color-black)',
                width: '40rem',
                backgroundColor: 'var(--color-alt)',
                border: '2px solid var(--color-main-darker)',
              },
              '& .MuiFormLabel-root': {
                fontFamily: 'Merriweather, serif',
                fontSize: '1.2rem',
                color: 'var(--color-black)',
                outline: 'none',
              },
              '& .MuiOutlinedInput-root:active,& .MuiOutlinedInput-root:hover, & .MuiOutlinedInput-root:focus': {
                outline: 'none',
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePick;
