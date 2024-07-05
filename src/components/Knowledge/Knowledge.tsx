import { FC } from 'react';
import { Box, Container, Grid, styled, Typography } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import KnowledgeInfo from './knowledge-info/KnowledgeInfo';
import { knowledgeInfo } from '../../constants/constants';
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
          <DefaultButton type={ButtonType.contained} text={'Для врачей'} fontsizesx={14} />
          <DefaultButton type={ButtonType.outlined} text={'Для пациентов'} fontsizesx={14} />
        </FlexButton>
        <Box sx={{ width: '100%' }}>
          <Grid container direction={{ xs: 'column', lg: 'row' }} columnSpacing={{ xs: 0, sm: 3, md: 3, lg: 10 }}>
            <Grid item xs={6}>
              <Box
                border={1}
                borderColor={'divider'}
                mb={{ xs: 3, lg: 0 }}
                minHeight={{ xs: 728, lg: 396 }}
                maxHeight={{ xs: 728, lg: 396 }}
                maxWidth={{ xs: 768, sm: 1024, md: 1440, lg: 535 }}
              >
                <Chart />
              </Box>
            </Grid>
            <Grid item container xs={6} spacing={3} alignSelf={'center'} justifyContent={'space-between'} flex={1}>
              {knowledgeInfo.map(({ statistics, image, description, id }) => (
                <KnowledgeInfo
                  key={`knowledgeInfo${id}`}
                  image={image}
                  statistics={statistics}
                  description={description}
                />
              ))}
            </Grid>
          </Grid>
        </Box>
      </GridContainer>
    </Container>
  );
};

const GridContainer = styled('div')({
  'display': 'flex',
  'flexDirection': 'column',
  'gap': 48,
  'marginInline': 80,
  '@media (max-width: 768px)': {
    marginInline: 16,
  },
});

const FlexButton = styled('div')({
  display: 'flex',
  gap: 16,
});

const KnowledgeText = styled(MuiTypography)({
  'fontSize': 42,
  'fontWeight': 700,
  'lineHeight': 1.1,
  'letterSpacing': '0em',
  '@media (max-width: 768px)': {
    fontSize: 24,
  },
});

export default Knowledge;
