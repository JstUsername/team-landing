import { Typography, Button, styled } from '@mui/material';
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
    padding: 151px 16px 48px;
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

export const FormTitle = styled(Typography)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    ${({ theme }) => theme.typography.h3};
  }
`;

export const FormSubTitle = styled(Typography)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    ${({ theme }) => theme.typography.body2};
  }
`;

export const TypographyWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled('div')`
  display: flex;
  gap: 16px;
`;

export const LabelBlock = styled('label')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  ${({ theme }) => theme.typography.bodyS};

  & input,
  & textarea,
  & select {
    width: 100%;
    padding: 13px 16px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.background.underline};

    :focus-visible {
      outline: none;
    }

    ::placeholder {
      color: ${({ theme }) => theme.palette.text.secondary};
      font-family: Roboto;
      ${({ theme }) => theme.typography.body2};
    }
  }

  & textarea {
    width: 100%;
    min-height: 96px;
    max-height: 250px;
    resize: vertical;
  }

  & select {
    appearance: none;
    background-image: url(${chevronDown});
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: auto auto;
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

export const StyledFormButton = styled(Button)`
  display: flex;
  align-self: flex-end;
  padding: 16px 28px;
  border: none;
  border-radius: 0px;
  background-color: ${({ theme }) => theme.palette.info.main};
  cursor: pointer;
  color: ${({ theme }) => theme.palette.background.default};
  ${({ theme }) => theme.typography.buttonM};
  text-transform: capitalize;

  :hover {
    background-color: #2061bc;
  }
`;

export const Popup = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 736px;
  gap: 16px;
  padding: 212px 48px;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.palette.divider};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 24px 16px;
  }
`;

export const PopupTitle = styled(Typography)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    ${({ theme }) => theme.typography.h4}
  }
`;
