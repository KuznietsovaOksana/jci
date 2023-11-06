import { FormikErrors, FormikTouched } from 'formik';

export type nameType =
  | 'name'
  | 'date'
  | 'email'
  | 'city'
  | 'phone'
  | 'role'
  | 'project'
  | 'expectations'
  | 'info'
  | 'other';

export type valueType = {
  name: string;
  date: string;
  email: string;
  city: string;
  phone: string;
  role: string;
  project: string;
  expectations: string;
  info: string;
  other: string;
};

export interface InputProps {
  id?: string;
  name: nameType;

  type: string;
  captionText: string;
  innerText: string;
  className?: string;
  minlength?: string;
  maxlength?: string;
  errors: FormikErrors<valueType>;
  touched: FormikTouched<valueType>;
}
