import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useMediaQuery, useTheme, Theme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonLink from '../../commons/button/ButtonLink.tsx';
import { LiButtonProps } from './Header.types.ts';
import { HeaderListItems } from './Header.constants.ts';
import HeaderMobile from './HeaderMobile/HeaderMobile.tsx';
import Logo from '../../assets/header/logo.svg?react';
import MapMarkerIcon from '../../assets/header/icons/map-marker.svg?react';
import UserIcon from '../../assets/header/icons/user.svg?react';
import ShoppingCartIcon from '../../assets/header/icons/shopping-cart.svg?react';
import ChevronDownIcon from '../../assets/header/icons/chevron-down.svg?react';
import SearchIcon from '../../assets/header/icons/search.svg?react';

export default function Header() {
  const [isActive, setIsActive] = useState(HeaderListItems);

  const handlePageSection = (itemIndex: number) => {
    setIsActive((prev) =>
      prev.map((prevListItem, prevItemIndex) =>
        prevItemIndex === itemIndex
          ? {
              label: prevListItem.label,
              active: true,
              icon: HeaderListItems[itemIndex].icon,
            }
          : { label: prevListItem.label, active: false, icon: undefined },
      ),
    );
  };

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };

  const theme = useTheme<Theme>();

  return (
    <header>
      {useMediaQuery(theme.breakpoints.up('sm')) ? (
        <>
          <HeaderTop>
            <HeaderTopBlock>
              <MapMarkerIcon title="Map marker" />
              <Typography variant="body2">Москва</Typography>
            </HeaderTopBlock>
            <HeaderTopBlock sx={{ marginLeft: 'auto' }} onClick={goToLogin}>
              <UserIcon title="User" />
              <Typography variant="body2">Вход</Typography>
            </HeaderTopBlock>
            <HeaderTopBlock>
              <ShoppingCartIcon title="Shopping cart" />
              <Typography variant="body2">Корзина</Typography>
              <ChevronDownIcon title="Chevron down" />
            </HeaderTopBlock>
          </HeaderTop>
          <HeaderMiddle>
            <DesktopLogo title="Logo" />
            <Search>
              <StyledSearchIcon title="Search" />
              <StyledInput id="input-search" placeholder="Поиск по ..." />
              <CategoriesButton>
                Все категории
                <CategoriesButtonIcon title="Chevron down" />
              </CategoriesButton>
            </Search>
            <StyledButton component="button" variant="contained">
              <ButtonText>Поиск</ButtonText>
            </StyledButton>
          </HeaderMiddle>
          <HeaderBottom>
            <nav>
              <HeaderUl>
                {HeaderListItems.map((listItem, itemIndex) => (
                  <li key={itemIndex}>
                    <LiButton
                      active={isActive[itemIndex].active}
                      icon={isActive[itemIndex].icon}
                      onClick={() => handlePageSection(itemIndex)}
                    >
                      {listItem.label}
                      {listItem.icon && (
                        <LiButtonIcon>
                          <listItem.icon width="24px" height="24px" />
                          <title>{listItem.label}</title>
                        </LiButtonIcon>
                      )}
                    </LiButton>
                  </li>
                ))}
              </HeaderUl>
            </nav>
          </HeaderBottom>
        </>
      ) : (
        <HeaderMobile goToLogin={goToLogin} isActive={isActive} setIsActive={setIsActive} />
      )}
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

const HeaderTopBlock = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 12px 8px;
  background: none;
  border: none;
  cursor: pointer;
`;

const DesktopLogo = styled(Logo)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
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

const CategoriesButton = styled('button')`
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

const CategoriesButtonIcon = styled(ChevronDownIcon)`
  position: absolute;
  top: 12px;
  right: 16px;
  path {
    fill: ${({ theme }) => theme.palette.text.secondary};
  }
`;

const ButtonText = styled('span')`
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
`;

const StyledButton = styled(ButtonLink)`
  display: block;
  padding: 16px 28px;
  border: none;
  margin: 0;
  :hover {
    border: none;
  }
`;

const HeaderUl = styled('ul')`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const LiButton = styled('button')<LiButtonProps>`
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
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
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
