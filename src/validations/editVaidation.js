import * as Yup from 'yup';

export const EditSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is a required field'),
  email: Yup.string()
    .email('Email Address must be a valid email')
    .required('Email Address is a required field'),
});
