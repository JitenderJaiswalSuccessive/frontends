import * as Yup from 'yup';

export const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email Address must be a valid email')
    .required('Email Address is a required field'),
  password: Yup.string()
    .min(8, 'Must contains 8 characters, at least one uppercase letter, one lowercase letter and one number')
    .required('Password is required'),
});
