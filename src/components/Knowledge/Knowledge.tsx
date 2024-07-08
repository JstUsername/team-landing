import { FC } from 'react';
import { Box, Container, styled, Typography } from '@mui/material';
import KnowledgeInfo from './KnowledgeInfo';
import { knowledgeInfo } from './constants';
import Chart from './chart/Chart';
import ButtonLink from '../../commons/button/ButtonLink';

const Knowledge: FC = () => {
  return (
    <Container maxWidth="lg" sx={{ background: 'background.default', marginBlock: { xs: 5, sm: 10 } }}>
      <GridContainer>
        <Box>
          <Typography variant="h5" color="primary.dark" mb={1} textTransform="uppercase">
            знания
          </Typography>
          <Typography variant="h4" color="text.primary" align="left" fontSize={{ xs: 24, lg: 42 }}>
            Информацию по отдельным заболеваниям ориентированную на пациентов можно найти в соответствующем разделе
            сайта, статьи разделены на категории.
          </Typography>
        </Box>
        <FlexButton>
          <ButtonLink variant="contained">
            <Typography variant="button" fontSize={{ xs: 14, lg: 20 }} textAlign="center" textTransform="none">
              Для врачей
            </Typography>
          </ButtonLink>
          <ButtonLink variant="outlined">
            <Typography variant="button" fontSize={{ xs: 14, lg: 20 }} textAlign="center" textTransform="none">
              Для пациентов
            </Typography>
          </ButtonLink>
        </FlexButton>
        <Box sx={{ width: '100%' }}>
          <FlexKnowledgeItem>
            <KnowledgeItemBox>
              <Chart />
            </KnowledgeItemBox>
            <GridCard>
              {knowledgeInfo.map(({ statistics, image, description, id }) => (
                <KnowledgeInfo
                  key={`knowledgeInfo${id}`}
                  image={image}
                  statistics={statistics}
                  description={description}
                />
              ))}
            </GridCard>
          </FlexKnowledgeItem>
        </Box>
      </GridContainer>
    </Container>
  );
};

const GridContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-inline: 80px;

  ${({ theme }) => theme.breakpoints.down('sm')}  {  
    margin-inline: 0;  
  },`;

const FlexButton = styled('div')`
  display: flex;
  gap: 16px;
`;

const FlexKnowledgeItem = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;

  ${({ theme }) => theme.breakpoints.down('lg')}  {
    grid-template-columns: 100%;
    gap: 24px;
  },
`;

const KnowledgeItemBox = styled('div')`
  border: 1px solid ${({ theme }) => theme.palette.divider};
  height: 396px;
  max-width: 535px;

  ${({ theme }) => theme.breakpoints.down('lg')}  {
    max-width: 1440px;
  },
`;

const GridCard = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  align-self: center;
  justify-content: space-between;
  flex: 1;
`;

export default Knowledge;
