import { Stack, Typography, TypographyProps, styled, useMediaQuery } from '@mui/material';
import { Dropdown } from './Dropdown';
import { useTheme } from '@mui/material';
import { questions } from './constants';

const FAQComponent = () => {
  const matches = useMediaQuery('(width < 720px)');
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
          <StyledSectionHeader variant="h5">вопросы</StyledSectionHeader>
          <Typography variant={!matches ? 'h2' : 'h4'}>Ответы на частые вопросы</Typography>
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
          src="src/assets/FAQ/FAQDotsGroup.svg"
          sx={{
            top: '4px',
            left: '0',
          }}
        />
        <StyledDots
          src="src/assets/FAQ/FAQDotsGroup.svg"
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

  @media (width < 720px) {
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

  @media (width < 720px) {
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

const StyledSectionHeader = styled(Typography)<TypographyProps>(
  ({ theme }) => `
    color: ${theme.palette.primary.dark};
    line-height: 1em;
    letter-spacing: 1px;
    text-transform: uppercase
`,
);

export default FAQComponent;
