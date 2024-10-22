import { FC, PropsWithChildren } from 'react';
import { ButtonProps, Link, styled } from '@mui/material';
import { Button as MUIButton } from '@mui/material';

const ButtonLink: FC<PropsWithChildren<ButtonProps>> = ({ children, ...rest }) => {
  return (
    <Button component={rest.component ?? Link} color={rest.color ?? 'info'} {...rest}>
      {children}
    </Button>
  );
};

const Button = styled(MUIButton)<ButtonProps>`
  padding-inline: 32px;
  padding-block: 16px;
  margin: 0;
  border: 2px solid ${({ theme }) => theme.palette.info.main};
  border-radius: 0;
  box-shadow: none;
  text-transform: none;
  align-self: stretch;
  :hover {
    border: 2px solid #3064ac;
  };
  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-inline: 28px;
    padding-block: 14px;
  },
`;

export default ButtonLink;
