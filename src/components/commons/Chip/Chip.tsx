import { styled } from '@mui/material';

const Chip = styled('div')`
  padding: 2px 12px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.palette.background.paper};
`;

export default Chip;
