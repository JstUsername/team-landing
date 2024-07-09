import { ChangeEvent, useEffect, useState } from 'react';
import { validateEmail } from '../../utils/validate.ts';
import FormInput from '../FormInput/FormInput.tsx';

export default function FormEmailInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    if (email === '') {
      setError(false);
    } else {
      validateEmail(email) ? setError(false) : setError(true);
    }
  }, [email]);

  return (
    <FormInput
      inputId="email-input"
      inputLabel="Email"
      inputPlaceholder="example@email.com"
      inputError={error}
      inputOnChange={handleChange}
    />
  );
}
