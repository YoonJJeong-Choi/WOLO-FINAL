import * as React from 'react';
import { NumericFormat } from 'react-number-format';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

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

export default function TimeInput({ labelName, color }) {
  const [values, setValues] = React.useState({
    numberformat: '',
  });

  return (
    <Box
      component='form'
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete='off'
    >
      <NumericFormat
        value={values.numberformat}
        onValueChange={(values) => {
          setValues({ numberformat: values.floatValue });
        }}
        customInput={StyleNumberInput}
        thousandSeparator
        valueIsNumericString
        prefix=''
        variant='outlined'
        label={labelName}
        color={color}
        type={TimeInput}
      />
    </Box>
  );
}
