import * as yup from 'yup';
import isValidDomain from 'is-valid-domain';
import { FormikHelpers } from 'formik';

import { valueType } from '@/components/inputs/Input/Input.props';

interface Formatted {
  [key: string]: string;
}

export const onlyLatinAndSpace = /^[a-zA-Z ]+$/u;
export const nameRegexPhone = /^\+\d+$/;

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(onlyLatinAndSpace, 'Invalid input, please use Latin letters')
    .test('format', 'Invalid format', (value: string | undefined) => {
      if (value?.trim() === '') return false;
      return true;
    })
    .required('This field is required'),
  date: yup.string().min(10, 'Format dd.mm.yyyy').required('data is required'),
  city: yup
    .string()
    .matches(onlyLatinAndSpace, 'Invalid input, please use Latin letters')
    .test('format', 'Invalid format', (value: string | undefined) => {
      if (value?.trim() === '') return false;
      return true;
    })
    .required('This field is required'),

  email: yup
    .string()
    .email('Invalid E-mail')
    .test(
      'validDomain',
      'Please include a valid domain extension such as .com or .net.',
      (value: string | undefined) => {
        const array = value?.split('@');
        return array && isValidDomain(array[1]);
      }
    )
    .required('This field is required'),

  phone: yup
    .string()
    .matches(
      nameRegexPhone,
      'Invalid input. Please enter only digits for the phone number'
    )
    .min(
      10,
      'Phone number must be in the format: +123456789 (between 9 and 15 digits)'
    )
    .max(
      16,
      'Phone number must be in the format: +123456789 (between 9 and 15 digits)'
    )
    .required('This field is required'),

  role: yup
    .string()
    .matches(onlyLatinAndSpace, 'Invalid input, please use Latin letters')
    .test('format', 'Invalid format', (value: string | undefined) => {
      if (value?.trim() === '') return false;
      return true;
    })
    .required('This field is required'),
  project: yup
    .string()
    .matches(onlyLatinAndSpace, 'Invalid input, please use Latin letters')
    .test('format', 'Invalid format', (value: string | undefined) => {
      if (value?.trim() === '') return false;
      return true;
    })
    .required('This field is required'),
  expectations: yup
    .string()
    .matches(onlyLatinAndSpace, 'Invalid input, please use Latin letters')
    .test('format', 'Invalid format', (value: string | undefined) => {
      if (value?.trim() === '') return false;
      return true;
    })
    .required('This field is required'),
});

export const onSubmitValidation = async (
  values: valueType,
  actions: FormikHelpers<valueType>
) => {
  if (values.info === 'Other:') {
    const dynamicSchema = schema.shape({
      other: yup
        .string()
        .matches(onlyLatinAndSpace, 'Invalid input, please use Latin letters')
        .test('format', 'Invalid format', (value: string | undefined) => {
          if (value?.trim() === '') return false;
          return true;
        })
        .required('This field is required for Other option'),
    });

    const validate = await dynamicSchema
      .validate(values, { abortEarly: false })
      .catch(errors => {
        const formattedErrors: Formatted = {};
        errors.inner.forEach((error: yup.ValidationError) => {
          if (error.path) {
            formattedErrors[error.path] = error.message;
          }
        });

        actions.setErrors(formattedErrors);
      });
    if (validate) return true;
  }
};

export const schemaContactsForm = yup.object().shape({
  name: yup
    .string()
    .matches(onlyLatinAndSpace, 'Invalid input, please use Latin letters')
    .test('format', 'Invalid format', (value: string | undefined) => {
      if (value?.trim() === '') return false;
      return true;
    })
    .required('This field is required'),

  email: yup
    .string()
    .email('Invalid E-mail')
    .test(
      'validDomain',
      'Please include a valid domain extension such as .com or .net.',
      (value: string | undefined) => {
        const array = value?.split('@');
        return array && isValidDomain(array[1]);
      }
    )
    .required('This field is required'),
  message: yup
    .string()
    .matches(onlyLatinAndSpace, 'Invalid input, please use Latin letters')
    .test('format', 'Invalid format', (value: string | undefined) => {
      if (value?.trim() === '') return false;
      return true;
    })
    .required('This field is required'),
});
