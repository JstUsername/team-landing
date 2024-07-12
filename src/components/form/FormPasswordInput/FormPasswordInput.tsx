import { ChangeEvent, useEffect, useState } from 'react';
import { FormPasswordInputProps } from './FormPasswordInput.types.ts';
import FormInput from '../FormInput/FormInput.tsx';
import { validatePassword } from '../../../utils/validate.ts';
import InputAdornment from '@mui/material/InputAdornment';
import { PasswordSubtitle, EyeCloseIcon } from './FormPasswordInput.styled.ts';
import IconButton from '@mui/material/IconButton';
import EyeIcon from '../../../assets/login/icons/eye.svg?react';

export default function FormPasswordInput({ typeLogin, passwordSubtitle }: FormPasswordInputProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (password === '') {
      setError(false);
    } else {
      validatePassword(password) ? setError(false) : setError(true);
    }
  }, [password]);

  return (
    <FormInput
      inputId={"password-input"}
      inputLabel={"Пароль"}
      inputPlaceholder={"******"}
      type={showPassword ? 'text' : 'password'}
      inputError={typeLogin === 'registration' ? error : undefined}
      inputOnChange={typeLogin === 'registration' ? handleChange : undefined}
      inputProps={{
        endAdornment: (
          <InputAdornment position={"end"}>
            <IconButton
              aria-label={"toggle password visibility"}
              onClick={() => setShowPassword((show) => !show)}
              edge={"end"}
            >
              {!showPassword ? (
                <EyeIcon title={"Change password visibility"} width={"20px"} height={"20px"} />
              ) : (
                <EyeCloseIcon title={"Change password visibility"} width={"24px"} height={"24px"} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    >
      {typeLogin === 'registration' && <PasswordSubtitle>{passwordSubtitle}</PasswordSubtitle>}
    </FormInput>
  );
}
