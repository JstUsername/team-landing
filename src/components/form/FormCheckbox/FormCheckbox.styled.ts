import { styled } from '@mui/material/styles';
import UnionIcon from '../../../assets/login/icons/union.svg?react';

export const StyledCheckbox = styled('div')`
  width: 16px;
  height: 16px;
  padding: 2px;
  border: 1px solid;
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.palette.secondary.light};
  }
`;

export const CheckboxIcon = styled(UnionIcon)`
  position: absolute;
  left: 3px;
  top: 5px;
`;
