import IArticle from "./interface";

const ArticlesData: IArticle[] = [
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

export default ArticlesData;