import { FC, TouchEventHandler, useRef, useState } from 'react';
import { Container, styled, useMediaQuery } from '@mui/material';
import { medicalInformationData } from './constants';
import MedicalInformationCard from './MedicalInformationCard';
import ButtonLeft from '../../assets/MedicalInformation/swiperButtonLeft.svg';
import ButtonRight from '../../assets/MedicalInformation/swiperButtonRight.svg';
import { Theme } from '@mui/material/styles';

const MedicalInformation: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<number | null>(null);

  const isSmallScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  const lastIndex = isSmallScreen ? medicalInformationData.length - 1 : medicalInformationData.length - 2;

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
      <Container maxWidth="lg" sx={{ marginBlock: { xs: 5, sm: 10 } }}>
        <GridContainer>
          <SwiperBox>
            <SwiperButton onClick={prevSlide}>
              <img src={ButtonLeft} alt="стрелка влево" />
            </SwiperButton>
            <SwiperCardGrid onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
              {medicalInformationData.map((item, index) => (
                <MedicalInformationCard key={index} {...item} activeIndex={activeIndex} />
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
  background: ${({ theme }) => theme.palette.gradients.blueGradient};
`;

const GridContainer = styled('div')`
  margin-inline: 80px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-inline: 0;
  }
`;

const SwiperCardGrid = styled('div')`
  display: flex;
  gap: 16px;
  overflow: hidden;
`;

const SwiperBox = styled('div')`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const SwiperButton = styled('button')`
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default MedicalInformation;
