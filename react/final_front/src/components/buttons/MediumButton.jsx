import React from 'react';
import { styled } from '@mui/material/styles';
const MediumStyleButton = styled('button')`
  box-sizing: border-box;
  transition: 0.5s;
  width: 69px;
  height: 36px;
  background-color: ${(props) => props.buttonColor || '#6C757D'};
  border-radius: 4px;
  border: 0px;
  color: #f0f0f0;
  font-size: medium;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  svg {
    font-size: 1em;
  }
  &:hover {
    background-color: ${(props) => props.hoverColor || '#343A40'};
  }
`;

const MediumButton = ({ buttonColor, buttonName, hoverColor, func, icon }) => {
  return (
    <div>
      <MediumStyleButton
        buttonColor={buttonColor}
        hoverColor={hoverColor}
        onClick={func}
      >
        {icon}
        {buttonName}
      </MediumStyleButton>
    </div>
  );
};

export default MediumButton;
