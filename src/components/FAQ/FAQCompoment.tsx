import { Stack, Typography, styled, useMediaQuery } from '@mui/material';
import { Dropdown } from './Dropdown';
import { useTheme } from '@mui/material';

type Question = {
  question: string;
  answer: string;
};

const questions: Question[] = [
  {
    question: 'В каких городах работает сервис?',
    answer:
      'Обращаться можно из любого города России, даже если вы путешествуете за границу: достаточно иметь доступ к интернету и возможность оплатить консультацию онлайн.',
  },
  { question: 'Какие врачи меня консультируют?', answer: 'Лучшие специалисты местных шараг' },
  { question: 'А как врач поможет через интернет?', answer: 'С божьей помощью' },
  { question: 'Что за врачи работают на сервисе, откуда они?', answer: 'Из самой преисподней' },
  { question: 'Запись разговора не попадёт в соцсети?', answer: 'Попадет, мы все данные через даркнет передаем' },
];

const FAQComponent = () => {
  const matches = useMediaQuery('(width < 720px)');
  const theme = useTheme();
  return (
    <StyledFAQ color={theme.palette.text.primary}>
      <StyledFAQBody>
        <Stack gap={'8px'} alignItems={'center'} sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              color: '#001D6C',
              lineHeight: '1em',
              letterSpacing: '1px',
            }}
          >
            вопросы
          </Typography>
          <Typography variant={!matches ? 'h2' : 'h4'}>Ответы на частые вопросы</Typography>
        </Stack>
        <StyledFaqDropdowns>
          {questions.map((elem, ind) => (
            <StyledFaqListElem>
              <Dropdown key={ind} header={elem.question} body={elem.answer} />
            </StyledFaqListElem>
          ))}
        </StyledFaqDropdowns>
      </StyledFAQBody>
      <StyledFaqBackground>
        <StyledDots
          src="/images/FaqDotsGroup.svg"
          sx={{
            top: '4px',
            left: '0',
          }}
        />
        <StyledDots
          src="/images/FaqDotsGroup.svg"
          sx={{
            bottom: '4px',
            right: '0',
          }}
        />
      </StyledFaqBackground>
    </StyledFAQ>
  );
};

const StyledFAQ = styled(Stack)`
  position: relative;
`;

const StyledFAQBody = styled(Stack)`
  position: relative;
  z-index: 1;

  position: relative;
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

export default FAQComponent;
