import { styled } from '@mui/material/styles';
const ClearMediumStyleButton = styled('button')`
  box-sizing: border-box;
  transition: 0.5s;
  width: 69px;
  height: 36px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid ${(props) => props.buttonColor || '#6C757D'};
  color: ${(props) => props.buttonColor || '#6C757D'};
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
    background-color: ${(props) => props.buttonColor || '#343A40'};
    color: whitesmoke;
  }
`;

const ClearMediumButton = ({ buttonColor, buttonName, func, icon }) => {
  return (
    <ClearMediumStyleButton buttonColor={buttonColor} onClick={func}>
      {icon}
      {buttonName}
    </ClearMediumStyleButton>
  );
};

export default ClearMediumButton;
