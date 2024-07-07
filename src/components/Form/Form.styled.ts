import styled from '@emotion/styled';
import { Typography, Button } from '@mui/material';
import formBg from '../Assets/form-bg.jpg';
import chevronDown from '../Assets/chevron-down.svg';
import theme from '../../theme';

export const Section = styled.section`
  background-image: url(${formBg});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 244px;
  padding-bottom: 80px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 151px 16px 48px;
  }
`;

export const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-color: #fff;
  padding: 48px;
  max-width: 712px;
  width: 100%;
  border: 1px solid #dde1e6;
  border-radius: 8px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 24px 16px;
  }
`;

export const FormTitle = styled(Typography)`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    font-size: 32px;
    line-height: 1.1;
    font-weight: 700;
  }
`;

export const FormSubTitle = styled(Typography)`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    font-size: 16px;
    line-height: 1.4;
    font-weight: 400;
  }
`;

export const TypographyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const LabelBlock = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  & input,
  & textarea,
  & select {
    width: 100%;
    padding: 13px 16px;
    background-color: #f2f4f8;
    border: none;
    border-bottom: 1px solid #c1c7cd;

    :focus-visible {
      outline: none;
    }

    ::placeholder {
      color: #697077;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.4;
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
  background-color: #458ff6;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: capitalize;

  :hover {
    background-color: #2061bc;
  }
`;

export const Popup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 736px;
  gap: 16px;
  padding: 212px 48px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #dde1e6;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 24px 16px;
  }
`;

export const PopupTitle = styled(Typography)`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    font-size: 24px;
    line-height: 1.1;
    font-weight: 700;
  }
`;
