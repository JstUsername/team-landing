import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery, useTheme, Theme } from '@mui/material';
import Typography from '@mui/material/Typography';
import {
  HeaderWrapper,
  HeaderBottom,
  HeaderUl,
  HeaderMiddle,
  LiButtonIcon,
  CategoriesButton,
  ButtonText,
  CategoriesButtonIcon,
  StyledButton,
  LiButton,
  HeaderTop,
  HeaderTopBlock,
  Search,
  StyledInput,
  StyledSearchIcon,
  DesktopLogo,
} from './Header.styled.ts';
import { headerListItems } from './Header.constants.ts';
import HeaderMobile from './HeaderMobile/HeaderMobile.tsx';
import MapMarkerIcon from '../../assets/header/icons/map-marker.svg?react';
import UserIcon from '../../assets/header/icons/user.svg?react';
import ShoppingCartIcon from '../../assets/header/icons/shopping-cart.svg?react';
import ChevronDownIcon from '../../assets/header/icons/chevron-down.svg?react';

export default function Header() {
  const [isActive, setIsActive] = useState(headerListItems);
  const navigate = useNavigate();
  const theme = useTheme<Theme>();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const handlePageSection = (itemIndex: number) => {
    setIsActive((prev) =>
      prev.map((prevListItem, prevItemIndex) =>
        prevItemIndex === itemIndex
          ? {
              label: prevListItem.label,
              active: true,
              icon: headerListItems[itemIndex].icon,
            }
          : { label: prevListItem.label, active: false, icon: undefined },
      ),
    );
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <HeaderWrapper>
      {isBigScreen ? (
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
                {headerListItems.map((listItem, itemIndex) => (
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
    </HeaderWrapper>
  );
}
