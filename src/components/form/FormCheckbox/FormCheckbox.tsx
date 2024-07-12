import { KeyboardEvent, useState } from 'react';
import { FormCheckboxProps } from './FormCheckbox.types.ts';
import Typography from '@mui/material/Typography';
import { StyledCheckbox, CheckboxIcon } from './FormCheckbox.styled.ts';

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
