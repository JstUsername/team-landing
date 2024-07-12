import { Stack, Typography, styled, Button, ButtonProps } from '@mui/material';
import Chip from '../../commons/StyledChip/Chip';
import { Service } from './PriceList.types';
import SvgCheck from '../../assets/PriceList/Check.svg?react';

type PriceElementProps = {
  service: Service;
};

const PriceElement = ({ service }: PriceElementProps) => {
  const { name, desc, price, sale, features, isPopular } = service;
  return (
    <PriceElemContainer>
      {isPopular && (
        <PriceElemChip>
          <Typography fontSize={"14px"}>Популярное</Typography>
        </PriceElemChip>
      )}
      <Stack gap={"8px"}>
        <Typography variant={"h3"}>{name}</Typography>
        <Typography variant={"sectionDescription"}>{desc}</Typography>
      </Stack>
      <Stack gap={"8px"}>
        <Typography variant={"h1"} color={"text.secondary"} sx={{ textDecoration: sale && 'line-through' }}>
          {price}
        </Typography>
        {sale && <Typography variant={"h1"}>{sale}</Typography>}
        <Typography fontSize={"14px"}>{!sale ? price : sale} USD каждый месяц</Typography>
      </Stack>
      <ButtonLink variant={"contained"} component={'a'}>
        <Typography paddingX={"16px"} variant={"button"} textTransform={"capitalize"}>
          Начать
        </Typography>
      </ButtonLink>
      <FeatureList sx={{ textAlign: 'start' }}>
        {features.map((feature, index) => (
          <FeatureElement key={index}>
            <SvgCheck />
            <Typography component={"span"}>{feature}</Typography>
          </FeatureElement>
        ))}
      </FeatureList>
    </PriceElemContainer>
  );
};

const PriceElemContainer = styled(Stack)`
  position: relative;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  gap: 32px;
  padding: 48px 24px;
  border-radius: 8px;
  text-align: center;
  align-items: center;
`;

const FeatureList = styled('ul')`
  display: flex;
  flex-direction: column;
  margin-block: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  gap: 8px;
`;

const PriceElemChip = styled(Chip)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 100;
`;

const FeatureElement = styled('li')`
  display: flex;
  align-content: center;
  list-style-type: none;
  gap: 8px;
`;

const ButtonLink = styled(Button)<ButtonProps>`
  padding: 16px;
  border: 2px;
  border-radius: 0;
  box-shadow: 0;
  background-color: ${({ theme }) => theme.palette.info.main};
`;

export default PriceElement;
