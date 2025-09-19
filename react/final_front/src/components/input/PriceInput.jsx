import * as React from 'react';
import { NumericFormat } from 'react-number-format';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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

export default function PriceInput({ labelName, color }) {
  const [values, setValues] = React.useState({
    numberformat: '1000000',
  });

  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  return (
    // <Stack direction='row' spacing={2}>
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
        // onChange={handleChange}
        customInput={StyleNumberInput}
        thousandSeparator
        valueIsNumericString
        prefix='₩'
        variant='outlined'
        label={labelName}
        color={color}
      />
    </Box>
    // </Stack>
  );
}
