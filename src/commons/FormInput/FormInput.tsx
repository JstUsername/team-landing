import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { InputProps as StandardInputProps } from '@mui/material/Input/Input';

interface FormInputProps {
  inputId: string;
  inputLabel: string;
  inputPlaceholder: string;
  type?: string;
  InputProps?: Partial<StandardInputProps>;
}

export default function FormInput({ inputId, inputLabel, inputPlaceholder, type, InputProps }: FormInputProps) {
  return (
    <>
      <StyledInputLabel shrink htmlFor={inputId}>
        {inputLabel}
      </StyledInputLabel>
      <StyledTextField id={inputId} placeholder={inputPlaceholder} type={type} InputProps={InputProps} />
    </>
  );
}

const StyledInputLabel = styled(InputLabel)`
  position: relative;
  margin-bottom: 8px;
  ${({ theme }) => theme.typography.body1};
  font-size: 14px;
  transform: none;
  color: ${({ theme }) => theme.palette.text.primary};
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 0;
    padding-right: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.palette.text.secondary};
    & .MuiInputBase-input {
      padding: 13px 16px;
      background-color: ${({ theme }) => theme.palette.secondary.light};
      &::placeholder {
        opacity: 1;
      }
    }
    & fieldset {
      border: none;
      border-bottom: 1px solid #c1c7cd;
    }
    &:hover fieldset {
      border-color: ${({ theme }) => theme.palette.secondary.dark};
    }
    & .Mui-focused fieldset {
      border-color: ${({ theme }) => theme.palette.primary.main};
      border-width: 1px;
    }
    & .MuiInputAdornment-root {
      position: absolute;
      right: 0;
      padding-right: 16px;
      margin: 0;
    }
  }
`;
