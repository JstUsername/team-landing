import { LabelBlock, LabelBlockCheckbox } from './PartnerFormLabel.styled';
import { PartnerFormLabelProps } from './PartnerFormLabel.types';

const PartnerFormLabel = ({ children, label, isCheckbox = false }: PartnerFormLabelProps) => {
  const LabelComponent = isCheckbox ? LabelBlockCheckbox : LabelBlock;
  return (
    <LabelComponent>
      <span>{label}</span>
      {children}
    </LabelComponent>
  );
};
export default PartnerFormLabel;
