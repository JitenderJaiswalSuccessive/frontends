import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is a required field'),
  email: Yup.string()
    .email('Email Address must be a valid email')
    .required('Email Address is a required field'),
  password: Yup.string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 'Must contain one Upper-Case, one Lower-Case , one digit and atleast 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Must match Password')
    .required('Confirm Password is required'),
});
