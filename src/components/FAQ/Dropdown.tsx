import { Stack, StackProps, Typography, styled, useTheme } from '@mui/material';
import { KeyboardEvent, useState } from 'react';
import { DropdownProps } from '../../interfaces/FAQ/DropdownProps';
import MinusIcon from '../../assets/FAQ/MinusIcon.svg';
import PlusIcon from '../../assets/FAQ/PlusIcon.svg';

export const Dropdown = ({ qa, active = false }: DropdownProps) => {
  const [isActive, setIsActive] = useState<boolean>(active);
  const theme = useTheme();

  const { question, answer } = qa;

  const handleEnterPress = (e: KeyboardEvent<HTMLDivElement>) => {
    e.key === 'Enter' ? setIsActive((state) => !state) : null;
  };

  return (
    <StyledDropdown
      onClick={() => setIsActive((state) => !state)}
      onKeyDown={handleEnterPress}
      theme={theme}
      aria-expanded={isActive}
      tabIndex={0}
    >
      <StyledDropdownHead>
        <StyledDropdownHeader>{question}</StyledDropdownHeader>
        <StyledDropdownIcon src={isActive ? MinusIcon : PlusIcon} />
      </StyledDropdownHead>
      {isActive && <Typography variant="body2">{answer}</Typography>}
    </StyledDropdown>
  );
};

const StyledDropdown = styled(Stack)<StackProps>`
  gap: 24px;
  width: 100%;

  background-color: #fff;
  border: 1px solid ${(props) => props.theme.palette.divider};
  border-radius: 8px;
  padding: 16px;

  box-sizing: border-box;
`;

const StyledDropdownIcon = styled('img')`
  margin-left: auto;
`;

const StyledDropdownHead = styled('div')`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const StyledDropdownHeader = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h5.fontSize}px;
  line-height: ${(props) => props.theme.typography.h5.lineHeight}em;
  font-weight: ${(props) => props.theme.typography.h5.fontWeight};

  @media (width < ${(props) => props.theme.breakpoints.values.md}px) {
    font-size: 18px;
    line-height: 1.1;
  }
`;
