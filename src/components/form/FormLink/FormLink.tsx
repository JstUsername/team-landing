import { FormLinkProps } from './FormLink.types.ts';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export default function FormLink({ linkTo, linkText }: FormLinkProps) {
  return (
    <StyledLink to={linkTo}>
      <Typography variant="body1" sx={{ fontSize: '14px' }}>
        {linkText}
      </Typography>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.dark};
  display: inline-block;
  width: fit-content;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
