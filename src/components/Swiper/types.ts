import { ReactElement } from 'react';

export interface ISwiperCard {
  image: ReactElement;
  title: string;
  text: string;
  icon: string;
  name: string;
  profession: string;
}

export interface ICard {
  activeIndex: number;
}
