import { styled } from '@mui/material';

export const FormTextarea = styled('textarea')`
  width: 100%;
  min-height: 96px;
  max-height: 250px;
  resize: vertical;
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.underline};
`;
