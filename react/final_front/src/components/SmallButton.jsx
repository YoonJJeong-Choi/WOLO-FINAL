import React from 'react';
import { styled } from '@mui/material/styles';
const SamllStyleButton = styled('button')`
  box-sizing: border-box;
  transition: 0.5s;
  width: 55px;
  height: 29px;
  background-color: ${(props) => props.buttonColor || '#6C757D'};
  border-radius: 4px;
  border: 0px;
  color: #f0f0f0;
  font-size: smaller;
  line-height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
  svg {
    font-size: 1em;
  }
  &:hover {
    background-color: ${(props) => props.hoverColor || '#343A40'};
  }
`;

const SmallButton = ({ buttonColor, buttonName, hoverColor, func, icon }) => {
  return (
    <div>
      <SamllStyleButton
        buttonColor={buttonColor}
        hoverColor={hoverColor}
        onClick={func}
      >
        {icon}
        {buttonName}
      </SamllStyleButton>
    </div>
  );
};

export default SmallButton;
