/// <reference types="vite-plugin-svgr/client" />
import { ChangeEvent, FormEvent, useState } from 'react';
import {
  Section,
  Container,
  FormBlock,
  LabelBlock,
  LabelBlockCheckbox,
  StyledFormButton,
  FormInput,
  FormTextarea,
  FormSelect,
} from './Form.styled';
import { TypeFormData } from './Form.types';
import { NAME, SECOND_NAME, CONVERSATION_THEME, QUESTIONS, GROUPS } from './Form.constants';
import PopupForm from '../PopupForm/PopupForm';
import { Box, Typography } from '@mui/material';

const initialFormData: TypeFormData = {
  [NAME]: '',
  [SECOND_NAME]: '',
  [CONVERSATION_THEME]: '',
  [QUESTIONS]: '',
  [GROUPS]: '',
};

const Form = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState<TypeFormData>(initialFormData);

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

  const handleReturnForm: () => void = () => {
    setIsSuccess(false);
  };

  return (
    <Section>
      <Container>
        {isSuccess ? (
          <PopupForm handleReturnForm={handleReturnForm} />
        ) : (
          <FormBlock onSubmit={onSubmit}>
            <Box display="flex" flexDirection="column" gap="8px">
              <Typography variant="formTitle">Начать использование</Typography>
              <Typography variant="formSubTitle">Хотите начать сотрудничество? Напишите нам</Typography>
            </Box>
            <Box display="flex" flexDirection="column" gap="16px">
              <Box display="flex" gap="16px">
                <LabelBlock htmlFor="name">
                  <span>Имя</span>
                  <FormInput type="text" id="name" name="name" placeholder="Иван" onChange={handleChange} required />
                </LabelBlock>
                <LabelBlock htmlFor="secondName">
                  <span>Фамилия</span>
                  <FormInput
                    type="text"
                    id="secondName"
                    name="secondName"
                    placeholder="Иванов"
                    onChange={handleChange}
                    required
                  />
                </LabelBlock>
              </Box>
              <LabelBlock htmlFor="conversationTheme">
                <span>Тема</span>
                <FormInput
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
                <FormTextarea
                  id="questions"
                  name="questions"
                  placeholder="Ваш вопрос ..."
                  onChange={handleChange}
                  required
                ></FormTextarea>
              </LabelBlock>
              <LabelBlock htmlFor="groups-select">
                <span>Группы</span>
                <FormSelect id="groups-select" name="groups" onChange={handleChange} required>
                  <option>Группы</option>
                  <option value="group-1">1 группа</option>
                  <option value="group-2">2 группа</option>
                </FormSelect>
              </LabelBlock>
              <LabelBlockCheckbox htmlFor="politicCheckbox">
                <span>Согласен с политикой обработки данных</span>
                <FormInput type="checkbox" id="politicCheckbox" required />
              </LabelBlockCheckbox>
              <StyledFormButton type="submit">Отправить</StyledFormButton>
            </Box>
          </FormBlock>
        )}
      </Container>
    </Section>
  );
};

export default Form;
