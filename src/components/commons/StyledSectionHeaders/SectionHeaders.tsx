import { Typography, styled } from '@mui/material';

export const StyledSectionHeader = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h2.fontSize}px;
  font-weight: ${(props) => props.theme.typography.h2.fontWeight};
  line-height: ${(props) => props.theme.typography.h2.lineHeight}em;

  @media (width < ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: ${(props) => props.theme.typography.h4.fontSize}px;
    line-height: ${(props) => props.theme.typography.h4.lineHeight}em;
  }
`;

export const StyledSectionSubHeader = styled('span')`
  font-size: 20px;
  line-height: 1;
  letter-spacing: '1px';
  text-transform: uppercase;

  color: ${(props) => props.theme.palette.primary.dark};

  font-weight: 700;
`;

export const StyledSectionDescription = styled(Typography)`
  font-size: ${(props) => props.theme.typography.body1.fontSize}px;
  line-height: ${(props) => props.theme.typography.body1.lineHeight}em;
  letter-spacing: ${(props) => props.theme.typography.body1.letterSpacing};

  @media (width < ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: ${(props) => props.theme.typography.body2.fontSize}px;
    line-height: ${(props) => props.theme.typography.body2.lineHeight}em;
    letter-spacing: ${(props) => props.theme.typography.body2.letterSpacing};
  }
`;
