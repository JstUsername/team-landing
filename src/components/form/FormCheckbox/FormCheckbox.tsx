import { KeyboardEvent, useState } from 'react';
import { styled } from '@mui/material/styles';
import { FormCheckboxProps } from './FormCheckbox.types.ts';
import Typography from '@mui/material/Typography';
import UnionIcon from '../../../assets/login/icons/union.svg?react';

export default function FormCheckbox({ typeLogin }: FormCheckboxProps) {
  const [checked, setChecked] = useState(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setChecked((prev) => !prev);
    }
  };

  return (
    <>
      <StyledCheckbox tabIndex={0} onClick={() => setChecked((prev) => !prev)} onKeyDown={handleKeyDown}>
        {checked && <CheckboxIcon title="Union" />}
      </StyledCheckbox>
      <Typography variant="body1" sx={{ fontSize: '14px' }}>
        {typeLogin === 'registration' ? 'Согласен с политикой обработки персональных данных' : 'Запомнить меня'}
      </Typography>
    </>
  );
}

const StyledCheckbox = styled('div')`
  width: 16px;
  height: 16px;
  padding: 2px;
  border: 1px solid;
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.palette.secondary.light};
  }
`;

const CheckboxIcon = styled(UnionIcon)`
  position: absolute;
  left: 3px;
  top: 5px;
`;
