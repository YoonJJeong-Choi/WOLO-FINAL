import { styled } from '@mui/material/styles';
const ClearLargeStyleButton = styled('button')`
  box-sizing: border-box;
  transition: 0.5s;
  width: 88px;
  height: 46px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid ${(props) => props.borderColor || '#6C757D'};
  color: ${(props) => props.fontColor || '#6C757D'};
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
    background-color: ${(props) => props.hoverBorderColor || '#343A40'};
    color: whitesmoke;
  }
`;

const ClearLargeButton = ({
  borderColor,
  buttonName,
  hoverBorderColor,
  fontColor,
  func,
  icon,
}) => {
  return (
    <div>
      <ClearLargeStyleButton
        borderColor={borderColor}
        fontColor={fontColor}
        hoverBorderColor={hoverBorderColor}
        onClick={func}
      >
        {icon}
        {buttonName}
      </ClearLargeStyleButton>
    </div>
  );
};

export default ClearLargeButton;
