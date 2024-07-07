import { Box, Typography, ListItem, Link, CardMedia } from '@mui/material';
import styled from '@emotion/styled';
import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import arrowRight from '../../assets/articles/arrow-right.svg';
import IArticle from './interface';

// const fontVariants = (variant)=>{
//   switch (variant){
//     case 'h2': 
//       return '12px'
//     case 'h3':
//       return '10px'
//   }
// }

// const Text = styled.p((props => ({
//   fontSize: fontVariants(props.variant),
// })))

const ArticleItem: FC<IArticle> = ({ title, imgUrl, alt, description }) => {
  const theme = useTheme();

  const addPoint = () => ([...description].length > 79 ? description + '...' : description);



  const StyledMainTitle = styled(Typography)`


  @media (max-width: ${theme.breakpoints.values.sm}px) {
    
  }
`;

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
        <StyledMainTitle variant={'h5'} mb={'16px'}>
          {title}
        </StyledMainTitle>
        <Typography variant={'body2'}>{addPoint()}</Typography>
      </Box>
      <Box padding={'16px'} width={'100%'} marginTop={'auto'}>
        <Link href="#" underline="none" display={'inline-flex'} alignItems={'center'}  sx={{ cursor: 'pointer' }}>
          <Typography
            variant="button"
            letterSpacing={'0.5px'}
            textTransform={'lowercase'}
            sx={{
              textTransform: 'capitalize',
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
