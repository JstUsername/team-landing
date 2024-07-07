import {
  Box,
  Divider,
  Container,
  Grid,
  styled,
  Typography,
  List,
  ListItem,
  Button,
  Link,
  SvgIcon,
  CardMedia,
} from '@mui/material';
import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import arrowRight from '../../assets/articles/arrow-right.svg';

const ArticleItem: FC = ({ title, imgUrl, link, alt, width, heigth, description }) => {
  const theme = useTheme();

  const addPoint = () => ([...description].length > 79 ? description + '...' : description);

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
        <CardMedia component="img" image={imgUrl ?? ''} alt={alt} height="220" />
      </Box>
      <Box sx={{ p: '24px 16px 16px' }}>
        <Typography variant={'h5'} mb={'16px'}>
          {title}
        </Typography>
        <Typography variant={'body2'}>{addPoint()}</Typography>
      </Box>
      <Box padding={'16px'} width={'100%'}>
        <Link
          href="#"
          underline="none"
          display={'inline-flex'}
          alignItems={'center'}
          sx={{ cursor: 'pointer' }}
        >
          <Typography
            variant="button"
            letterSpacing={'0.5px'}
            textTransform={'lowercase'}
            sx={{
              textTransform: 'capitalize'
            }}
          >
            Подробнее
          </Typography>
          <Box padding={'5px'} marginLeft={'16px'} display={'flex'}>
            <img src={arrowRight} alt="" />
          </Box>
        </Link>
      </Box>
    </ListItem>
  );
};

export default ArticleItem;
