import { useNavigate } from 'react-router-dom';
import { Theme, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import {
  StyledGrid,
  LeftColumnWrapper,
  FormWrapper,
  AdditionalFields,
  StyledButton,
  StyledOutlinedButton,
  SplitImage,
} from './LoginPage.styled.ts';
import FormInput from '../../components/form/FormInput/FormInput.tsx';
import FormPasswordInput from '../../components/form/FormPasswordInput/FormPasswordInput.tsx';
import FormEmailInput from '../../components/form/FormEmailInput/FormEmailInput.tsx';
import FormLink from '../../components/form/FormLink/FormLink.tsx';
import FormCheckbox from '../../components/form/FormCheckbox/FormCheckbox.tsx';
import loginImage from '../../assets/login/images/login.webp';
import AppleIcon from '../../assets/login/icons/apple.svg?react';
import GoogleIcon from '../../assets/login/icons/google.svg?react';

interface LoginProps {
  typeLogin: string;
}

export default function LoginPage({ typeLogin }: LoginProps) {
  const theme = useTheme<Theme>();
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <StyledGrid container spacing={0}>
      <Grid xs={12} sm={6}>
        <LeftColumnWrapper>
          <Typography variant="formHeader" sx={{ margin: 0 }}>
            {typeLogin === 'registration' ? 'Регистрация' : 'Вход'}
          </Typography>
          <FormWrapper component="form">
            {typeLogin === 'registration' && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <FormInput inputId="name-input" inputLabel="Имя" inputPlaceholder="Иван" inputSx={{ flex: 1 }} />
                <FormInput
                  inputId="surname-input"
                  inputLabel="Фамилия"
                  inputPlaceholder="Иванов"
                  inputSx={{ flex: 1 }}
                />
              </Box>
            )}
            <FormEmailInput />
            <FormPasswordInput
              typeLogin={typeLogin}
              passwordSubtitle="Пароль должен содержать минимум 8 символов, строчные и прописные символы"
            />
            <AdditionalFields>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <FormCheckbox typeLogin={typeLogin} />
              </Box>
              {typeLogin === 'authorization' && <FormLink linkTo="" linkText="Забыли пароль?" />}
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
            <FormLink linkTo="/login" linkText="Нет аккаунта? Зарегистрироваться" />
          ) : (
            <FormLink linkTo="/registration" linkText="Уже есть аккаунт?" />
          )}
        </LeftColumnWrapper>
      </Grid>
      <Grid xs={0} sm={6}>
        <SplitImage src={loginImage} alt="Decorative image from the login page" />
      </Grid>
    </StyledGrid>
  );
}
