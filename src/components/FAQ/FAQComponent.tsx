import { Stack, styled } from '@mui/material';
import { Dropdown } from './Dropdown';
import { useTheme } from '@mui/material';
import { questions } from './constants';
import { StyledSectionHeader, StyledSectionSubHeader } from '../commons/SectionHeaders/SectionHeaders';
import FaqDotsGroup from '../../assets/FAQ/FaqDotsGroup.svg';

const FAQComponent = () => {
  const theme = useTheme();
  return (
    <Stack
      component={'section'}
      sx={{
        color: theme.palette.text.primary,
        position: 'relative',
      }}
    >
      <StyledFAQBody>
        <Stack
          sx={{
            gap: '8px',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <StyledSectionSubHeader>вопросы</StyledSectionSubHeader>
          <StyledSectionHeader variant="h2">Ответы на частые вопросы</StyledSectionHeader>
        </Stack>
        <StyledFaqDropdowns>
          {questions.map((qa, idx) => (
            <StyledFaqListElem key={idx}>
              <Dropdown qa={qa} />
            </StyledFaqListElem>
          ))}
        </StyledFaqDropdowns>
      </StyledFAQBody>
      <StyledFaqBackground>
        <StyledDots
          src={FaqDotsGroup}
          sx={{
            top: '4px',
            left: '0',
          }}
        />
        <StyledDots
          src={FaqDotsGroup}
          sx={{
            bottom: '4px',
            right: '0',
          }}
        />
      </StyledFaqBackground>
    </Stack>
  );
};

const StyledFAQBody = styled(Stack)`
  position: relative;
  z-index: 1;

  gap: 64px;
  width: 100%;

  padding: 80px;

  @media (width < ${(props) => props.theme.breakpoints.values.md}px) {
    gap: 32px;
    padding: 48px 16px;
  }
`;

const StyledFaqBackground = styled('div')`
  background: linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const StyledDots = styled('img')`
  position: absolute;

  @media (width < ${(props) => props.theme.breakpoints.values.md}px) {
    display: none;
  }
`;

const StyledFaqDropdowns = styled('menu')`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  gap: 16px;
  margin-left: auto;
  margin-right: auto;

  margin-block: 0;
  padding-inline: 0;
`;

const StyledFaqListElem = styled('li')`
  list-style-type: none;
`;

export default FAQComponent;
