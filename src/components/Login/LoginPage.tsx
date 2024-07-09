import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import theme from '../../theme.tsx';
import FormInput from '../../commons/FormInput/FormInput.tsx';
import FormPasswordInput from '../../commons/FormPasswordInput/FormPasswordInput.tsx';
import FormEmailInput from '../../commons/FormEmailInput/FormEmailInput.tsx';
import FormLink from '../../commons/FormLink/FormLink.tsx';
import FormCheckbox from '../../commons/FormCheckbox/FormCheckbox.tsx';
import loginImage from '../../assets/login/images/login.webp';
import AppleIcon from '../../assets/login/icons/apple.svg?react';
import GoogleIcon from '../../assets/login/icons/google.svg?react';

interface LoginProps {
  typeLogin: string;
}

export default function LoginPage({ typeLogin }: LoginProps) {
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
        <img
          src={loginImage}
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
  ${({ theme }) => theme.breakpoints.down('sm')} {
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
  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 100%;
    gap: 32px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 32px 16px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 80px;
  }
`;

const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AdditionalFields = styled(FormControl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  padding: 14px 12px;
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