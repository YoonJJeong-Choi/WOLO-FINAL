import { styled } from '@mui/material/styles';
const ClearSmallStyleButton = styled('button')`
  box-sizing: border-box;
  transition: 0.3s;
  width: 55px;
  height: 29px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid ${(props) => props.borderColor || '#6C757D'};
  color: ${(props) => props.fontColor || '#6C757D'};
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
    background-color: ${(props) => props.hoverBorderColor || '#343A40'};
    color: whitesmoke;
  }
`;

const ClearSmallButton = ({
  borderColor,
  buttonName,
  hoverBorderColor,
  fontColor,
  func,
  icon,
}) => {
  return (
    <div>
      <ClearSmallStyleButton
        borderColor={borderColor}
        fontColor={fontColor}
        hoverBorderColor={hoverBorderColor}
        onClick={func}
      >
        {icon}
        {buttonName}
      </ClearSmallStyleButton>
    </div>
  );
};

export default ClearSmallButton;
