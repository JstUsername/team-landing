import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.dark};
  display: inline-block;
  width: fit-content;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
