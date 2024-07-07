import { Typography, Box, Link } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import {
  Section,
  Container,
  FormBlock,
  TypographyWrapper,
  FormWrapper,
  InputWrapper,
  LabelBlock,
  LabelBlockCheckbox,
  StyledFormButton,
  Popup,
  FormTitle,
  FormSubTitle,
  PopupTitle,
} from './Form.styled';
import arrowRight from '../Assets/arrow-right.svg';
import popupSuccess from '../Assets/popup-success.svg';
import { IFormData } from './Form.types';

const initialFormData: IFormData = {
  name: '',
  secondName: '',
  conversationTheme: '',
  questions: '',
  groups: '',
};

const Form: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(true);
    setFormData(initialFormData);
  };

  return (
    <Section>
      <Container>
        {isSuccess ? (
          <Popup>
            <PopupTitle variant="h3">Форма успешно отправлена</PopupTitle>
            <img src={popupSuccess} width={128} height={128} />
            <Box paddingTop={'16px'} paddingBottom={'16px'}>
              <Link
                href="#"
                underline="none"
                display={'inline-flex'}
                alignItems={'center'}
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  setIsSuccess(false);
                }}
              >
                <Typography>Вернуться к форме</Typography>
                <Box padding={'5px'} marginLeft={'16px'} display={'flex'}>
                  <img src={arrowRight} alt="Стрелка вправо" />
                </Box>
              </Link>
            </Box>
          </Popup>
        ) : (
          <FormBlock onSubmit={onSubmit}>
            <TypographyWrapper>
              <FormTitle variant="h2">Начать использование</FormTitle>
              <FormSubTitle variant="body1">Хотите начать сотрудничество? Напишите нам</FormSubTitle>
            </TypographyWrapper>

            <FormWrapper>
              <InputWrapper>
                <LabelBlock htmlFor="name">
                  <span>Имя</span>
                  <input type="text" id="name" name="name" placeholder="Иван" onChange={handleChange} required />
                </LabelBlock>
                <LabelBlock htmlFor="secondName">
                  <span>Фамилия</span>
                  <input
                    type="text"
                    id="secondName"
                    name="secondName"
                    placeholder="Иванов"
                    onChange={handleChange}
                    required
                  />
                </LabelBlock>
              </InputWrapper>
              <LabelBlock htmlFor="conversationTheme">
                <span>Тема</span>
                <input
                  type="text"
                  id="conversationTheme"
                  name="conversationTheme"
                  placeholder="Сотрудничество"
                  onChange={handleChange}
                  required
                />
              </LabelBlock>
              <LabelBlock htmlFor="questions">
                <span>Вопросы</span>
                <textarea
                  id="questions"
                  name="questions"
                  placeholder="Ваш вопрос ..."
                  onChange={handleChange}
                  required
                ></textarea>
              </LabelBlock>
              <LabelBlock htmlFor="groups-select">
                <span>Группы</span>
                <select id="groups-select" name="groups" onChange={handleChange} required>
                  <option>Группы</option>
                  <option value="group-1">1 группа</option>
                  <option value="group-1">2 группа</option>
                </select>
              </LabelBlock>
              <LabelBlockCheckbox htmlFor="politicCheckbox">
                <span>Согласен с политикой обработки данных</span>
                <input type="checkbox" id="politicCheckbox" required />
              </LabelBlockCheckbox>
              <StyledFormButton type="submit">Отправить</StyledFormButton>
            </FormWrapper>
          </FormBlock>
        )}
      </Container>
    </Section>
  );
};

export default Form;
