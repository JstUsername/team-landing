import { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { IKnowledgeInfo } from '../types';

const KnowledgeInfo: FC<Omit<IKnowledgeInfo, 'id'>> = ({ image, description, statistics }) => {
  return (
    <Grid item xs={6}>
      <Box border={1} borderColor={'divider'} borderRadius={2} p={2} minHeight={{ xs: 168, sm: 0 }}>
        <Grid
          container
          direction={{ xs: 'column', lg: 'row' }}
          columnSpacing={2}
          alignItems={{ xs: 'center', lg: 'flex-start' }}
        >
          <Grid item alignItems={'center'}>
            <img src={image} alt="" />
          </Grid>
          <Grid item>
            <Typography variant={'h4'} textAlign={{ xs: 'center', lg: 'left' }}>
              {statistics}
            </Typography>
            <Typography variant={'subtitle2'} color={'secondary.dark'} textAlign={{ xs: 'center', lg: 'left' }}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
export default KnowledgeInfo;
