import { object, string } from 'yup';

export const LoginFormSchema = object().shape({
  email: string().email().required('Email is required'),
  password: string().required('Password is required'),
});

export const LoginFormDefaultValue = {
  email: '',
  password: '',
};
