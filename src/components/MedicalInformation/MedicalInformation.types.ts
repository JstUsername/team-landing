import { ReactElement } from 'react';

export type TypeMedicalInformationCard = {
  image: ReactElement;
  title: string;
  text: string;
  icon: string;
  name: string;
  profession: string;
};

export type TypeCard = {
  activeIndex: number;
};
