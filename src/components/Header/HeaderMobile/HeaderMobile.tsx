import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { HeaderMobileProps, DropdownMenuProps, ShoppingCartProps } from './HeaderMobile.types.ts';
import { LiButtonProps } from '../Header.types.ts';
import { HeaderListItems } from '../Header.constants.ts';
import Logo from '../../../assets/header/logo.svg?react';
import UserIcon from '../../../assets/header/icons/user.svg?react';
import ShoppingCartIcon from '../../../assets/header/icons/shopping-cart.svg?react';
import MenuIcon from '../../../assets/header/icons/menu.svg?react';
import SearchIcon from '../../../assets/header/icons/search.svg?react';
import ButtonLink from '../../../commons/button/ButtonLink.tsx';

export default function HeaderMobile({ goToLogin, isActive, setIsActive }: HeaderMobileProps) {
  const [openMenu, setOpenMenu] = useState(false);

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
    setOpenMenu(false);
  };

  useEffect(() => {
    openMenu ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
    return () => {
      document.body.style.overflow = '';
    };
  }, [openMenu]);

  return (
    <MobileHeaderWrapper>
      <MobileHeader>
        <Logo title="Logo" width="100px" height="24px" />
        <NavBarMobile>
          <UserIcon onClick={goToLogin} />
          <ShoppingCart count={9}>
            <ShoppingCartIcon />
          </ShoppingCart>
          <MenuIcon onClick={() => setOpenMenu(true)} />
        </NavBarMobile>
        <DropdownMenu visible={openMenu}>
          <DropdownMenuLogo title="Logo" width="224" height="40" />
          <Search>
            <StyledInput id="input-search-mobile" placeholder="Поиск по ..." />
            <StyledSearchIcon />
          </Search>
          <MobileHeaderUl>
            {HeaderListItems.map((listItem, itemIndex) => (
              <MobileHeaderLi key={itemIndex}>
                <MobileLiButton active={isActive[itemIndex].active} onClick={() => handlePageSection(itemIndex)}>
                  {listItem.label}
                </MobileLiButton>
              </MobileHeaderLi>
            ))}
          </MobileHeaderUl>
          <StyledButton component="button" variant="outlined" onClick={() => setOpenMenu(false)}>
            <ButtonText>Закрыть меню</ButtonText>
          </StyledButton>
        </DropdownMenu>
      </MobileHeader>
    </MobileHeaderWrapper>
  );
}

const MobileHeaderWrapper = styled('header')`
  display: none;
  padding: 28px 16px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: block;
  }
`;

const MobileHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBarMobile = styled('div')`
  display: flex;
  align-items: center;
  gap: 16px;
  svg {
    cursor: pointer;
  }
  path {
    fill: ${({ theme }) => theme.palette.primary.dark};
  }
`;

const DropdownMenu = styled('div')<DropdownMenuProps>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  padding: 24px 16px;
  gap: 16px;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow: auto;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const Search = styled('div')`
  display: flex;
  position: relative;
  align-self: stretch;
`;

const StyledInput = styled('input')`
  height: 48px;
  margin: 0;
  padding: 0 0 0 48px;
  border-radius: 0;
  border: 0 ${({ theme }) => theme.palette.secondary.dark};
  border-bottom: 1px solid;
  background-color: ${({ theme }) => theme.palette.secondary.light};
  flex: 1;
  ${({ theme }) => theme.typography.subtitle2};
  color: ${({ theme }) => theme.palette.text.secondary};
  &:hover {
    border-color: ${({ theme }) => theme.palette.secondary.main};
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

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 16px;
  top: 12px;
`;

const MobileHeaderUl = styled('ul')`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  gap: 0;
`;

const MobileLiButton = styled('button')<LiButtonProps>`
  ${({ theme }) => theme.typography.body2};
  width: 100%;
  position: relative;
  padding: 12px 8px;
  color: ${({ theme }) => theme.palette.text.primary};
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.background.paper};
  background: ${(props) =>
    props.active ? `${props.theme.palette.background.paper}` : `${props.theme.palette.background.default}`};
  cursor: pointer;
  align-self: stretch;
  text-align: left;
`;

const ButtonText = styled('span')`
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
`;

const StyledButton = styled(ButtonLink)`
  display: block;
  padding: 16px 28px;
  margin: 0;
  align-self: stretch;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-inline: 28px;
    padding-block: 16px;
  },
`;

const ShoppingCart = styled('div')<ShoppingCartProps>`
  position: relative;
  width: 24px;
  height: 24px;
  ::before {
    width: 18px;
    height: 18px;
    content: '';
    position: absolute;
    top: -4px;
    left: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.error.main};
  }
  ::after {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    content: '${(props) => props.count}';
    position: absolute;
    top: -4px;
    left: 16px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    color: ${({ theme }) => theme.palette.background.default};
  }
`;

const DropdownMenuLogo = styled(Logo)`
  flex-shrink: 0;
`;

const MobileHeaderLi = styled('li')`
  align-self: stretch;
`;
