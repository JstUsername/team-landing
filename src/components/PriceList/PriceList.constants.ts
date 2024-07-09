import { Service } from './PriceList.types';

const baseFeatures = ['Инфекции', 'Общая медицина', 'Травмы', 'Терапия', 'Неврология'];
const advancedFeatures = [...baseFeatures, 'Эндокринология', 'Фтизиатрия', 'Флебология'];
const expertFeatures = [...advancedFeatures, 'Педиатрия', 'Кардиология', 'Дерматология', 'Онкология'];

export const Services: Service[] = [
  {
    name: 'Стажер',
    desc: 'Для начинающих специалистов',
    price: '$35',
    sale: '$25',
    features: baseFeatures,
    isPopular: false,
  },
  {
    name: 'Специалист',
    desc: 'Для уверенных специалистов',
    price: '$65',
    sale: '$55',
    features: advancedFeatures,
    isPopular: true,
  },
  {
    name: 'Эксперт',
    desc: 'Для шерстяных волчар',
    price: '$125',
    sale: '$95',
    features: expertFeatures,
    isPopular: false,
  },
];
