import { Stack, Typography, Button, styled } from '@mui/material';
import Chip from '../commons/StyledChip/Chip';
import { Service } from './PriceList.types';

const PricingElem = ({ service }: { service: Service }) => {
  const { name, desc, price, sale, features, isPopular } = service;
  return (
    <PriceElemContainer>
      {isPopular && (
        <PriceElemChip>
          <Typography fontSize="14px">Популярное</Typography>
        </PriceElemChip>
      )}
      <Stack gap="8px">
        <Typography variant="h3">{name}</Typography>
        <Typography variant="sectionDescription">{desc}</Typography>
      </Stack>
      <Stack gap="8px">
        <Typography variant="h1" color="text.secondary">
          {price}
        </Typography>
        {sale && <Typography variant="h1">{sale}</Typography>}
        <Typography fontSize="14px">{!sale ? price : sale} USD каждый месяц</Typography>
      </Stack>
      <Button
        variant="contained"
        sx={{
          padding: '16px',
          border: '2px',
          borderRadius: 0,
          textTransform: 'none',
        }}
      >
        <Typography variant="button" paddingX="16px" textTransform="capitalize">
          Начать
        </Typography>
      </Button>
      <FeatureList sx={{ textAlign: 'start' }}>
        {features.map((feature, ind) => (
          <FeatureElement key={ind}>
            <Typography component="span" marginLeft="8px">
              {feature}
            </Typography>
          </FeatureElement>
        ))}
      </FeatureList>
    </PriceElemContainer>
  );
};

const PriceElemContainer = styled(Stack)`
  position: relative;
  border: 1px solid ${(props) => props.theme.palette.divider};
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
  margin-inline-start: 0px;
  margin-inline-end: 0px;
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
  &::marker {
    content: url('../../src/assets/PriceList/Check.svg');
  }
`;

export default PricingElem;
