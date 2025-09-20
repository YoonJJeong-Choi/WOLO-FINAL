import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

// const StyleSelect = styled(Select)`
//   & .MuiInputLabel-root {
//     color: ${(props) => props.color || '#6C757D'};
//   }
//   & .MuiInputLabel-root.Mui-focused {
//     color: ${(props) => props.color || '#6C757D'};
//   }
//   & .MuiSelect-root .MuiOutlinedInput-notchedOutline {
//     border-color: ${(props) => props.color || '#6C757D'};
//   }S
// `;

export default function Filter({ labelName, id }) {
  const [value, setValue] = React.useState('latest');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={id}>{labelName}</InputLabel>
        <Select
          size="small"
          labelId={id}
          label={labelName}
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={'latest'}>최신순</MenuItem>
          <MenuItem value={'old'}>오래된순</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
