import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../../theme';

export const ArticleTitle = styled(Typography)`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    font-size: 16px;
    line-height: 1.1;
  }
`;

export const ArticleDescription = styled(Typography)`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    font-size: 14px;
    line-height: 1.1;
  }
`;

export const ArticleLinkText = styled(Typography)`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    font-size: 14px;
    line-height: 1.1;
  }
`;
