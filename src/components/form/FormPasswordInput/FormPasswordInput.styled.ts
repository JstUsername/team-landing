import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import EyeClose from '../../../assets/login/icons/eye-close.svg?react';

export const PasswordSubtitle = styled(Typography)`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  margin-top: 4px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const EyeCloseIcon = styled(EyeClose)`
  margin-right: -2px;
`;
