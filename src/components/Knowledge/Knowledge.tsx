import { FC } from 'react';
import { Box, Container, Grid, styled, Typography } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import KnowledgeInfo from './knowledge-info/KnowledgeInfo';
import { knowledgeInfo } from '../../constants/constants';
import DefaultButton from '../button/DefaultButton';
import { ButtonType } from '../button/types';
import Chart from './chart/Chart';

const Knowledge: FC = () => {
  return (
    <Container maxWidth={'xl'} sx={{ background: '#FFF', marginBlock: 10 }}>
      <Box mb={6}>
        <Typography variant={'h5'} color={'primary.dark'} mb={1} textTransform={'uppercase'}>
          знания
        </Typography>
        <KnowledgeText color={'text.primary'} align={'left'}>
          Информацию по отдельным заболеваниям ориентированную на пациентов можно найти в соответствующем разделе сайта,
          статьи разделены на категории.
        </KnowledgeText>
      </Box>
      <Flex>
        <DefaultButton type={ButtonType.contained} text={'Для врачей'} />
        <DefaultButton type={ButtonType.outlined} text={'Для пациентов'} />
      </Flex>
      <Box sx={{ width: '100%' }} mb={6}>
        <Grid container direction={{ xs: 'column', lg: 'row' }} columnSpacing={{ xs: 0, md: 8, lg: 10 }}>
          <Grid item xs={6}>
            <Box
              border={1}
              borderColor={'divider'}
              mb={{ xs: 3, lg: 0 }}
              minHeight={{ xs: 550 }}
              maxWidth={{ sx: 630, mb: 900, lg: 630 }}
            >
              <Chart />
            </Box>
          </Grid>
          <Grid item container spacing={3} xs={6} alignSelf={'center'} flex={1}>
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
    </Container>
  );
};

const Flex = styled('div')({
  'display': 'flex',
  'gap': 16,
  'marginBottom': 48,
  '@media (max-width: 600px)': {},
});

const KnowledgeText = styled(MuiTypography)({
  'fontSize': 42,
  'fontWeight': 700,
  'lineHeight': 1.1,
  'letterSpacing': '0em',
  '@media (max-width: 600px)': {
    fontSize: 24,
  },
});

export default Knowledge;
