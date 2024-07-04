import { FC } from 'react';
import { styled } from '@mui/material';
import MuiButton from '@mui/material/Button';
import { IDefaultButton } from './types';
import { theme } from '../../theme';

const DefaultButton: FC<IDefaultButton> = ({ type, text }) => {
  return (
    <Button variant={type} color={'info'}>
      {text}
    </Button>
  );
};

const Button = styled(MuiButton)({
  'paddingInline': 32,
  'paddingBlock': 16,
  'border': ['2', 'solid'],
  'borderRadius': 0,
  'borderColor': theme.palette.info.main,
  'boxShadow': 'none',
  'textTransform': 'none',
  ':hover': {
    paddingInline: 28,
    paddingBlock: 14,
    border: ['2', 'solid'],
    borderColor: '#3064ac',
  },
});

export default DefaultButton;
