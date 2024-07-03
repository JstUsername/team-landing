import { ButtonProps, Typography, styled } from '@mui/material';
import { useState } from 'react';

export const Dropdown = ({ header, body, active = false }: { header: string; body: string; active?: boolean }) => {
  const [isActive, setIsActive] = useState<boolean>(active);

  const changeIsAcvtive = () => setIsActive((state) => !state);

  return (
    <StyledDropdown onClick={changeIsAcvtive} aria-expanded={isActive}>
      <StyledDropdownHead>
        <Typography variant="h5">{header}</Typography>
        <DropdownIcon src={isActive ? '/images/MinusIcon.svg' : '/images/PlusIcon.svg'} />
      </StyledDropdownHead>
      {isActive && <Typography variant="body2">{body}</Typography>}
    </StyledDropdown>
  );
};

const StyledDropdown = styled('button')<ButtonProps>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  background-color: #ffffff;

  border: 1px solid #dde1e6;
  border-radius: 8px;
  padding: 16px;

  box-sizing: border-box;
  text-align: start;
`;

const DropdownIcon = styled('img')`
  margin-left: auto;
`;

const StyledDropdownHead = styled('div')`
  display: flex;
  width: 100%;
  gap: 8px;
`;
