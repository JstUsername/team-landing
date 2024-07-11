import { styled } from '@mui/material';
import chevronDown from '../../assets/PartnerForm/chevron-down.svg';

export const FormInput = styled('input')`
  width: 100%;
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.underline};
`;

export const LabelBlock = styled('label')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  ${({ theme }) => theme.typography.bodyS};

  input,
  textarea,
  select {
    :focus-visible {
      outline: none;
    }

    ::placeholder {
      color: ${({ theme }) => theme.palette.text.secondary};
      font-family: Roboto;
      ${({ theme }) => theme.typography.body2};
    }
  }
`;

export const LabelBlockCheckbox = styled(LabelBlock)`
  flex-direction: row-reverse;
  justify-content: start;
  align-items: center;

  & input[type='checkbox'] {
    width: 20px;
    height: 20px;
    border-radius: 0px;
    margin: 0;
  }
`;

export const FormSelect = styled('select')`
  width: 100%;
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.underline};
  appearance: none;
  background-image: url(${chevronDown});
  background-repeat: no-repeat;
  background-position: right 16px top 50%;
  background-size: auto;
`;

export const FormTextarea = styled('textarea')`
  width: 100%;
  min-height: 96px;
  max-height: 250px;
  resize: vertical;
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.underline};
`;
