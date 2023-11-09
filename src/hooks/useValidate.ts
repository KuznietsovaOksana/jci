import isValidDomain from 'is-valid-domain';
import { useTranslation } from 'next-i18next';
import * as yup from 'yup';

import { IErrorLocale } from '@/components/forms/FormContacts/formLocalType';

export const useValidate = () => {
  const { t } = useTranslation('contactsPage');
  const errors = t('errors', {
    returnObjects: true,
    defaultValue: '',
  }) as IErrorLocale;

  const schemaContactsForm = yup.object().shape({
    name: yup
      .string()
      .test('format', errors.format, (value: string | undefined) => {
        if (value?.trim() === '') return false;
        return true;
      })
      .required(errors.required),

    email: yup
      .string()
      .email(errors.email_symbol)
      .test('validDomain', errors.domain, (value: string | undefined) => {
        const array = value?.split('@');
        return array && isValidDomain(array[1]);
      })
      .required(errors.required),
    message: yup
      .string()
      .test('format', errors.format, (value: string | undefined) => {
        if (value?.trim() === '') return false;
        return true;
      })
      .required(errors.required),
  });
  return { schemaContactsForm };
};
