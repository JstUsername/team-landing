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
import ArticleItem from './ArticleItem';

const ArticlesData = [
  {
    title: 'Головная боль',
    imgUrl: 'src/assets/articles/headache.jpg',
    link: '#',
    alt: 'Врач держит статоскоп в левой руке скрестив руки',
    width: '',
    height: '',
    description: 'Врач-невролог из Москвы, Иванов Иван Иванович, отвечает на частые вопросы касающиеся проблемы',
  },
  {
    title: 'Мигрень',
    imgUrl: null,
    link: '#',
    alt: 'Врач держит статоскоп в левой руке скрестив руки',
    width: '',
    height: '',
    description: 'Информация для пациентов. Мигрень. Симптомы, диагностика, лечение, профилактика',
  },
  {
    title: 'Доказательная медицина',
    imgUrl: 'src/assets/articles/roentgen.jpg',
    link: '#',
    alt: 'Рентгеновский снимок руки, которая показывает жест "Всё окей"',
    width: '',
    height: '',
    description: 'Читая статьи, и получая консультации на нашем сайте, вы часто будете встречаться',
  },
  {
    title: 'Антидепрессанты',
    imgUrl: 'src/assets/articles/pills.jpg',
    link: '#',
    alt: 'Горсть разбросанных таблеток разного вида',
    width: '',
    height: '',
    description: 'Как показало исследование, антидепрессанты, особенно относящиеся к классе селектив',
  },
];

const Articles: FC = () => {
  const theme = useTheme();

  return (
    <Box component={'section'} display={'flex'} bgcolor={'#FFF'} padding={'80px'}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        <Box display="flex" flexDirection={'column'} alignItems={'center'}>
          <Typography variant={'caption'} mb="8px" color={theme.palette.primary.dark} sx={{

          }}>
            Статьи
          </Typography>
          <Typography variant={'h2'} textAlign={'center'}>
            Статьи для врачей, пациентов и их родственников, а также<br/>научно-популярные доклады о прорывах в медицине
          </Typography>
        </Box>
        <Box>
          <List
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              p: 0,
            }}
          >
            {ArticlesData.map((item, idx) => (
              <ArticleItem key={idx} {...item} />
            ))}
          </List>
        </Box>

        <Link
          href="#"
          underline="none"
          sx={{
            color: '#FFF',
            backgroundColor: theme.palette.primary.main,
            p: '18px 32px',
            cursor: 'pointer',
            
          }}
        >
          <Typography>
            Все статьи
          </Typography>
          
        </Link>
      </Container>
    </Box>
  );
};

export default Articles;
