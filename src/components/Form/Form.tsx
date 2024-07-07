import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography, Button } from '@mui/material';
import { useState } from 'react';

const Section = styled.section`
  background-color: #ddb9dd;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 244px;
  padding-bottom: 80px;
`;

const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-color: #fff;
  padding: 48px;
  max-width: 712px;
  border: 1px solid #dde1e6;
  border-radius: 8px;
`;

const TypographyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const LabelBlock = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  & input,
  & textarea,
  & select {
    padding: 13px 16px;
    background-color: #f2f4f8;
    border: none;
    border-bottom: 1px solid #c1c7cd;

    :focus-visible {
      outline: none;
    }

    ::placeholder {
      color: #697077;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.4;
    }
  }

  & textarea {
    width: 100%;
    min-height: 96px;
    resize: vertical;
  }
`;

const LabelBlockCheckbox = styled(LabelBlock)`
  flex-direction: row-reverse;
  justify-content: start;
`;

const FormButton = styled(Button)`
  display: flex;
  align-self: flex-end;
  padding: 16px 28px;
  border: none;
  background-color: #458ff6;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: capitalize;

  :hover {
    background-color: #2061bc;
  }
`;

const Popup = styled.div`
	padding: 212px 48px;
	background-color: #fff;
`

const Form = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    secondName: '',
    conversationTheme: '',
    questions: '',
    groups: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    console.log(formData);
  };


  return (
    <Section>
      <Container>
        {isSuccess ? (
          <Popup>
						<Typography variant='h3'>Форма успешно отправлена</Typography>
						<Button>Вернуться к форме</Button>
					</Popup>
        ) : (
          <FormBlock onSubmit={onSubmit}>
            <TypographyWrapper>
              <Typography variant="h2">Начать использование</Typography>
              <Typography variant="body1">Хотите начать сотрудничество? Напишите нам</Typography>
            </TypographyWrapper>

            <FormWrapper>
              <InputWrapper>
                <LabelBlock htmlFor="name">
                  <span>Имя</span>
                  <input type="text" id="name" name="name" placeholder="Иван" onChange={handleInputChange} required />
                </LabelBlock>
                <LabelBlock htmlFor="secondName">
                  <span>Фамилия</span>
                  <input
                    type="text"
                    id="secondName"
                    name="secondName"
                    placeholder="Иванов"
                    onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  required
                />
              </LabelBlock>
              <LabelBlock htmlFor="questions">
                <span>Вопросы</span>
                <textarea
                  id="questions"
                  name="questions"
                  placeholder="Ваш вопрос ..."
                  onChange={handleInputChange}
                  required
                ></textarea>
              </LabelBlock>
              <LabelBlock htmlFor="groups-select">
                <span>Группы</span>
                <select id="groups-select" name="groups" onChange={handleInputChange} required>
                  <option>Группы</option>
                  <option value="group-1">1 группа</option>
                  <option value="group-1">2 группа</option>
                </select>
              </LabelBlock>
              <LabelBlockCheckbox htmlFor="politicCheckbox">
                <span>Согласен с политикой обработки данных</span>
                <input type="checkbox" id="politicCheckbox" required />
              </LabelBlockCheckbox>
              <FormButton type="submit">Отправить</FormButton>
            </FormWrapper>
          </FormBlock>
        )}
      </Container>
    </Section>
  );
};

export default Form;
