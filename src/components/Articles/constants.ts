import { IArticle } from './Articles.types';
import headache from '../../assets/articles/headache.jpg';
import roentgen from '../../assets/articles/roentgen.jpg';
import pills from '../../assets/articles/pills.jpg';

export const ArticlesData: IArticle[] = [
  {
    title: 'Головная боль',
    imgUrl: headache,
    link: '#',
    alt: 'Врач держит статоскоп в левой руке скрестив руки',
    description: 'Врач-невролог из Москвы, Иванов Иван Иванович, отвечает на частые вопросы касающиеся проблемы',
  },
  {
    title: 'Мигрень',
    imgUrl: null,
    link: '#',
    alt: 'Врач держит статоскоп в левой руке скрестив руки',
    description: 'Информация для пациентов. Мигрень. Симптомы, диагностика, лечение, профилактика',
  },
  {
    title: 'Доказательная медицина',
    imgUrl: roentgen,
    link: '#',
    alt: 'Рентгеновский снимок руки, которая показывает жест "Всё окей"',
    description: 'Читая статьи, и получая консультации на нашем сайте, вы часто будете встречаться',
  },
  {
    title: 'Антидепрессанты',
    imgUrl: pills,
    link: '#',
    alt: 'Горсть разбросанных таблеток разного вида',
    description: 'Как показало исследование, антидепрессанты, особенно относящиеся к классе селектив',
  },
];
