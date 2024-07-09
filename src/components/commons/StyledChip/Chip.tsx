import { styled } from '@mui/material';

const StyledChip = styled('div')`
  padding: 2px 12px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export default StyledChip;
