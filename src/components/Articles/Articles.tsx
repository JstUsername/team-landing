import { Box, Typography } from '@mui/material';
import ArticleItem from '../ArticlesItem/ArticleItem';
import { ArticlesData } from './Articles.constants';
import { AllArticlesLink, ArticlesContainer, ArticleSection, ArticlesList } from './Articles.styled';

const Articles = () => {
  return (
    <ArticleSection>
      <ArticlesContainer>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Typography variant={"caption"} mb={"8px"} color={"primary.dark"} textTransform={"uppercase"}>
            Статьи
          </Typography>
          <Typography variant={"articleMainTitle"} textAlign={"center"}>
            Статьи для врачей, пациентов и их родственников, а также
            <br />
            научно-популярные доклады о прорывах в медицине
          </Typography>
        </Box>
        <Box>
          <ArticlesList>
            {ArticlesData.map((item, index) => (
              <ArticleItem key={index} {...item} />
            ))}
          </ArticlesList>
        </Box>
        <AllArticlesLink href={"#"} underline={"none"}>
          <Typography>Все статьи</Typography>
        </AllArticlesLink>
      </ArticlesContainer>
    </ArticleSection>
  );
};

export default Articles;
