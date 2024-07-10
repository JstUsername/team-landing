export const validateEmail = (email: string) => {
  const regexpEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexpEmail.test(email.toLowerCase());
};

export const validatePassword = (password: string) => {
  const regexpPassword = /^(?=.*[a-z])(?=.*[A-Z0-9]).{8,}$/;
  return regexpPassword.test(password);
};
