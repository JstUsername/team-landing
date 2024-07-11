import { styled } from '@mui/material';

export const Popup = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 675px;
  max-width: 736px;
  gap: 16px;
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
