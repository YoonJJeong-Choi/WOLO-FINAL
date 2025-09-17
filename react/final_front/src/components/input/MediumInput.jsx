import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const InputStyled = styled(TextField)`
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
export default function StateTextFields({
  color,
  labelName,
  id,
  defaultValue,
}) {
  const [name, setName] = React.useState(defaultValue);

  return (
    <>
      <Box
        component='form'
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete='off'
      >
        <InputStyled
          color={color}
          id={id}
          label={labelName}
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </Box>
    </>
  );
}
