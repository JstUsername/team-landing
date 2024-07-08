import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../../theme.tsx';
import { styled } from '@mui/material/styles';
import { LiButtonProps } from './Header.types.ts';
import { BottomHeaderItems } from './Header.constants.ts';
import Logo from '../../assets/header/logo.svg?react';
import MapMarkerIcon from '../../assets/header/icons/map-marker.svg?react';
import UserIcon from '../../assets/header/icons/user.svg?react';
import ShoppingCartIcon from '../../assets/header/icons/shopping-cart.svg?react';
import ChevronDownIcon from '../../assets/header/icons/chevron-down.svg?react';
import SearchIcon from '../../assets/header/icons/search.svg?react';

export default function Header() {
  const [isActive, setIsActive] = useState(BottomHeaderItems);

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <header>
      <HeaderTop>
        <HeaderTopBlock>
          <MapMarkerIcon title="Map marker" />
          <span style={theme.typography.body2}>Москва</span>
        </HeaderTopBlock>
        <HeaderTopBlock style={{ marginLeft: 'auto' }} onClick={goToLogin}>
          <UserIcon title="User" />
          <span style={theme.typography.body2}>Вход</span>
        </HeaderTopBlock>
        <HeaderTopBlock>
          <ShoppingCartIcon title="Shopping cart" />
          <span style={theme.typography.body2}>Корзина</span>
          <ChevronDownIcon title="Chevron down" />
        </HeaderTopBlock>
      </HeaderTop>
      <HeaderMiddle>
        <Logo title="Logo" />
        <Search>
          <StyledSearchIcon title="Search" />
          <StyledInput id="input-search" placeholder="Поиск по ..." />
          <CategoriesButton>
            Все категории
            <CategoriesButtonIcon title="Chevron down" />
          </CategoriesButton>
        </Search>
        <StyledButton>Поиск</StyledButton>
      </HeaderMiddle>
      <HeaderBottom>
        <nav>
          <StyledUl>
            {BottomHeaderItems.map((listItem, itemIndex) => (
              <li key={itemIndex}>
                <LiButton
                  active={isActive[itemIndex].active}
                  icon={isActive[itemIndex].icon}
                  onClick={() =>
                    setIsActive((prev) =>
                      prev.map((prevListItem, prevItemIndex) =>
                        prevItemIndex === itemIndex
                          ? {
                              label: prevListItem.label,
                              active: true,
                              icon: BottomHeaderItems[itemIndex].icon,
                            }
                          : { label: prevListItem.label, active: false, icon: undefined },
                      ),
                    )
                  }
                >
                  {listItem.label}
                  {listItem.icon && (
                    <LiButtonIcon>
                      <listItem.icon width="24px" height="24px" />
                    </LiButtonIcon>
                  )}
                </LiButton>
              </li>
            ))}
          </StyledUl>
        </nav>
      </HeaderBottom>
    </header>
  );
}

const HeaderTop = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  padding: 8px 80px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

const HeaderMiddle = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  padding: 24px 80px;
`;

const HeaderBottom = styled('div')`
  padding: 8px 80px;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

const HeaderTopBlock = styled('button')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 12px 8px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Search = styled('div')`
  display: flex;
  position: relative;
  flex: 1;
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 16px;
  top: 12px;
`;

const StyledInput = styled('input')`
  height: 48px;
  padding-left: 48px;
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

const CategoriesButton = styled('button')`
  position: relative;
  padding-left: 16px;
  padding-right: 48px;
  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  background-color: ${({ theme }) => theme.palette.secondary.light};
  border-left: none;
  ${({ theme }) => theme.typography.subtitle2};
  color: ${({ theme }) => theme.palette.text.secondary};
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.palette.divider};
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.secondary.light};
    transition: none;
  }
`;

const CategoriesButtonIcon = styled(ChevronDownIcon)`
  position: absolute;
  top: 12px;
  right: 16px;
  path {
    fill: ${({ theme }) => theme.palette.text.secondary};
  }
`;

const StyledButton = styled('button')`
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.palette.background.default};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  padding: 16px 28px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.primary.main};
    transition: none;
  }
`;

const StyledUl = styled('ul')`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 0;
`;

const LiButton = styled('button')<LiButtonProps>`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
  color: ${({ theme }) => theme.palette.text.primary};
  border: none;
  padding: ${(props) => (props.icon && props.active ? '8px 16px 8px 48px' : '8px 16px')};
  background: ${(props) => (props.active ? `${props.theme.palette.background.default}` : 'none')};
  box-shadow: ${(props) => (props.active ? `0 0 0 1px ${props.theme.palette.secondary.dark}` : 'none')};
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.default};
  }
  svg {
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`;

const LiButtonIcon = styled('div')`
  position: absolute;
  top: 4px;
  left: 16px;
`;
