import { styled } from '@mui/material';

export const Popup = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 736px;
  gap: 16px;
  padding: 212px 48px;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.divider};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 24px 16px;
  }
`;

export const PopupLink = styled('a')`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
`;
