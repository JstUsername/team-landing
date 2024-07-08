import FormInput from '../FormInput/FormInput.tsx';
import EyeIcon from '../../assets/login/icons/eye.svg?react';
import EyeCloseIcon from '../../assets/login/icons/eye-close.svg?react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

export default function FormPasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormInput
      inputId="password-input"
      inputLabel="Пароль"
      inputPlaceholder="******"
      type={showPassword ? 'text' : 'password'}
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
