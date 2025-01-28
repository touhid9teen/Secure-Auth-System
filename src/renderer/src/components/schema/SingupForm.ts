import { object, ref, string } from 'yup';

export const SignupFormSchema = object().shape({
  name: string().required('Name is required'),
  email: string().email().required('Email is required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .max(20, 'Must be at most 20 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    )
    .required('Password is required'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

export const SignupFormDefaultValue = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};
