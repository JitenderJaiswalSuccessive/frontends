import * as Yup from 'yup';

export const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email Address must be a valid email')
    .required('Email Address is a required field'),
  password: Yup.string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 'Must contain one Upper-Case, one Lower-Case , one digit and atleast 8 characters')
    .required('Password is required'),
});
