import { Link, styled } from '@mui/material';

export const ArticleSection = styled('section')`
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const ArticlesContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 80px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 48px 16px;
    gap: 32px;
  }
`;

export const ArticlesList = styled('ul')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 16px;
  padding: 0;
  margin: 0;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const AllArticlesLink = styled(Link)`
  color: ${({ theme }) => theme.palette.background.default};
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 18px 32px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
