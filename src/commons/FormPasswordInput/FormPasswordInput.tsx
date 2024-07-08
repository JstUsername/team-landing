import FormInput from '../FormInput/FormInput.tsx';
import EyeIcon from '../../assets/login/icons/eye.svg?react';
import EyeCloseIcon from '../../assets/login/icons/eye-close.svg?react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { ChangeEvent, useEffect, useState } from 'react';

interface FormPasswordInputProps {
  typeLogin: string;
}

export default function FormPasswordInput({ typeLogin }: FormPasswordInputProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const validatePassword = (password: string) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z0-9]).{8,}$/;
    return re.test(String(password));
  };

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
      inputId="password-input"
      inputLabel="Пароль"
      inputPlaceholder="******"
      type={showPassword ? 'text' : 'password'}
      inputError={typeLogin === 'registration' ? error : undefined}
      inputOnChange={typeLogin === 'registration' ? handleChange : undefined}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((show) => !show)}
              edge="end"
            >
              {!showPassword ? (
                <EyeIcon title="Change password visibility" width="20px" height="20px" />
              ) : (
                <EyeCloseIcon
                  title="Change password visibility"
                  width="24px"
                  height="24px"
                  style={{ marginRight: '-2px' }}
                />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
