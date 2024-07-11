import { Button, styled } from '@mui/material';
import formBg from '../assets/PartnerForm/form-bg.jpg';

export const Section = styled('section')`
  position: relative;
  height: 100vh;
  background-image: url(${formBg});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Container = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-inline: 16px;
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
