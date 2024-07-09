/// <reference types="vite-plugin-svgr/client" />
import { Box, Link, CardMedia } from '@mui/material';
import { IArticle } from '../Articles/Articles.types';
import {
  ArticleDescription,
  ArticleLinkText,
  ArticleTitle,
  ArticleLoad,
  ArticleLoadCenter,
  ArticleLoadBox,
  ArticleListItem,
} from './ArticleItem.styled';
import TLoadSvg from '../../assets/articles/T.svg?react';
import ArrowRightSvg from '../../assets/articles/arrow-right.svg?react';

const ArticleItem = ({ title, imgUrl, alt, description }: IArticle) => {
  const truncateText = (text: string) => (text.length <= 79 ? text : text.slice(0, 79) + '...');

  return (
    <ArticleListItem>
      <Box width="100%" bgcolor="background.loading">
        {imgUrl ? (
          <CardMedia component="img" image={imgUrl} alt={alt} height="220" />
        ) : (
          <ArticleLoad>
            <ArticleLoadBox>
              <ArticleLoadCenter>
                <TLoadSvg />
              </ArticleLoadCenter>
            </ArticleLoadBox>
          </ArticleLoad>
        )}
      </Box>
      <Box sx={{ p: '24px 16px 16px' }}>
        <ArticleTitle variant={'h5'} mb={'16px'}>
          {title}
        </ArticleTitle>
        <ArticleDescription variant={'body2'}>{truncateText(description)}</ArticleDescription>
      </Box>
      <Box padding={'16px'} width={'100%'} marginTop={'auto'}>
        <Link href="#" underline="none" display={'inline-flex'} alignItems={'center'} sx={{ cursor: 'pointer' }}>
          <ArticleLinkText
            variant="button"
            letterSpacing={'0.5px'}
            sx={{
              textTransform: 'capitalize',
            }}
          >
            Подробнее
          </ArticleLinkText>
          <Box padding={'5px'} marginLeft={'16px'} display={'flex'}>
            <ArrowRightSvg />
          </Box>
        </Link>
      </Box>
    </ArticleListItem>
  );
};

export default ArticleItem;
