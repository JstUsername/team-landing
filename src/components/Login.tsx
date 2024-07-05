import { useState, Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../theme.tsx';

interface loginProps {
  typeLogin: string;
  setTypeLogin: Dispatch<SetStateAction<string>>;
  setOpenLogin: Dispatch<SetStateAction<boolean>>;
}

export default function Login({ typeLogin, setTypeLogin, setOpenLogin }: loginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      spacing={0}
      sx={{
        height: '100vh',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: { height: '100%', overflow: 'auto' },
      }}
    >
      <Grid xs={12} sm={6}>
        <LeftColumnWrapper>
          <Typography variant={isSmallScreen ? 'h3' : 'h2'} sx={{ margin: 0 }}>
            {typeLogin === 'registration' ? 'Регистрация' : 'Вход'}
          </Typography>
          <FormWrapper component="form">
            {typeLogin === 'registration' && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                  <Typography variant="body1" sx={{ fontSize: '14px', marginBottom: '8px' }}>
                    Имя
                  </Typography>
                  <StyledTextField id="name-input" placeholder="Иван" />
                </FormControl>
                <FormControl sx={{ flex: 1 }}>
                  <Typography variant="body1" sx={{ fontSize: '14px', marginBottom: '8px' }}>
                    Фамилия
                  </Typography>
                  <StyledTextField id="surname-input" placeholder="Иванов" />
                </FormControl>
              </Box>
            )}
            <FormControl>
              <Typography variant="body1" sx={{ fontSize: '14px', marginBottom: '8px' }}>
                Email
              </Typography>
              <StyledTextField id="email-input" placeholder="example@email.com" />
            </FormControl>
            <FormControl>
              <Typography variant="body1" sx={{ fontSize: '14px', marginBottom: '8px' }}>
                Пароль
              </Typography>
              <StyledTextField
                id="password-input"
                placeholder="******"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                        <img
                          src="/src/assets/login/icons/eye.svg"
                          alt="Change password visibility"
                          style={{ width: 20, height: 20 }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {typeLogin === 'registration' && (
                <PasswordSubtitle>
                  Пароль должен содержать минимум 8 символов, строчные и прописные символы
                </PasswordSubtitle>
              )}
            </FormControl>
            <AdditionalFields>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <StyledCheckbox tabIndex={0} onClick={() => setChecked((prev) => !prev)}>
                  {checked && (
                    <img
                      src="/src/assets/login/icons/union.svg"
                      alt="Union"
                      style={{ position: 'absolute', left: '3px', top: '5px' }}
                    />
                  )}
                </StyledCheckbox>
                <Typography variant="body1" sx={{ fontSize: '14px' }}>
                  {typeLogin === 'registration'
                    ? 'Согласен с политикой обработки персональных данных'
                    : 'Запомнить меня'}
                </Typography>
              </Box>
              {typeLogin === 'authorization' && (
                <Link href="#" underline="hover" color="primary.dark">
                  <Typography variant="body1" sx={{ fontSize: '14px' }}>
                    Забыли пароль?
                  </Typography>
                </Link>
              )}
            </AdditionalFields>
            <FormControl>
              <StyledButton variant="contained" onClick={() => setOpenLogin(false)}>
                {typeLogin === 'registration' ? 'Зарегистрироваться' : 'Вход'}
              </StyledButton>
            </FormControl>
          </FormWrapper>
          <Box sx={{ display: 'flex', gap: 2, [theme.breakpoints.down('lg')]: { flexDirection: 'column' } }}>
            <StyledOutlinedButton
              variant="outlined"
              startIcon={<img src="/src/assets/login/icons/google.svg" alt="Google icon" />}
              onClick={() => setOpenLogin(false)}
            >
              <Typography sx={{ paddingX: 2, fontSize: '16px' }}>Вход с помощью Google</Typography>
            </StyledOutlinedButton>
            <StyledOutlinedButton
              variant="outlined"
              startIcon={<img src="/src/assets/login/icons/apple.svg" alt="Apple icon" />}
              onClick={() => setOpenLogin(false)}
            >
              <Typography sx={{ paddingX: 2, fontSize: '16px' }}>Вход с помощью Apple</Typography>
            </StyledOutlinedButton>
          </Box>
          <Divider />
          {typeLogin === 'registration' ? (
            <Link href="#" underline="hover" color="primary.dark" onClick={() => setTypeLogin('authorization')}>
              <Typography variant="body1" sx={{ fontSize: '14px' }}>
                Нет аккаунта? Зарегистрироваться
              </Typography>
            </Link>
          ) : (
            <Link href="#" underline="hover" color="primary.dark" onClick={() => setTypeLogin('registration')}>
              <Typography variant="body1" sx={{ fontSize: '14px' }}>
                Уже есть аккаунт?
              </Typography>
            </Link>
          )}
        </LeftColumnWrapper>
      </Grid>
      <Grid xs={0} sm={6}>
        <img
          src="/src/assets/login/images/login.webp"
          alt="Decorative image from the login page"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Grid>
    </Grid>
  );
}

const LeftColumnWrapper = styled(Box)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  @media (max-width: ${(props) => props.theme.breakpoints.values.sm}px) {
    height: 100%;
    gap: 32px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.values.md}px) {
    padding: 32px 16px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.values.md + 1}px) {
    padding: 80px;
  }
`;

const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 0;
    padding-right: 0;
    font-size: 16px;
    color: ${(props) => props.theme.palette.text.secondary};
    & .MuiInputBase-input {
      padding: 13px 16px;
      background-color: ${(props) => props.theme.palette.secondary.light};
      &::placeholder {
        opacity: 1;
      }
    }
    & fieldset {
      border: none;
      border-bottom: 1px solid #c1c7cd;
    }
    &:hover fieldset {
      border-color: ${(props) => props.theme.palette.secondary.dark};
    }
    & .Mui-focused fieldset {
      border-color: ${(props) => props.theme.palette.primary.main};
      border-width: 1px;
    }
    & .MuiInputAdornment-root {
      position: absolute;
      right: 0;
      padding-right: 16px;
      margin: 0;
    }
  }
`;

const PasswordSubtitle = styled(Typography)`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  margin-top: 4px;
  color: ${(props) => props.theme.palette.text.secondary};
`;

const AdditionalFields = styled(FormControl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledCheckbox = styled('div')`
  width: 16px;
  height: 16px;
  padding: 2px;
  border: 1px solid;
  color: ${(props) => props.theme.palette.text.primary};
  :hover {
    background-color: ${(props) => props.theme.palette.secondary.light};
  }
`;

const StyledButton = styled(Button)`
  padding: 14px 12px 14px 12px;
  border-radius: 0;
  text-transform: none;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.03em;
`;

const StyledOutlinedButton = styled(Button)`
  padding: 10px;
  border-radius: 0;
  text-transform: none;
  line-height: 1;
  letter-spacing: 0.5em;
  border-width: 2px;
  border-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.main};
  flex: 1;
  & .MuiButton-startIcon {
    width: 24px;
    height: 24px;
  }
  &:hover {
    border-width: 2px;
  }
`;
