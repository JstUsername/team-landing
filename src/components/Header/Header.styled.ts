import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonLink from '../../commons/button/ButtonLink.tsx';
import { LiButtonProps } from './Header.types.ts';
import Logo from '../../assets/header/logo.svg?react';
import SearchIcon from '../../assets/header/icons/search.svg?react';
import ChevronDownIcon from '../../assets/header/icons/chevron-down.svg?react';

export const HeaderWrapper = styled('header')`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.palette.background.default};
  z-index: 9;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: static;
  }
`;

export const HeaderTop = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  padding: 8px 80px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const HeaderMiddle = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  padding: 24px 80px;
`;

export const HeaderBottom = styled('div')`
  padding: 8px 80px;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const HeaderTopBlock = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 12px 8px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const DesktopLogo = styled(Logo)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const Search = styled('div')`
  display: flex;
  position: relative;
  flex: 1;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 16px;
  top: 12px;
`;

export const StyledInput = styled('input')`
  height: 48px;
  margin: 0;
  padding: 0 0 0 48px;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  background-color: ${({ theme }) => theme.palette.secondary.light};
  flex: 1;
  ${({ theme }) => theme.typography.subtitle2};
  color: ${({ theme }) => theme.palette.text.secondary};
  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    ${({ theme }) => theme.typography.subtitle2};
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const CategoriesButton = styled('button')`
  position: relative;
  padding: 0 48px 0 16px;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  background-color: ${({ theme }) => theme.palette.secondary.light};
  border-left: none;
  ${({ theme }) => theme.typography.subtitle2};
  color: ${({ theme }) => theme.palette.text.secondary};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.divider};
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.secondary.light};
    transition: none;
  }
`;

export const CategoriesButtonIcon = styled(ChevronDownIcon)`
  position: absolute;
  top: 12px;
  right: 16px;
  path {
    fill: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const ButtonText = styled('span')`
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
`;

export const StyledButton = styled(ButtonLink)`
  display: block;
  padding: 16px 28px;
  border: none;
  :hover {
    border: none;
  }
`;

export const HeaderUl = styled('ul')`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const LiButton = styled('button')<LiButtonProps>`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
  text-wrap: nowrap;
  color: ${({ theme }) => theme.palette.text.primary};
  border: none;
  padding: ${(props) => (props.icon && props.active ? '8px 16px 8px 48px' : '8px 16px')};
  background: ${(props) => (props.active ? `${props.theme.palette.background.default}` : 'none')};
  box-shadow: ${(props) => (props.active ? `0 0 0 1px ${props.theme.palette.secondary.dark}` : 'none')};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.default};
  }
  svg {
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`;

export const LiButtonIcon = styled('div')`
  position: absolute;
  top: 4px;
  left: 16px;
`;
