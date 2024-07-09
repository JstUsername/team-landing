import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import theme from '../../theme.tsx';
import Logo from '../../assets/header/logo.svg?react';
import MailIcon from '../../assets/footer/icons/envelope.svg?react';
import AppStore from '../../assets/footer/app-store.svg?react';
import GooglePlay from '../../assets/footer/google-play.svg?react';
import YoutubeIcon from '../../assets/footer/icons/youtube.svg?react';
import FacebookIcon from '../../assets/footer/icons/facebook.svg?react';
import TwitterIcon from '../../assets/footer/icons/twitter.svg?react';
import InstagramIcon from '../../assets/footer/icons/instagram.svg?react';
import LinkedinIcon from '../../assets/footer/icons/linkedin.svg?react';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterTop>
        <Logo title="Logo" width="168" height="40" />
        <Search>
          <StyledMailIcon title="Mail" />
          <StyledInput
            id="input-mail"
            placeholder={useMediaQuery(theme.breakpoints.down('sm')) ? 'Подписаться...' : 'Подписаться на рассылку'}
          />
          <StyledButton>Подписаться</StyledButton>
        </Search>
      </FooterTop>
      <Divider />
      <nav>
        <FooterMiddle>
          <div>
            <ListTitle>Для взрослых</ListTitle>
            <FooterUl>
              <FooterLi>
                <FooterListLink href="">Кардиология</FooterListLink>
              </FooterLi>
              <FooterLi>
                <FooterListLink href="">Терапия</FooterListLink>
              </FooterLi>
              <FooterLi>
                <FooterListLink href="">Флебология</FooterListLink>
              </FooterLi>
              <FooterLi>
                <FooterListLink href="">Травмы</FooterListLink>
              </FooterLi>
            </FooterUl>
          </div>
          <div>
            <ListTitle>Для детей</ListTitle>
            <FooterUl>
              <FooterLi>
                <FooterListLink href="">Педиатрия</FooterListLink>
              </FooterLi>
              <FooterLi>
                <FooterListLink href="">Инфекции</FooterListLink>
              </FooterLi>
              <FooterLi>
                <FooterListLink href="">Неврология</FooterListLink>
              </FooterLi>
              <FooterLi>
                <FooterListLink href="">Фтизиатрия</FooterListLink>
              </FooterLi>
            </FooterUl>
          </div>
          <div>
            <ListTitle>Новости</ListTitle>
            <FooterUl>
              <FooterLi>
                <FooterListLink href="">Новости здравоохранения</FooterListLink>
              </FooterLi>
              <FooterLi>
                <FooterListLink href="">Открытия </FooterListLink>
              </FooterLi>
              <FooterLi>
                <FooterListLink href="">Документы</FooterListLink>
              </FooterLi>
              <FooterLi>
                <FooterListLink href="">Справочники</FooterListLink>
              </FooterLi>
            </FooterUl>
          </div>
          <div>
            <div style={{ marginBottom: '24px' }}>
              <ListTitle>Контакты</ListTitle>
              <FooterUl style={{ flexDirection: 'row', gap: '8px' }}>
                <FooterLi>
                  <StoreButton style={{ width: '120px' }}>
                    <AppStore />
                  </StoreButton>
                </FooterLi>
                <FooterLi>
                  <StoreButton style={{ width: '135px' }}>
                    <GooglePlay />
                  </StoreButton>
                </FooterLi>
              </FooterUl>
            </div>
            <div>
              <ListTitle>Присоединиться к нам</ListTitle>
              <FooterUl style={{ flexDirection: 'row', marginTop: '8px' }}>
                <FooterLi>
                  <YoutubeIcon />
                </FooterLi>
                <FooterLi>
                  <FacebookIcon />
                </FooterLi>
                <FooterLi>
                  <TwitterIcon />
                </FooterLi>
                <FooterLi>
                  <InstagramIcon />
                </FooterLi>
                <FooterLi>
                  <LinkedinIcon />
                </FooterLi>
              </FooterUl>
            </div>
          </div>
        </FooterMiddle>
      </nav>
      <Divider />
      <FooterBottom>
        <Copyright>Тестовая компания @ 2023. Все права защищены.</Copyright>
        <nav>
          <FooterUl style={{ flexDirection: 'row', marginTop: '0px' }}>
            <FooterLi>
              <FooterListLink href="">Медицина</FooterListLink>
            </FooterLi>
            <FooterLi>
              <FooterListLink href="">Наука</FooterListLink>
            </FooterLi>
            <FooterLi>
              <FooterListLink href="">Инновации</FooterListLink>
            </FooterLi>
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
  background: ${({ theme }) => theme.palette.gradients.mainGradient};
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

const StyledButton = styled('button')`
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.palette.background.default};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  padding: 16px 28px;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.primary.main};
    transition: none;
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

const ListTitle = styled('h6')`
  ${({ theme }) => theme.typography.h6};
  margin: 0;
  padding: 12px 0;
  color: ${({ theme }) => theme.palette.background.default};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    text-align: center;
  }
`;

const FooterUl = styled('ul')`
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

const FooterLi = styled('li')``;

const FooterListLink = styled('a')`
  ${({ theme }) => theme.typography.body2};
  line-height: 1;
  color: ${({ theme }) => theme.palette.background.default};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StoreButton = styled('button')`
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
