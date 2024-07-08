import { Box, styled, Typography } from '@mui/material';
import { IKnowledgeInfo } from './Knowledge.types';

const KnowledgeInfo = ({ image, description, statistics }: Omit<IKnowledgeInfo, 'id'>) => {
  return (
    <Box border={1} borderColor="divider" borderRadius={2} p={{ xs: 1, md: 2 }} minHeight={{ xs: 168, sm: 0 }}>
      <GridContainer>
        <Box alignItems="center" maxHeight={48}>
          {image}
        </Box>
        <Box>
          <Typography variant="h4" textAlign={{ xs: 'center', lg: 'left' }}>
            {statistics}
          </Typography>
          <Typography
            variant="subtitle2"
            fontSize={{ xs: 14, lg: 16 }}
            color="secondary.dark"
            textAlign={{ xs: 'center', lg: 'left' }}
          >
            {description}
          </Typography>
        </Box>
      </GridContainer>
    </Box>
  );
};

const GridContainer = styled('div')`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  height: 100%;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export default KnowledgeInfo;
