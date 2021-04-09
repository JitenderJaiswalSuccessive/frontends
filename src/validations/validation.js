import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is a required field'),
  email: Yup.string()
    .email('Email Address must be a valid email')
    .required('Email Address is a required field'),
  password: Yup.string()
    .min(8, 'Must contains 8 characters, at least one uppercase letter, one lowercase letter and one number')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Must match Password')
    .required('Confirm Password is required'),
});
