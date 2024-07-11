import { FormSelect } from './PartnerFormSelect.styled';
import { PartnerFormSelectProps } from './PartnerFormSelect.types';

const PartnerFormSelect = ({ ...props }: PartnerFormSelectProps) => {
  return (
    <FormSelect {...props}>
      <option>Группы</option>
      <option value="group-1">1 группа</option>
      <option value="group-2">2 группа</option>
    </FormSelect>
  );
};

export default PartnerFormSelect;
