import { Box, Typography, Link } from '@mui/material';
import { FC } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import ArticleItem from './ArticleItem';
import ArticlesData from './Data';
import theme from '../../theme'

const ArticleSection = styled.section`
  background: #fff;
`;

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 80px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 16px 48px;
  }
`;

const ArticlesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 16px;
  padding: 0;
  margin: 0;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const AllArticlesLink = styled(Link)`
  :hover {
    background-color: #1b6fe4;
  }
`;

const Articles: FC = () => {
  const theme = useTheme();
  console.log(theme.breakpoints)

  return (
    <ArticleSection>
      <ArticlesContainer>
        <Box display="flex" flexDirection={'column'} alignItems={'center'}>
          <Typography variant={'caption'} mb="8px" color={theme.palette.primary.dark}>
            Статьи
          </Typography>
          <Typography variant={'h2'} textAlign={'center'}>
            Статьи для врачей, пациентов и их родственников, а также
            <br />
            научно-популярные доклады о прорывах в медицине
          </Typography>
        </Box>
        <Box>
          <ArticlesList>
            {ArticlesData.map((item, idx) => (
              <ArticleItem key={idx} {...item} />
            ))}
          </ArticlesList>
        </Box>

        <AllArticlesLink
          href="#"
          underline="none"
          sx={{
            color: '#FFF',
            backgroundColor: theme.palette.primary.main,
            p: '18px 32px',
            cursor: 'pointer',
          }}
        >
          <Typography>Все статьи</Typography>
        </AllArticlesLink>
      </ArticlesContainer>
    </ArticleSection>
  );
};

export default Articles;
