import { useState, KeyboardEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../../theme.tsx';
import FormInput from '../../commons/FormInput/FormInput.tsx';
import AppleIcon from '../../assets/login/icons/apple.svg?react';
import EyeIcon from '../../assets/login/icons/eye.svg?react';
import GoogleIcon from '../../assets/login/icons/google.svg?react';
import UnionIcon from '../../assets/login/icons/union.svg?react';

interface LoginProps {
  typeLogin: string;
}

export default function LoginPage({ typeLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setChecked((prev) => !prev);
    }
  };

  return (
    <StyledGrid container spacing={0}>
      <Grid xs={12} sm={6}>
        <LeftColumnWrapper>
          <Typography variant={isSmallScreen ? 'h3' : 'h2'} sx={{ margin: 0 }}>
            {typeLogin === 'registration' ? 'Регистрация' : 'Вход'}
          </Typography>
          <FormWrapper component="form">
            {typeLogin === 'registration' && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <FormControl sx={{ flex: 1 }}>
                  <FormInput inputId="name-input" inputLabel="Имя" inputPlaceholder="Иван" />
                </FormControl>
                <FormControl sx={{ flex: 1 }}>
                  <FormInput inputId="surname-input" inputLabel="Фамилия" inputPlaceholder="Иванов" />
                </FormControl>
              </Box>
            )}
            <FormControl>
              <FormInput inputId="email-input" inputLabel="Email" inputPlaceholder="example@email.com" />
            </FormControl>
            <FormControl>
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
                        <EyeIcon title="Change password visibility" width="20px" height="20px" />
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
                <StyledCheckbox tabIndex={0} onClick={() => setChecked((prev) => !prev)} onKeyDown={handleKeyDown}>
                  {checked && <UnionIcon title="Union" style={{ position: 'absolute', left: '3px', top: '5px' }} />}
                </StyledCheckbox>
                <Typography variant="body1" sx={{ fontSize: '14px' }}>
                  {typeLogin === 'registration'
                    ? 'Согласен с политикой обработки персональных данных'
                    : 'Запомнить меня'}
                </Typography>
              </Box>
              {typeLogin === 'authorization' && (
                <StyledLink to="">
                  <Typography variant="body1" sx={{ fontSize: '14px' }}>
                    Забыли пароль?
                  </Typography>
                </StyledLink>
              )}
            </AdditionalFields>
            <FormControl>
              <StyledButton variant="contained" onClick={goToHome}>
                {typeLogin === 'registration' ? 'Зарегистрироваться' : 'Вход'}
              </StyledButton>
            </FormControl>
          </FormWrapper>
          <Box sx={{ display: 'flex', gap: 2, [theme.breakpoints.down('lg')]: { flexDirection: 'column' } }}>
            <StyledOutlinedButton variant="outlined" startIcon={<GoogleIcon title="Google icon" />} onClick={goToHome}>
              <Typography sx={{ paddingX: 2, fontSize: '16px' }}>Вход с помощью Google</Typography>
            </StyledOutlinedButton>
            <StyledOutlinedButton variant="outlined" startIcon={<AppleIcon title="Apple icon" />} onClick={goToHome}>
              <Typography sx={{ paddingX: 2, fontSize: '16px' }}>Вход с помощью Apple</Typography>
            </StyledOutlinedButton>
          </Box>
          <Divider />
          {typeLogin === 'registration' ? (
            <StyledLink to="/login">
              <Typography variant="body1" sx={{ fontSize: '14px' }}>
                Нет аккаунта? Зарегистрироваться
              </Typography>
            </StyledLink>
          ) : (
            <StyledLink to="/registration">
              <Typography variant="body1" sx={{ fontSize: '14px' }}>
                Уже есть аккаунт?
              </Typography>
            </StyledLink>
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
    </StyledGrid>
  );
}

const StyledGrid = styled(Grid)`
  height: 100vh;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    height: 100%;
    overflow: auto;
  }
`;

const LeftColumnWrapper = styled(Box)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    height: 100%;
    gap: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    padding: 32px 16px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md + 1}px) {
    padding: 80px;
  }
`;

const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PasswordSubtitle = styled(Typography)`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  margin-top: 4px;
  color: ${({ theme }) => theme.palette.text.secondary};
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
  color: ${({ theme }) => theme.palette.text.primary};
  :hover {
    background-color: ${({ theme }) => theme.palette.secondary.light};
  }
`;

const StyledButton = styled(Button)`
  padding: 14px 12px 14px 12px;
  border-radius: 0;
  text-transform: none;
  font-size: 16px;
  line-height: 1;
`;

const StyledOutlinedButton = styled(Button)`
  padding: 10px;
  border-radius: 0;
  text-transform: none;
  line-height: 1;
  border-width: 2px;
  border-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.main};
  flex: 1;
  & .MuiButton-startIcon {
    width: 24px;
    height: 24px;
  }
  &:hover {
    border-width: 2px;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.dark};
  display: inline-block;
  width: fit-content;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
