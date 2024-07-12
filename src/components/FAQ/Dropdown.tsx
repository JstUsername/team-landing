import { Stack, StackProps, Typography, styled } from '@mui/material';
import { useState } from 'react';
import { DropdownProps } from './FAQ.types';
import MinusIcon from '../../assets/FAQ/MinusIcon.svg?react';
import PlusIcon from '../../assets/FAQ/PlusIcon.svg?react';

export const Dropdown = ({ qa, active = false }: DropdownProps) => {
  const [isActive, setIsActive] = useState<boolean>(active);

  const { question, answer } = qa;

  return (
    <StyledDropdown
      onClick={() => setIsActive((state) => !state)}
      onKeyDown={(e) => {
        e.key === 'Enter' && setIsActive((state) => !state);
      }}
      aria-expanded={isActive}
      tabIndex={0}
    >
      <StyledDropdownHead>
        <Typography variant={"dropdownHeader"}>{question}</Typography>
        {isActive ? <MinusIcon /> : <PlusIcon />}
      </StyledDropdownHead>
      {isActive && <Typography variant={"body2"}>{answer}</Typography>}
    </StyledDropdown>
  );
};

const StyledDropdown = styled(Stack)<StackProps>`
  gap: 24px;
  width: 100%;

  background-color: ${({ theme }) => theme.palette.background.default};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 8px;
  padding: 16px;

  box-sizing: border-box;
`;

const StyledDropdownHead = styled('div')`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
`;
