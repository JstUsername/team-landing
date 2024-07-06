import { FC, TouchEventHandler, useRef, useState } from 'react';
import { Container, styled, useMediaQuery } from '@mui/material';
import SwiperCard from './swiperCard';
import { swiperData } from '../../constants/constants';
import ButtonLeft from '../../assets/Swiper/swiperButtonLeft.svg';
import ButtonRight from '../../assets/Swiper/swiperButtonRight.svg';
import theme from '../../theme';

const Swiper: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<number | null>(null);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const lastIndex = isSmallScreen ? swiperData.length - 1 : swiperData.length - 2;

  const prevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(lastIndex);
    } else {
      setActiveIndex((prevState) => prevState - 1);
    }
  };

  const nextSlide = () => {
    if (activeIndex === lastIndex) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prevState) => prevState + 1);
    }
  };
  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    ref.current = e.touches[0].clientX;
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    const touchDown = ref.current;
    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextSlide();
    } else if (diff < -5) {
      prevSlide();
    }
    ref.current = null;
  };

  return (
    <Section>
      <Container maxWidth={'lg'} sx={{ marginBlock: { xs: 5, sm: 10 } }}>
        <GridContainer>
          <SwiperBox>
            <SwiperButton onClick={prevSlide}>
              <img src={ButtonLeft} alt="стрелка влево" />
            </SwiperButton>
            <SwiperCardGrid onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
              {swiperData.map(({ image, title, name, text, icon, profession }, index) => (
                <SwiperCard
                  key={index}
                  image={image}
                  title={title}
                  text={text}
                  icon={icon}
                  name={name}
                  activeIndex={activeIndex}
                  profession={profession}
                />
              ))}
            </SwiperCardGrid>
            <SwiperButton onClick={nextSlide}>
              <img src={ButtonRight} alt="стрелка вправо" />
            </SwiperButton>
          </SwiperBox>
        </GridContainer>
      </Container>
    </Section>
  );
};

const Section = styled('section')`
  background: linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%);
`;

const GridContainer = styled('div')({
  'marginInline': 80,
  '@media (max-width: 768px)': {
    marginInline: 0,
  },
});

const SwiperCardGrid = styled('div')`
  display: flex;
  gap: 16px;
  overflow: hidden;
`;

const SwiperBox = styled('div')({
  display: 'flex',
  gap: 16,
  justifyContent: 'center',
  alignItems: 'center',
});

const SwiperButton = styled('button')({
  border: 'none',
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  width: 24,
  height: 24,
  cursor: 'pointer',
});

export default Swiper;
