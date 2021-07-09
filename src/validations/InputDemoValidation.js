import * as Yup from 'yup';

export const Inputschema = Yup.object().shape({
  name: Yup.string().min(3).required('Name is a required field'),
  sport: Yup.string().required('sport is a required field'),
  role: Yup.string().required('What do you do is a required field'),
});
