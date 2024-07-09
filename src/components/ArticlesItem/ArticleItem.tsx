/// <reference types="vite-plugin-svgr/client" />
import { Box, Link, CardMedia, Typography } from '@mui/material';
import { TypeArticle } from '../Articles/Articles.types';
import { ArticleListItem } from './ArticleItem.styled';
import ArrowRightSvg from '../../assets/articles/arrow-right.svg?react';
import Loader from '../Loader/Loader';

const ArticleItem = ({ title, imgUrl, alt, description }: TypeArticle) => {
  return (
    <ArticleListItem>
      <Box width="100%" bgcolor="background.loading">
        {imgUrl ? <CardMedia component="img" image={imgUrl} alt={alt} height="220" /> : <Loader />}
      </Box>
      <Box padding="24px 16px 16px">
        <Typography variant="articleTitle" mb="16px">
          {title}
        </Typography>
        <Typography variant="articleDescription">{description}</Typography>
      </Box>
      <Box padding="16px" width="100%" marginTop="auto">
        <Link href="#" underline="none" display="inline-flex" alignItems="center" sx={{ cursor: 'pointer' }}>
          <Typography variant="articleLinkText" textTransform="capitalize">
            Подробнее
          </Typography>
          <Box display="flex" padding="5px" marginLeft="16px">
            <ArrowRightSvg />
          </Box>
        </Link>
      </Box>
    </ArticleListItem>
  );
};

export default ArticleItem;
