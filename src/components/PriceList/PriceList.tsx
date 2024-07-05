import { Box, Stack, StackProps, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import PricingElem from './PriceElem';
import { Services } from './constants';
import Toggle from '../commons/Toggle/Toggle';
import { useState } from 'react';
import StyledChip from '../commons/StyledChip/Chip';
import {
  StyledSectionDescription,
  StyledSectionHeader,
  StyledSectionSubHeader,
} from '../commons/StyledSectionHeaders/SectionHeaders';

const PriceList = () => {
  const theme = useTheme();
  const [isToggleChecked, setIsToggleChecked] = useState(true);
  const matches = useMediaQuery(`(width < ${theme.breakpoints.values.md}px)`);

  return (
    <StyledPriceList component="section">
      <Stack sx={{ textAlign: 'center' }} gap={matches ? '24px' : '48px'}>
        <Stack gap={'8px'}>
          <StyledSectionSubHeader>цены</StyledSectionSubHeader>
          <StyledSectionHeader variant={'h2'}>Лучший источник медицинской информации</StyledSectionHeader>
        </Stack>
        <StyledSectionDescription>
          Сервис для врачей, доступный на разных устройствах по подписке на эксклюзивные статьи от ведущих экспертов в
          сфере здравоохранения и охраны здоровья
        </StyledSectionDescription>
      </Stack>
      <Stack alignItems="center" position={'relative'}>
        <SaleChip visible={isToggleChecked.toString()}>
          <Typography fontSize={'12px'} lineHeight={1.1}>
            20% дешевле
          </Typography>
        </SaleChip>
        <Box display="flex" alignItems="center" gap="16px">
          <Typography variant="subtitle1">Год</Typography>
          <Box display={'flex'} alignItems={'center'} sx={{ transform: 'rotate(180deg)' }}>
            <Toggle checked={isToggleChecked} setChecked={setIsToggleChecked} />
          </Box>
          <Typography variant="subtitle1">Месяц</Typography>
        </Box>
      </Stack>
      <ServiceList>
        {Services.map((service, idx) => (
          <PricingElem key={idx} service={service} />
        ))}
      </ServiceList>
    </StyledPriceList>
  );
};

const StyledPriceList = styled(Stack)<StackProps>`
  padding: 80px;
  gap: 48px;
  background-color: #fff;

  @media (width < 1024px) {
    padding: 48px 16px;
    gap: 32px;
  }
`;

const ServiceList = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  @media (width < ${(props) => props.theme.breakpoints.values.md}px) {
    grid-template-columns: 1fr;
  }
`;

const SaleChip = styled(StyledChip)<{ visible: string }>`
  visibility: ${(props) => (props.visible === 'true' ? 'visible' : 'hidden')};
  position: absolute;
  left: 50%;
  transform: translate(-50%, -120%);
`;

export default PriceList;
