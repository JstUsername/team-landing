import { Box, Stack, StackProps, Typography, styled } from '@mui/material';
import PricingElem from './PriceElem';
import { Services } from './PriceList.constants';
import Toggle from '../commons/Toggle/Toggle';
import { useState } from 'react';
import StyledChip from '../commons/StyledChip/Chip';

const PriceList = () => {
  const [isToggleChecked, setIsToggleChecked] = useState(true);

  return (
    <StyledPriceList component="section">
      <SectoinHeaderBlock>
        <Stack gap="8px">
          <Typography variant="sectionSubHeader">цены</Typography>
          <Typography variant="sectionHeader">Лучший источник медицинской информации</Typography>
        </Stack>
        <Typography variant="sectionDescription">
          Сервис для врачей, доступный на разных устройствах по подписке на эксклюзивные статьи от ведущих экспертов в
          сфере здравоохранения и охраны здоровья
        </Typography>
      </SectoinHeaderBlock>
      <Stack alignItems="center" position="relative">
        <SaleChip visible={isToggleChecked.toString()}>
          <Typography fontSize="12px" lineHeight={1.1}>
            20% дешевле
          </Typography>
        </SaleChip>
        <Box display="flex" alignItems="center" gap="16px">
          <Typography variant="subtitle1">Год</Typography>
          <Box display="flex" alignItems="center" sx={{ transform: 'rotate(180deg)' }}>
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
  background-color: ${({ theme }) => theme.palette.background.default};

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 48px 16px;
    gap: 32px;
  }
`;

const ServiceList = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
  }
`;

const SaleChip = styled(StyledChip)<{ visible: string }>`
  visibility: ${(props) => (props.visible === 'true' ? 'visible' : 'hidden')};
  position: absolute;
  left: 50%;
  transform: translate(-50%, -120%);
`;

const SectoinHeaderBlock = styled(Stack)`
  text-align: center;
  gap: 48px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    gap: 24px;
  }
`;

export default PriceList;
