import { FC, PropsWithChildren } from 'react';
import { ButtonProps, Link, styled } from '@mui/material';
import MuiButton from '@mui/material/Button';
import { IDefaultButton } from './types';
import { theme } from '../../../theme';

const DefaultButton: FC<PropsWithChildren<IDefaultButton>> = ({ type, children }) => {
  return (
    <Button component={Link} variant={type} color={'info'}>
      {children}
    </Button>
  );
};

const Button = styled(MuiButton)<ButtonProps>(`
  padding-inline: 32px;
  padding-block: 16px;
  border: 2px solid ${theme.palette.info.main};
  border-radius: 0;
  box-shadow: none;
  text-transform: none;
  :hover {
    border: 2px solid #3064ac;
  };
  @media (max-width: 768px) {
    padding-inline: 28px;
    padding-block: 14px;
  },
`);

export default DefaultButton;
