/// <reference types="vite-plugin-svgr/client" />
import ArtVenueLogo from '../../assets/MedicalInformation/artVenueLogo.svg?react';
import ZoomerLogo from '../../assets/MedicalInformation/zoomerLogo.svg?react';
import SwiperProfile from '../../assets/MedicalInformation/profile.png';
import { TypeMedicalInformationCard } from './MedicalInformation.types';

export const medicalInformationData: TypeMedicalInformationCard[] = [
  {
    image: <ArtVenueLogo width={32} height={32} />,
    title: 'ArtVenue',
    text: 'Астма - это хроническое заболевание легких. Симптомы заболевания включают кашель, свистящее дыхание, одышку и чувство стеснения в груди.',
    icon: SwiperProfile,
    name: 'Кириллов Кирилл',
    profession: 'Пульмонолог',
  },
  {
    image: <ZoomerLogo width={32} height={32} />,
    title: 'Zoomerr',
    text: 'Исследование гласит, что наличие хороших навыков чтения в детском возрасте является предиктором высокого уровня интеллекта у молодых взрослых людей.',
    icon: SwiperProfile,
    name: 'Петров Петр',
    profession: 'Невролог',
  },
  {
    image: <ArtVenueLogo width={32} height={32} />,
    title: 'ArtVenue',
    text: 'Астма - это хроническое заболевание легких. Симптомы заболевания включают кашель, свистящее дыхание, одышку и чувство стеснения в груди.',
    icon: SwiperProfile,
    name: 'Афанасьев Афанасий',
    profession: 'Пульмонолог',
  },
  {
    image: <ZoomerLogo width={32} height={32} />,
    title: 'Zoomerr',
    text: 'Исследование гласит, что наличие хороших навыков чтения в детском возрасте является предиктором высокого уровня интеллекта у молодых взрослых людей.',
    icon: SwiperProfile,
    name: 'Дмитриев Дмитрий',
    profession: 'Невролог',
  },
];
