import * as Yup from 'yup';

export const savadataValidation = Yup.object().shape({
  first_name: Yup.string()
    .required('First name is required.')
    .matches(/^[a-zA-Z]+$/, 'First name must contain only letters.'),

  last_name: Yup.string()
    .required('Last name is required.')
    .matches(/^[a-zA-Z]+$/, 'Last name must contain only letters.'),

  email: Yup.string()
    .required('Email is required.')
    .matches(
      /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
      'Please enter a valid email address.',
    ),

  phone: Yup.string()
    .required('Phone is required.')
    .matches(/^[0-9]{10}$/, 'Phone number is not valid. It must be 10 digits.'),
});
