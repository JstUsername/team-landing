import { FormInput } from './PartnerFormInput.styled';
import { PartnerFormInputProps } from './PartnerFormInput.types';

const PartnerFormInput = ({ ...props }: PartnerFormInputProps) => {
  return <FormInput {...props} />;
};

export default PartnerFormInput;
