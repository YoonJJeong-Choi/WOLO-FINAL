import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function StatusToggle({ backgroundColor, hoverColor }) {
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
            backgroundColor: '#00C853',
            '&:hover': { backgroundColor: '#00E676' },
            color: 'white',
          },
        }}
        value='active'
      >
        활성
      </ToggleButton>
      <ToggleButton
        sx={{
          '&.Mui-selected': {
            backgroundColor: '#9E9E9E',
            '&:hover': { backgroundColor: '#BDBDBD' },
            color: 'white',
          },
        }}
        value='inacvie'
      >
        비활성
      </ToggleButton>
      <ToggleButton
        sx={{
          '&.Mui-selected': {
            backgroundColor: '#FF6D00',
            '&:hover': { backgroundColor: '#FF9100' },
            color: 'white',
          },
        }}
        value='pending'
      >
        대기
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
