import { Button, styled } from '@mui/material';
import formBg from '../assets/form-bg.jpg';
import chevronDown from '../assets/chevron-down.svg';

export const Section = styled('section')`
  background-image: url(${formBg});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 244px;
  padding-bottom: 80px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 150px 16px 48px;
  }
`;

export const FormBlock = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: 48px;
  max-width: 712px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 8px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 24px 16px;
  }
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

export const FormInput = styled('input')`
  width: 100%;
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.underline};
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

export const FormSelect = styled('select')`
  width: 100%;
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.underline};
  appearance: none;
  background-image: url(${chevronDown});
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: auto;
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

export const StyledFormButton = styled(Button)`
  display: flex;
  align-self: flex-end;
  padding: 16px 28px;
  border: none;
  border-radius: 0px;
  background-color: ${({ theme }) => theme.palette.info.main};
  color: ${({ theme }) => theme.palette.background.default};
  ${({ theme }) => theme.typography.buttonM};
  text-transform: capitalize;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
