import { styled } from '@mui/material/styles';
import { useMediaQuery, useTheme, Theme, Box, List } from '@mui/material';
import ButtonLink from '../../commons/button/ButtonLink.tsx';
import Logo from '../../assets/header/logo.svg?react';
import MailIcon from '../../assets/footer/icons/envelope.svg?react';
import AppStore from '../../assets/footer/app-store.svg?react';
import GooglePlay from '../../assets/footer/google-play.svg?react';
import FooterMiddleUl from './FooterMiddleUl/FooterMiddleUl.tsx';
import {
  footerSocialMediaItems,
  newsFooterListItems,
  childFooterListItems,
  adultFooterListItems,
} from './Footer.constants.ts';

export default function Footer() {
  const theme = useTheme<Theme>();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <FooterWrapper>
      <FooterTop>
        <Logo title="Logo" width="168" height="40" />
        <Search>
          <StyledMailIcon title="Mail" />
          <StyledInput id="input-mail" placeholder={isSmallScreen ? 'Подписаться...' : 'Подписаться на рассылку'} />
          <StyledButton component="button" variant="contained">
            <ButtonText>Подписаться</ButtonText>
          </StyledButton>
        </Search>
      </FooterTop>
      <Divider />
      <nav>
        <FooterMiddle>
          <FooterMiddleUl footerListTitle="Для взрослых" footerListItems={adultFooterListItems} />
          <FooterMiddleUl footerListTitle="Для детей" footerListItems={childFooterListItems} />
          <FooterMiddleUl footerListTitle="Новости" footerListItems={newsFooterListItems} />
          <div>
            <Box sx={{ marginBottom: '24px' }}>
              <ListTitle>Контакты</ListTitle>
              <FooterUl sx={{ flexDirection: 'row', gap: '8px' }}>
                <li>
                  <StoreButton sx={{ width: '120px' }}>
                    <AppStore />
                  </StoreButton>
                </li>
                <li>
                  <StoreButton sx={{ width: '135px' }}>
                    <GooglePlay />
                  </StoreButton>
                </li>
              </FooterUl>
            </Box>
            <div>
              <ListTitle>Присоединиться к нам</ListTitle>
              <FooterUl sx={{ flexDirection: 'row', marginTop: '8px' }}>
                {footerSocialMediaItems.map((iconItem, iconIndex) => (
                  <li key={iconIndex}>
                    <iconItem.icon>
                      <title>{iconItem.label}</title>
                    </iconItem.icon>
                  </li>
                ))}
              </FooterUl>
            </div>
          </div>
        </FooterMiddle>
      </nav>
      <Divider />
      <FooterBottom>
        <Copyright>Тестовая компания @ 2023. Все права защищены.</Copyright>
        <nav>
          <FooterUl sx={{ flexDirection: 'row', marginTop: '0px' }}>
            <li>
              <FooterListLink href="">Медицина</FooterListLink>
            </li>
            <li>
              <FooterListLink href="">Наука</FooterListLink>
            </li>
            <li>
              <FooterListLink href="">Инновации</FooterListLink>
            </li>
          </FooterUl>
        </nav>
      </FooterBottom>
    </FooterWrapper>
  );
}

const FooterWrapper = styled('footer')`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 48px 80px;
  background: ${({ theme }) => theme.palette.gradients.blueGradient};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 48px 16px;
    gap: 32px;
  }
`;
const FooterTop = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    gap: 48px;
  }
`;

const FooterMiddle = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 48px;
  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;

const FooterBottom = styled('div')`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

const Search = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    gap: 8px;
  }
`;

const StyledMailIcon = styled(MailIcon)`
  position: absolute;
  left: 16px;
  top: 12px;
`;

const StyledInput = styled('input')`
  flex-shrink: 0;
  height: 48px;
  width: 260px;
  margin: 0;
  padding: 0 0 0 48px;
  border-radius: 0;
  border: 0 ${({ theme }) => theme.palette.secondary.dark};
  border-bottom: 1px solid;
  background-color: ${({ theme }) => theme.palette.secondary.light};
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
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 192px;
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
  :hover {
    border: none;
  }
`;

const Divider = styled('hr')`
  margin: 0;
  flex-shrink: 0;
  border-width: 0;
  border-bottom-width: thin;
  border-style: solid;
  color: ${({ theme }) => theme.palette.divider2};
`;

export const ListTitle = styled('h6')`
  ${({ theme }) => theme.typography.h6};
  margin: 0;
  padding: 12px 0;
  color: ${({ theme }) => theme.palette.background.default};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    text-align: center;
  }
`;

export const FooterUl = styled(List)`
  margin: 16px 0 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 16px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    align-items: center;
    justify-content: center;
  }
  li {
    cursor: pointer;
  }
`;

export const FooterListLink = styled('a')`
  ${({ theme }) => theme.typography.body2};
  line-height: 1;
  color: ${({ theme }) => theme.palette.background.default};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StoreButton = styled(Box)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.text.primary};
  border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
  border-radius: 6px;
  cursor: pointer;
`;

const Copyright = styled('span')`
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.background.default};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 12px;
  }
`;
