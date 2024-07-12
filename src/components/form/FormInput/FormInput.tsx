import { FormInputProps } from '../FormEmailInput/FormEmailInput.types.ts';
import FormControl from '@mui/material/FormControl';
import { StyledInputLabel, StyledTextField } from './FormInput.styled.ts';

export default function FormInput({
  inputId,
  inputLabel,
  inputPlaceholder,
  type,
  inputProps,
  inputError,
  inputOnChange,
  inputSx,
  children,
}: FormInputProps) {
  return (
    <FormControl sx={inputSx}>
      <StyledInputLabel shrink htmlFor={inputId}>
        {inputLabel}
      </StyledInputLabel>
      <StyledTextField
        id={inputId}
        placeholder={inputPlaceholder}
        type={type}
        InputProps={inputProps}
        error={inputError}
        onChange={inputOnChange}
      />
      {children}
    </FormControl>
  );
}
