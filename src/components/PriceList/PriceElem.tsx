import { Stack, Typography, Button, styled, useTheme } from '@mui/material';
import Chip from '../commons/Chip/Chip';
import { Service } from './types';
import { SectionDescription } from '../commons/SectionHeaders/SectionHeaders';

const PricingElem = ({ service }: { service: Service }) => {
  const theme = useTheme();
  const { name, desc, price, sale, features, isPopular } = service;
  return (
    <PriceElemContainer>
      {isPopular && (
        <PriceElemChip>
          <Typography fontSize={'14px'}>Популярное</Typography>
        </PriceElemChip>
      )}
      <Stack gap={'8px'}>
        <Typography variant="h3">{name}</Typography>
        <SectionDescription variant="body1">{desc}</SectionDescription>
      </Stack>
      <Stack gap={'8px'}>
        <PriceText sx={{ color: theme.palette.secondary.main, textDecoration: 'line-through' }}>{price}</PriceText>
        <PriceText>{sale}</PriceText>
        <Typography fontSize={'14px'}>{!sale ? price : sale} за каждый месяц</Typography>
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
        <Typography variant={'button'} sx={{ padding: '0 16px', textTransform: 'capitalize' }}>
          Начать
        </Typography>
      </Button>
      <FeatureList sx={{ textAlign: 'start' }}>
        {features.map((feature, ind) => (
          <FeatureElement key={ind}>
            <Typography component="span" sx={{ marginLeft: '8px' }}>
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

const FeatureList = styled('menu')`
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

const PriceText = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h1.fontSize}px;
  line-height: ${(props) => props.theme.typography.h1.lineHeight}em;
  font-weight: ${(props) => props.theme.typography.h1.fontWeight};
`;

const FeatureElement = styled('li')`
  &::marker {
    content: url('../../src/assets/PriceList/Check.svg');
  }
`;

export default PricingElem;
