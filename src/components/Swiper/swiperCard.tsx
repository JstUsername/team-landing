import { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { ICard, ISwiperCard } from './types';

const SwiperCard: FC<ISwiperCard & ICard> = ({ name, icon, text, profession, title, image, activeIndex }) => {
  return (
    <SwiperBox activeindex={activeIndex}>
      <SwiperCardGridAll>
        <FlexBox>
          <img src={image} alt="логотип" width={32} height={32} />
          <Typography variant={'h4'} color={'text.secondary'}>
            {title}
          </Typography>
        </FlexBox>
        <Typography variant={'subtitle1'} fontWeight={400} color={'text.primary'} textAlign={'center'}>
          {text}
        </Typography>
        <SwiperCardGrid>
          <img src={icon} alt="иконка" width={48} height={48} />
          <Box textAlign={'center'}>
            <Typography variant={'h4'} color={'text.primary'}>
              {name}
            </Typography>
            <Typography variant={'subtitle1'} fontWeight={400} color={'text.primary'}>
              {profession}
            </Typography>
          </Box>
        </SwiperCardGrid>
      </SwiperCardGridAll>
    </SwiperBox>
  );
};

const SwiperBox = styled('div')((props: { activeindex: number }) => ({
  'backgroundColor': '#FFF',
  'border': '1px solid theme.palette.divider',
  'borderRadius': 8,
  'marginBlock': 80,
  'padding': 24,
  'minHeight': 350,
  'minWidth': '49%',
  'transition': 'transform 0.5s ease-in-out',
  //Сдвигаем все слайды на 100% за каждую смену слайда и учитываем gap в 16px между элементами
  'transform': `translateX(calc(-${props.activeindex * 100}% - ${16 * props.activeindex}px))`,
  '@media (max-width: 768px)': {
    minHeight: 425,
    minWidth: '100%',
  },
}));

const SwiperCardGridAll = styled('div')({
  'display': 'flex',
  'flexDirection': 'column',
  'flex': 1,
  'gap': 32,
  'alignItems': 'center',
  'justifyItems': 'center',
  'paddingTop': 32,
  '@media (max-width: 1440px)': {
    height: '100%',
    paddingTop: 0,
    justifyContent: 'space-around',
  },
});

const SwiperCardGrid = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'center',
  justifyItems: 'center',
});

const FlexBox = styled('div')({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  justifyContent: 'center',
});

export default SwiperCard;
