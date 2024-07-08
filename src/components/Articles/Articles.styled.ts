import { Link, Typography } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../../theme';

export const ArticleSection = styled.section`
  background: ${theme.palette.background.default};
`;

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 80px;
  align-items: center;

  ${theme.breakpoints.down('sm')} {
    padding: 48px 16px;
    gap: 32px;
  }
`;

export const ArticleTitle = styled(Typography)`
  ${theme.breakpoints.down('sm')} {
    font-size: 24px;
    line-height: 1.1;
  }
`;

export const ArticlesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 16px;
  padding: 0;
  margin: 0;

  ${theme.breakpoints.down('md')} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const AllArticlesLink = styled(Link)`
  color: ${theme.palette.background.default};
  background-color: ${theme.palette.primary.main};
  padding: 18px 32px;
  cursor: pointer;

  :hover {
    background-color: #1b6fe4;
  }
`;
