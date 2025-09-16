import { styled } from '@mui/material/styles';
const LargeStyleButton = styled('button')`
  box-sizing: border-box;
  transition: 0.5s;
  width: 88px;
  height: 46px;
  background-color: ${(props) => props.buttonColor || '#6C757D'};
  border-radius: 4px;
  border: 0px;
  color: #f0f0f0;
  font-size: larger;
  line-height: 46px;
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
const LargeButton = ({ buttonColor, buttonName, hoverColor, func, icon }) => {
  return (
    <div>
      <LargeStyleButton
        buttonColor={buttonColor}
        hoverColor={hoverColor}
        onClick={func}
      >
        {icon}
        {buttonName}
      </LargeStyleButton>
    </div>
  );
};

export default LargeButton;
