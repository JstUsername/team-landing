import { FormLinkProps } from './FormLink.types.ts';
import Typography from '@mui/material/Typography';
import { StyledLink } from './FormLink.styled.ts';

export default function FormLink({ linkTo, linkText }: FormLinkProps) {
  return (
    <StyledLink to={linkTo}>
      <Typography variant={"body1"} sx={{ fontSize: '14px' }}>
        {linkText}
      </Typography>
    </StyledLink>
  );
}
