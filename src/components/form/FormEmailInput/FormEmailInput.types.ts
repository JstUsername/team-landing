import { ReactNode } from 'react';
import { Theme } from '@mui/material/styles';
import { InputProps } from '@mui/material/Input/Input';
import { SxProps } from '@mui/system';

export interface FormInputProps {
  inputId: string;
  inputLabel: string;
  inputPlaceholder: string;
  type?: string;
  inputProps?: Partial<InputProps>;
  inputError?: boolean;
  inputOnChange?: InputProps['onChange'];
  inputSx?: SxProps<Theme>;
  children?: ReactNode;
}
