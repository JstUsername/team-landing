import { SxProps, styled } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

type ToggleProps = {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
};

const Toggle = ({ checked, setChecked }: ToggleProps & SxProps) => {
  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <ToggleSwitch active={checked}>
        <ToggleSwitchDot active={checked} />
      </ToggleSwitch>
    </ToggleContainer>
  );
};

const ToggleContainer = styled('label')`
  display: inline-flex;
  align-items: center;

  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const ToggleInput = styled('input')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  margin: 0;

  z-index: 1;
  opacity: 0;
`;

const ToggleSwitch = styled('div')<{ active: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 32px;
  height: 16px;
  padding: 0 2px;
  border: 0;
  border-radius: 33px;
  background-color: ${(props) => {
    const { theme, active } = props;
    return active ? theme.palette.primary.main : theme.palette.secondary.main;
  }};
`;

const ToggleSwitchDot = styled('div')<{ active: boolean }>`
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  border: 0;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 50%;

  margin-left: ${(props) => (props.active ? 'auto' : 0)};
`;

export default Toggle;
