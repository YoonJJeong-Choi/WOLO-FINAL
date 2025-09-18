import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

const StyleNumberInput = styled(TextField)`
  & .MuiInputLabel-root {
    color: ${(props) => props.color || '#6C757D'};
  }
  & .MuiInputLabel-root.Mui-focused {
    color: ${(props) => props.color || '#6C757D'};
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.color || '#6C757D'};
  }
`;
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function SelectInput({ labelName, id, helperText, color }) {
  return (
    <Box
      component='form'
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete='off'
    >
      <div>
        <StyleNumberInput
          id={id}
          select
          label={labelName}
          defaultValue=''
          color={color}
          helperText={helperText}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyleNumberInput>
      </div>
    </Box>
  );
}
