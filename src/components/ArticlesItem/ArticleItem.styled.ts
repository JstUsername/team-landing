import { styled } from '@mui/material';

export const ArticleListItem = styled('li')`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 8px;
  max-width: 308px;
  overflow: hidden;
  padding: 0;
`;
