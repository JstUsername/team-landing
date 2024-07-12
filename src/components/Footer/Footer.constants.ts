import { SocialMediaIconsType, FooterMiddleUlType } from './Footer.types.ts';
import YoutubeIcon from '../../assets/footer/icons/youtube.svg?react';
import FacebookIcon from '../../assets/footer/icons/facebook.svg?react';
import TwitterIcon from '../../assets/footer/icons/twitter.svg?react';
import InstagramIcon from '../../assets/footer/icons/instagram.svg?react';
import LinkedinIcon from '../../assets/footer/icons/linkedin.svg?react';

export const footerSocialMediaItems: SocialMediaIconsType[] = [
  {
    label: 'YouTube',
    icon: YoutubeIcon,
  },
  {
    label: 'Facebook',
    icon: FacebookIcon,
  },
  {
    label: 'Twitter',
    icon: TwitterIcon,
  },
  {
    label: 'Instagram',
    icon: InstagramIcon,
  },
  {
    label: 'LinkedIn',
    icon: LinkedinIcon,
  },
];

export const adultFooterListItems: FooterMiddleUlType[] = [
  { href: '', text: 'Кардиология' },
  { href: '', text: 'Терапия' },
  { href: '', text: 'Флебология' },
  { href: '', text: 'Травмы' },
];

export const childFooterListItems: FooterMiddleUlType[] = [
  { href: '', text: 'Педиатрия' },
  { href: '', text: 'Инфекции' },
  { href: '', text: 'Неврология' },
  { href: '', text: 'Фтизиатрия' },
];

export const newsFooterListItems: FooterMiddleUlType[] = [
  { href: '', text: 'Новости здравоохранения' },
  { href: '', text: 'Открытия' },
  { href: '', text: 'Документы' },
  { href: '', text: 'Справочники' },
];
