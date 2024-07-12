import { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { TypeCard, TypeMedicalInformationCard } from './MedicalInformation.types';

const MedicalInformationCard: FC<TypeMedicalInformationCard & TypeCard> = ({
  name,
  icon,
  text,
  profession,
  title,
  image,
  activeIndex,
}) => {
  return (
    <SwiperBox activeindex={activeIndex}>
      <SwiperCardGridAll>
        <FlexBox>
          {image}
          <Typography variant={"h4"} color={"text.secondary"}>
            {title}
          </Typography>
        </FlexBox>
        <Typography variant={"subtitle1"} fontWeight={400} color={"text.primary"} textAlign={"center"}>
          {text}
        </Typography>
        <SwiperCardGrid>
          <img src={icon} alt={"иконка"} width={48} height={48} />
          <Box textAlign={"center"}>
            <Typography variant={'h4'} color={"text.primary"}>
              {name}
            </Typography>
            <Typography variant={"subtitle1"} fontWeight={400} color={"text.primary"}>
              {profession}
            </Typography>
          </Box>
        </SwiperCardGrid>
      </SwiperCardGridAll>
    </SwiperBox>
  );
};

const SwiperBox = styled('div')<{ activeindex: number }>`
  background-color: ${({ theme }) => theme.palette.background.default};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 8px;
  margin-block: 80px;
  padding: 24px;
  min-height: 350px;
  min-width: 49%;
  transition: transform 0.5s ease-in-out;
  //Сдвигаем все слайды на 100% за каждую смену слайда и учитываем gap в 16px между элементами
  transform: translateX(calc(-${(props) => props.activeindex * 100}% - ${(props) => 16 * props.activeindex}px));
${({ theme }) => theme.breakpoints.down('sm')} {
    min-height: 425px;
    min-width: 100%;
  },
`;

const SwiperCardGridAll = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 32px;
  align-items: center;
  justify-items: center;
  padding-top: 32px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 100%;
    padding-top: 0;
    justify-content: space-around;
  }
`;

const SwiperCardGrid = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-items: center;
`;

const FlexBox = styled('div')`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export default MedicalInformationCard;
