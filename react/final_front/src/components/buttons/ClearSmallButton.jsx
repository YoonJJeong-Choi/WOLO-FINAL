import { styled } from '@mui/material/styles';
const ClearSmallStyleButton = styled('button')`
  box-sizing: border-box;
  transition: 0.3s;
  width: 55px;
  height: 29px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid ${(props) => props.buttonColor || '#6C757D'};
  color: ${(props) => props.buttonColor || '#6C757D'};
  font-size: small;
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
    background-color: ${(props) => props.buttonColor || '#343A40'};
    color: whitesmoke;
  }
`;

const ClearSmallButton = ({ buttonColor, buttonName, func, icon }) => {
  return (
    <ClearSmallStyleButton buttonColor={buttonColor} onClick={func}>
      {icon}
      {buttonName}
    </ClearSmallStyleButton>
  );
};

export default ClearSmallButton;
