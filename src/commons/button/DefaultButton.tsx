import { FC } from 'react';
import { ButtonProps, styled } from '@mui/material';
import MuiButton from '@mui/material/Button';
import { IDefaultButton } from './types';
import { theme } from '../../theme';

const DefaultButton: FC<IDefaultButton> = ({ type, text, fontsizesx }) => {
  return (
    <Button variant={type} color={'info'} fontsizesx={fontsizesx}>
      {text}
    </Button>
  );
};

const Button = styled(MuiButton)((props: { fontsizesx: number } & ButtonProps) => ({
  'paddingInline': 32,
  'paddingBlock': 16,
  'border': ['2', 'solid'],
  'borderRadius': 0,
  'borderColor': theme.palette.info.main,
  'boxShadow': 'none',
  'textTransform': 'none',
  ':hover': {
    border: ['2', 'solid'],
    borderColor: '#3064ac',
  },
  '@media (max-width: 768px)': {
    paddingInline: 28,
    paddingBlock: 14,
    fontSize: props.fontsizesx,
  },
}));

export default DefaultButton;
