import { FormTextarea } from './PartnerFormTextarea.styled';
import { PartnerFormTextareaProps } from './PartnerFormTextarea.types';

const PartnerFormTextarea = ({ ...props }: PartnerFormTextareaProps) => {
  return <FormTextarea {...props} />;
};

export default PartnerFormTextarea;
