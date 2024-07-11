/// <reference types="vite-plugin-svgr/client" />
import { ChangeEvent, FormEvent, useState } from 'react';
import { Section, Container, FormBlock, StyledFormButton } from './PartnerForm.styled';
import { TypeFormData } from './PartnerForm.types';
import { NAME, SECOND_NAME, CONVERSATION_THEME, QUESTIONS, GROUPS } from './PartnerForm.constants';
import PopupForm from '../PopupForm/PopupForm';
import { Box, Typography } from '@mui/material';
import PartnerFormLabel from './PartnerFormLabel/PartnerFormLabel';
import { FormInput } from './PartnerFormInput/PartnerFormInput.styled';
import PartnerFormInput from './PartnerFormInput/PartnerFormInput';
import PartnerFormTextarea from './PartnerFormTextarea/PartnerFormTextarea';
import PartnerFormSelect from './PartnerFormSelect/PartnerFormSelect';

const initialFormData: TypeFormData = {
  [NAME]: '',
  [SECOND_NAME]: '',
  [CONVERSATION_THEME]: '',
  [QUESTIONS]: '',
  [GROUPS]: '',
};

const PartnerForm = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
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
                <PartnerFormLabel label="Имя">
                  <PartnerFormInput
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Иван"
                    onChange={handleChange}
                    required
                  />
                </PartnerFormLabel>
                <PartnerFormLabel label="Фамилия">
                  <PartnerFormInput
                    type="text"
                    id="secondName"
                    name="secondName"
                    placeholder="Иванов"
                    onChange={handleChange}
                    required
                  />
                </PartnerFormLabel>
              </Box>
              <PartnerFormLabel label="Тема">
                <PartnerFormInput
                  type="text"
                  id="conversationTheme"
                  name="conversationTheme"
                  placeholder="Сотрудничество"
                  onChange={handleChange}
                  required
                />
              </PartnerFormLabel>
              <PartnerFormLabel label="Вопросы">
                <PartnerFormTextarea
                  id="questions"
                  name="questions"
                  placeholder="Ваш вопрос ..."
                  onChange={handleChange}
                  required
                />
              </PartnerFormLabel>
              <PartnerFormLabel label="Группы">
                <PartnerFormSelect
                  id="groups-select"
                  name="groups"
                  onChange={handleChange}
                  required
                ></PartnerFormSelect>
              </PartnerFormLabel>
              <PartnerFormLabel label="Согласен с политикой обработки данных" isCheckbox>
                <FormInput type="checkbox" id="politicCheckbox" required />
              </PartnerFormLabel>
              <StyledFormButton type="submit">Отправить</StyledFormButton>
            </Box>
          </FormBlock>
        )}
      </Container>
    </Section>
  );
};

export default PartnerForm;
