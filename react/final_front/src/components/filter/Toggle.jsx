import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Toggle({ backgroundColor, hoverColor }) {
  const [alignment, setAlignment] = React.useState('createdAt');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label='Platform'
    >
      <ToggleButton
        sx={{
          '&.Mui-selected': {
            backgroundColor: { backgroundColor },
            '&:hover': { backgroundColor: hoverColor },
            color: 'white',
          },
        }}
        value='createdAt'
      >
        등록일
      </ToggleButton>
      <ToggleButton
        sx={{
          '&.Mui-selected': {
            backgroundColor: { backgroundColor },
            '&:hover': { backgroundColor: hoverColor },
            color: 'white',
          },
        }}
        value='updatedAt'
      >
        수정일
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
