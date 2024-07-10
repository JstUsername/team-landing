import { ChangeEvent, useEffect, useState } from 'react';
import FormInput from '../FormInput/FormInput.tsx';
import { validatePassword } from '../../../utils/validate.ts';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import EyeIcon from '../../../assets/login/icons/eye.svg?react';
import EyeClose from '../../../assets/login/icons/eye-close.svg?react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface FormPasswordInputProps {
  typeLogin: string;
  passwordSubtitle: string;
}

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
      inputId="password-input"
      inputLabel="Пароль"
      inputPlaceholder="******"
      type={showPassword ? 'text' : 'password'}
      inputError={typeLogin === 'registration' ? error : undefined}
      inputOnChange={typeLogin === 'registration' ? handleChange : undefined}
      inputProps={{
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
                <EyeCloseIcon title="Change password visibility" width="24px" height="24px" />
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

const PasswordSubtitle = styled(Typography)`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  margin-top: 4px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const EyeCloseIcon = styled(EyeClose)`
  margin-right: -2px;
`;
