import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

interface CommonProps {
  label: string;
  isCheckbox?: boolean;
  isTextarea?: boolean;
  isSelect?: boolean;
}

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export type PartnerFormFieldProps = CommonProps & (InputProps | SelectProps | TextareaProps);
