import { styled } from '@mui/material';

export const FormInput = styled('input')`
  width: 100%;
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.underline};
`;

