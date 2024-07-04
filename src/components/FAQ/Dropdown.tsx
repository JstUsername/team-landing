import { Stack, StackProps, Typography, styled, useTheme } from '@mui/material';
import { KeyboardEvent, useState } from 'react';
import { DropdownProps } from '../../interfaces/FAQ/DropdownProps';

export const Dropdown = ({ qa, active = false }: DropdownProps) => {
  const [isActive, setIsActive] = useState<boolean>(active);
  const theme = useTheme();

  const { question, answer } = qa;

  const handleEnterPress = (e: KeyboardEvent<HTMLDivElement>) => {
    e.key === 'Enter' ? setIsActive((state) => !state) : null;
  };

  return (
    <StyledDropdown
      component={'section'}
      onClick={() => setIsActive((state) => !state)}
      onKeyDown={handleEnterPress}
      theme={theme}
      aria-expanded={isActive}
      tabIndex={0}
    >
      <StyledDropdownHead>
        <Typography variant="h5">{question}</Typography>
        <StyledDropdownIcon
          src={isActive ? '../../src/assets/FAQ/MinusIcon.svg' : '../../src/assets/FAQ/PlusIcon.svg'}
        />
      </StyledDropdownHead>
      {isActive && <Typography variant="body2">{answer}</Typography>}
    </StyledDropdown>
  );
};

const StyledDropdown = styled(Stack)<StackProps>(
  ({ theme }) => `
    gap: 24px;
    width: 100%;

    background-color: #fff;
    border: 1px solid ${theme.palette.divider};
    border-radius: 8px;
    padding: 16px;

    box-sizing: border-box;
  `,
);

const StyledDropdownIcon = styled('img')`
  margin-left: auto;
`;

const StyledDropdownHead = styled('div')`
  display: flex;
  width: 100%;
  gap: 8px;
`;
