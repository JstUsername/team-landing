import { Link, Typography } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../../theme';

export const ArticleSection = styled.section`
  background: #fff;
`;

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 80px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 48px 16px;
    gap: 32px;
  }
`;

export const ArticleTitle = styled(Typography)`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
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

  @media (max-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const AllArticlesLink = styled(Link)`
  :hover {
    background-color: #1b6fe4;
  }
`;

export const ArticleLoad = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
`;
export const LoadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 37px;
  background: linear-gradient(360deg, rgba(69, 143, 246, 0), rgba(69, 143, 246, 1) 100%);
`;
