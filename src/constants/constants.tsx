import Smile from '../assets/Knowledge/smile.svg';
import Copy from '../assets/Knowledge/copy.svg';
import Pizza from '../assets/Knowledge/pizza.svg';
import People from '../assets/Knowledge/people.svg';
import theme from '../theme';
import { IKnowledgeInfo } from '../components/Knowledge/types';
import { ChartOptions } from 'chart.js';

export const knowledgeInfo: IKnowledgeInfo[] = [
  {
    image: Smile,
    statistics: '250+',
    description: 'Научных статей',
    id: 1,
  },
  {
    image: Copy,
    statistics: '600+',
    description: 'Просмотров за статью',
    id: 2,
  },
  {
    image: Pizza,
    statistics: '1.8K+',
    description: 'Посетителей в день',
    id: 3,
  },
  {
    image: People,
    statistics: '11K+',
    description: 'Посетителей в неделю',
    id: 4,
  },
];

export const data = {
  labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'],
  datasets: [
    {
      label: 'Текущий год',
      data: [200, 390, 420, 602, 500, 549, 500, 590, 580, 630, 820, 900],
      borderColor: theme.palette.primary.main,
      pointBackgroundColor: '#FFF',
      borderWidth: 2,
      tension: 0.4,
    },
    {
      label: 'Прошлый год  ',
      data: [220, 330, 430, 402, 468, 549, 520, 534, 550, 430, 720, 821],
      borderColor: theme.palette.secondary.main,
      pointBackgroundColor: '#FFF',
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};

export const chartConfig: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 5,
    },
  },
  scales: {
    x: {
      ticks: {
        color: theme.palette.secondary.dark,
        font: {
          size: 12,
          weight: 400,
        },
      },
      grid: {
        display: false,
      },
      alignToPixels: true,
    },
    y: {
      ticks: {
        color: theme.palette.secondary.dark,
        font: {
          size: 12,
          weight: 400,
        },
      },
      alignToPixels: true,
      min: 0,
      max: 1000,
    },
  },
  plugins: {
    title: {
      display: true,
      text: 'Публикации',
      align: 'start',
      color: theme.palette.text.primary,
      font: {
        size: 18,
        weight: 700,
      },
      padding: {
        bottom: 16,
      },
    },
    legend: {
      display: true,
      align: 'start',
      reverse: true,
      labels: {
        pointStyle: 'circle',
        padding: 0,
        usePointStyle: true,
        boxWidth: 16,
        boxHeight: 8,
        color: theme.palette.secondary.dark,
        font: {
          size: 16,
          weight: 400,
        },
      },
    },
  },
  layout: {
    padding: 16,
  },
};
