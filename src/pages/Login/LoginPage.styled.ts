import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

export const StyledGrid = styled(Grid)`
  height: 100vh;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 100%;
    overflow: auto;
  }
`;

export const LeftColumnWrapper = styled(Box)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 100%;
    gap: 32px;
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 32px 16px;
  }
  ${({ theme }) => theme.breakpoints.up('md')} {
    padding: 80px;
  }
`;

export const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AdditionalFields = styled(FormControl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  padding: 14px 12px;
  border-radius: 0;
  text-transform: none;
  font-size: 16px;
  line-height: 1;
`;

export const StyledOutlinedButton = styled(Button)`
  padding: 10px;
  border-radius: 0;
  text-transform: none;
  line-height: 1;
  border-width: 2px;
  border-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.main};
  flex: 1;
  & .MuiButton-startIcon {
    width: 24px;
    height: 24px;
  }
  &:hover {
    border-width: 2px;
  }
`;

export const SplitImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
