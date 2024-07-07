import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArticleItem from '../ArticlesItem/ArticleItem';
import { ArticlesData } from './Articles.types';
import { AllArticlesLink, ArticlesContainer, ArticleSection, ArticlesList, ArticleTitle } from './Articles.styled';

const Articles: React.FC = () => {
  const theme = useTheme();

  return (
    <ArticleSection>
      <ArticlesContainer>
        <Box display="flex" flexDirection={'column'} alignItems={'center'}>
          <Typography variant={'caption'} mb="8px" color={theme.palette.primary.dark}>
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
