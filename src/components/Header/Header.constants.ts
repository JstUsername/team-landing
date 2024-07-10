import { HeaderLiType } from './Header.types.ts';
import MenuIcon from '../../assets/header/icons/menu.svg?react';
import HomeIcon from '../../assets/header/icons/home.svg?react';
import InfoIcon from '../../assets/header/icons/info.svg?react';
import NewspaperIcon from '../../assets/header/icons/newspaper.svg?react';
import MessageIcon from '../../assets/header/icons/message.svg?react';
import BookIcon from '../../assets/header/icons/book.svg?react';
import TagIcon from '../../assets/header/icons/tag.svg?react';
import PaperPlaneIcon from '../../assets/header/icons/paper-plane.svg?react';
import CoinIcon from '../../assets/header/icons/coin.svg?react';

export const HeaderListItems: HeaderLiType[] = [
  {
    label: 'Меню',
    active: true,
    icon: MenuIcon,
  },
  {
    label: 'Главная',
    active: false,
    icon: HomeIcon,
  },
  {
    label: 'О проекте',
    active: false,
    icon: InfoIcon,
  },
  {
    label: 'Статьи',
    active: false,
    icon: NewspaperIcon,
  },
  {
    label: 'Отзывы',
    active: false,
    icon: MessageIcon,
  },
  {
    label: 'Знания',
    active: false,
    icon: BookIcon,
  },
  {
    label: 'Вопросы',
    active: false,
    icon: InfoIcon,
  },
  {
    label: 'Цены',
    active: false,
    icon: TagIcon,
  },
  {
    label: 'Оставить заявку',
    active: false,
    icon: PaperPlaneIcon,
  },
  {
    label: 'Спонсоры',
    active: false,
    icon: CoinIcon,
  },
];
