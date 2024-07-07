import { Box, ListItem, Link, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import arrowRight from '../../assets/articles/arrow-right.svg';
import { IArticle } from '../Articles/Articles.types';
import { ArticleDescription, ArticleLinkText, ArticleTitle } from './ArticleItem.styled';
import { ArticleLoad, LoadWrapper } from '../Articles/Articles.styled';
import TLoad from '../../assets/articles/T.svg';

const ArticleItem: React.FC<IArticle> = ({ title, imgUrl, alt, description }) => {
  const theme = useTheme();

  const truncateText = (text: string) => (text.length <= 79 ? text : text.slice(0, 79) + '...');

  return (
    <ListItem
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: '8px',
        maxWidth: '308px',
        overflow: 'hidden',
        p: 0,
      }}
    >
      <Box width={'100%'} bgcolor={'#F3F7FF'}>
        {imgUrl ? (
          <CardMedia component="img" image={imgUrl} alt={alt} height="220" />
        ) : (
          <ArticleLoad>
            <LoadWrapper>
              <img src={TLoad} alt="" width={17} height={26} />
            </LoadWrapper>
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
            textTransform={'lowercase'}
            sx={{
              textTransform: 'capitalize',
            }}
          >
            Подробнее
          </ArticleLinkText>
          <Box padding={'5px'} marginLeft={'16px'} display={'flex'}>
            <img src={arrowRight} alt="" />
          </Box>
        </Link>
      </Box>
    </ListItem>
  );
};

export default ArticleItem;
