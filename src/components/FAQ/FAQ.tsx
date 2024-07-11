import { Stack, styled, Typography } from '@mui/material';
import { Dropdown } from './Dropdown';
import { questions } from './FAQ.constants';
import FaqDotsGroup from '../../assets/FAQ/FaqDotsGroup.svg?react';

const FAQComponent = () => {
  return (
    <Stack component="section" color="text.primary" position="relative">
      <StyledFAQBody>
        <Stack gap="8px" alignItems="center" textAlign="center">
          <Typography variant="sectionSubHeader">вопросы</Typography>
          <Typography variant="sectionHeader">Ответы на частые вопросы</Typography>
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
          sx={{
            top: '4px',
            left: '0',
          }}
        >
          <FaqDotsGroup />
        </StyledDots>
        <StyledDots
          sx={{
            bottom: '4px',
            right: '0',
          }}
        >
          <FaqDotsGroup />
        </StyledDots>
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

  ${({ theme }) => theme.breakpoints.down('md')} {
    gap: 32px;
    padding: 48px 16px;
  }
`;

const StyledFaqBackground = styled('div')`
  background: ${({ theme }) => theme.palette.gradients.blueGradient};
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const StyledDots = styled('div')`
  position: absolute;

  ${({ theme }) => theme.breakpoints.down('md')} {
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
