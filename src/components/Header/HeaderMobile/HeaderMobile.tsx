import { useEffect, useState } from 'react';
import { HeaderMobileProps } from './HeaderMobile.types.ts';
import {
  MobileHeader,
  MobileHeaderLi,
  MobileLiButton,
  MobileHeaderUl,
  NavBarMobile,
  StyledButton,
  ButtonText,
  Search,
  StyledInput,
  StyledSearchIcon,
  ShoppingCart,
  DropdownMenu,
  DropdownMenuLogo,
} from './HeaderMobile.styled.ts';
import { headerListItems } from '../Header.constants.ts';
import Logo from '../../../assets/header/logo.svg?react';
import UserIcon from '../../../assets/header/icons/user.svg?react';
import ShoppingCartIcon from '../../../assets/header/icons/shopping-cart.svg?react';
import MenuIcon from '../../../assets/header/icons/menu.svg?react';

export default function HeaderMobile({ goToLogin, isActive, setIsActive }: HeaderMobileProps) {
  const [openMenu, setOpenMenu] = useState(false);

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
    setOpenMenu(false);
  };

  useEffect(() => {
    openMenu ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
    return () => {
      document.body.style.overflow = '';
    };
  }, [openMenu]);

  return (
    <MobileHeader>
      <Logo title={"Logo"} width={"100px"} height={"24px"} />
      <NavBarMobile>
        <UserIcon onClick={goToLogin} />
        <ShoppingCart count={9}>
          <ShoppingCartIcon />
        </ShoppingCart>
        <MenuIcon onClick={() => setOpenMenu(true)} />
      </NavBarMobile>
      <DropdownMenu visible={openMenu}>
        <DropdownMenuLogo title={"Logo"} width={"224"} height={"40"} />
        <Search>
          <StyledInput id={"input-search-mobile"} placeholder={"Поиск по ..."} />
          <StyledSearchIcon />
        </Search>
        <MobileHeaderUl>
          {headerListItems.map((listItem, itemIndex) => (
            <MobileHeaderLi key={itemIndex}>
              <MobileLiButton active={isActive[itemIndex].active} onClick={() => handlePageSection(itemIndex)}>
                {listItem.label}
              </MobileLiButton>
            </MobileHeaderLi>
          ))}
        </MobileHeaderUl>
        <StyledButton component={"button"} variant={"outlined"} onClick={() => setOpenMenu(false)}>
          <ButtonText>Закрыть меню</ButtonText>
        </StyledButton>
      </DropdownMenu>
    </MobileHeader>
  );
}
