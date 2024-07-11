import { LabelHTMLAttributes, ReactNode } from 'react';

export interface PartnerFormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  label: string;
  isCheckbox?: boolean;
}
