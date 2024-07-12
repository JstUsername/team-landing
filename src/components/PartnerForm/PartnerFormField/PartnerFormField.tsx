import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { FormInput } from './PartnerFormField.styled';
import { LabelBlock, LabelBlockCheckbox } from './PartnerFormField.styled';
import { FormSelect } from './PartnerFormField.styled';
import { FormTextarea } from './PartnerFormField.styled';
import { PartnerFormFieldProps } from './PartnerFormField.types';

const PartnerFormField = ({
  label,
  isCheckbox = false,
  isTextarea = false,
  isSelect = false,
  ...props
}: PartnerFormFieldProps) => {
  const LabelComponent = isCheckbox ? LabelBlockCheckbox : LabelBlock;
  return (
    <LabelComponent>
      <span>{label}</span>
      {isTextarea ? (
        <FormTextarea {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : isSelect ? (
        <FormSelect {...(props as SelectHTMLAttributes<HTMLSelectElement>)}>
          <option>Группы</option>
          <option value={"group-1"}>1 группа</option>
          <option value={"group-2"}>2 группа</option>
        </FormSelect>
      ) : (
        <FormInput {...(props as InputHTMLAttributes<HTMLInputElement>)} />
      )}
    </LabelComponent>
  );
};
export default PartnerFormField;
