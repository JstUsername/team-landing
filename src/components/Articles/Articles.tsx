import { Box, Typography } from '@mui/material';
import ArticleItem from '../ArticlesItem/ArticleItem';
import { ArticlesData } from './constants';
import { AllArticlesLink, ArticlesContainer, ArticleSection, ArticlesList, ArticleTitle } from './Articles.styled';

const Articles = () => {
  return (
    <ArticleSection>
      <ArticlesContainer>
        <Box display="flex" flexDirection={'column'} alignItems={'center'}>
          <Typography variant={'caption'} mb="8px" color='primary.dark'>
            Статьи
          </Typography>
          <ArticleTitle variant={'h2'} textAlign={'center'}>
            Статьи для врачей, пациентов и их родственников, а также
            <br />
            научно-популярные доклады о прорывах в медицине
          </ArticleTitle>
        </Box>
        <Box>
          <ArticlesList>
            {ArticlesData.map((item, idx) => (
              <ArticleItem key={idx} {...item} />
            ))}
          </ArticlesList>
        </Box>
        <AllArticlesLink href="#" underline="none">
          <Typography>Все статьи</Typography>
        </AllArticlesLink>
      </ArticlesContainer>
    </ArticleSection>
  );
};

export default Articles;
