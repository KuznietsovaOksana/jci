import { FormikErrors, FormikTouched } from 'formik';

export type textAreaName = 'expectations';
export interface TextareaProps {
  id?: string;
  name: textAreaName;
  captionText: string;
  innerText: string;
  className?: string;
  minlength?: string;
  maxlength?: string;
  errors: FormikErrors<{
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
  }>;
  touched: FormikTouched<{
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
  }>;
}
