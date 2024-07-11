import { styled } from '@mui/material';

const StyledChip = styled('div')<{ hidden?: boolean }>`
  padding: 2px 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
`;

export default StyledChip;
