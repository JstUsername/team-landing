import { styled } from '@mui/material';
import chevronDown from '../../assets/PartnerForm/chevron-down.svg';

export const FormSelect = styled('select')`
  width: 100%;
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.underline};
  appearance: none;
  background-image: url(${chevronDown});
  background-repeat: no-repeat;
  background-position: right 16px top 50%;
  background-size: auto;
`;
