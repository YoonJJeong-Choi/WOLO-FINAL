import { styled } from '@mui/material/styles';

const ClearLargeStyleButton = styled('button', {
  shouldForwardProp: (prop) => !['active', 'buttonColor'].includes(prop),
})`
  box-sizing: border-box;
  width: 100px;
  height: 46px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid ${(props) => props.buttonColor || '#6C757D'};
  color: ${(props) => props.buttonColor || '#6C757D'};
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
    background-color: ${(props) => props.buttonColor || '#343A40'};
    color: whitesmoke;
    transition: 0.5s;
  }

  ${({ active, buttonColor }) =>
    active &&
    `
      background-color: ${buttonColor || '#343A40'};
      color: whitesmoke;
    `}
`;

const ClearLargeButton = ({
  buttonColor,
  buttonName,
  func,
  icon,
  active = false,
}) => {
  return (
    <ClearLargeStyleButton
      buttonColor={buttonColor}
      onClick={func}
      active={active}
      aria-pressed={active}
    >
      {icon}
      {buttonName}
    </ClearLargeStyleButton>
  );
};

export default ClearLargeButton;
