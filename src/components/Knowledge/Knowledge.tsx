import { FC } from 'react';
import { Box, Container, styled, Typography } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import KnowledgeInfo from './knowledge-info/KnowledgeInfo';
import { knowledgeInfo } from './constants';
import DefaultButton from '../../commons/button/DefaultButton';
import { ButtonType } from '../../commons/button/types';
import Chart from './chart/Chart';

const Knowledge: FC = () => {
  return (
    <Container maxWidth={'lg'} sx={{ background: '#FFF', marginBlock: { xs: 5, sm: 10 } }}>
      <GridContainer>
        <Box>
          <Typography variant={'h5'} color={'primary.dark'} mb={1} textTransform={'uppercase'}>
            знания
          </Typography>
          <KnowledgeText color={'text.primary'} align={'left'}>
            Информацию по отдельным заболеваниям ориентированную на пациентов можно найти в соответствующем разделе
            сайта, статьи разделены на категории.
          </KnowledgeText>
        </Box>
        <FlexButton>
          <DefaultButton type={ButtonType.contained}>
            <Typography variant={'button'} fontSize={{ xs: 14, lg: 20 }} textAlign={'center'} textTransform={'none'}>
              Для врачей
            </Typography>
          </DefaultButton>
          <DefaultButton type={ButtonType.outlined}>
            <Typography variant={'button'} fontSize={{ xs: 14, lg: 20 }} textAlign={'center'} textTransform={'none'}>
              Для пациентов
            </Typography>
          </DefaultButton>
        </FlexButton>
        <Box sx={{ width: '100%' }}>
          <FlexKnowledgeItem>
            <Box
              border={1}
              borderColor={'divider'}
              mb={{ xs: 3, lg: 0 }}
              minHeight={396}
              maxHeight={396}
              maxWidth={{ xs: 768, sm: 1024, md: 1440, lg: 535 }}
            >
              <Chart />
            </Box>
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
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {  
    margin-inline: 0;  
  },`;

const FlexButton = styled('div')`
  display: flex;
  gap: 16px;
`;

const KnowledgeText = styled(MuiTypography)`
  font-size: 42px;
  font-weight: 700;
  letter-spacing: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 24px;
  },
`;

const FlexKnowledgeItem = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    grid-template-columns: 100%;
    gap: 24px;
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
