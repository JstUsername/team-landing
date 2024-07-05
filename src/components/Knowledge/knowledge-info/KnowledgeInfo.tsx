import { FC } from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import { IKnowledgeInfo } from '../types';

const KnowledgeInfo: FC<Omit<IKnowledgeInfo, 'id'>> = ({ image, description, statistics }) => {
  return (
    <Grid item xs={6}>
      <Box border={1} borderColor={'divider'} borderRadius={2} p={2} minHeight={{ xs: 168, sm: 0 }}>
        <GridContainer>
          <Box alignItems={'center'} maxHeight={48}>
            <img src={image} alt="иконка" width={48} height={48} />
          </Box>
          <Box>
            <Typography variant={'h4'} textAlign={{ xs: 'center', lg: 'left' }}>
              {statistics}
            </Typography>
            <Typography variant={'subtitle2'} color={'secondary.dark'} textAlign={{ xs: 'center', lg: 'left' }}>
              {description}
            </Typography>
          </Box>
        </GridContainer>
      </Box>
    </Grid>
  );
};

const GridContainer = styled('div')({
  'display': 'flex',
  'flexDirection': 'row',
  'alignItems': 'flex-start',
  'gap': 16,
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
export default KnowledgeInfo;
