import { styled } from '@mui/material';
export const LabelBlock = styled('label')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  ${({ theme }) => theme.typography.bodyS};

  input,
  textarea,
  select {
    :focus-visible {
      outline: none;
    }

    ::placeholder {
      color: ${({ theme }) => theme.palette.text.secondary};
      font-family: Roboto;
      ${({ theme }) => theme.typography.body2};
    }
  }
`;

export const LabelBlockCheckbox = styled(LabelBlock)`
  flex-direction: row-reverse;
  justify-content: start;
  align-items: center;

  & input[type='checkbox'] {
    width: 20px;
    height: 20px;
    border-radius: 0px;
    margin: 0;
  }
`;
