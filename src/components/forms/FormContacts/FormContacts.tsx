import { Form, Formik } from 'formik';
import { PersistFormikValues } from 'formik-persist-values';
import { ConnectedFocusError } from 'focus-formik-error';
import { useTranslation } from 'react-i18next';

import { Input } from '@/components/inputs/Input';
import { Textarea } from '@/components/inputs/Textarea';
import { MainFuncBtn } from '@/components/buttons/MainFuncBtn';
import { nameType } from '@/components/inputs/Input/Input.props';
import { textAreaName } from '@/components/inputs/Textarea/Textarea.props';

import { IFormLocale } from './formLocalType';
import { useValidate } from '@/hooks/useValidate';

import s from './FormContacts.module.css';

const KEY_CONTACTS = 'key_contacts';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const FormContacts = () => {
  const { t } = useTranslation('contactsPage');
  const items = t('form', {
    returnObjects: true,
    defaultValue: '',
  }) as IFormLocale;

  const { schemaContactsForm } = useValidate();

  return (
    <>
      <Formik
        initialValues={initialState}
        onSubmit={(values, actions) => {
          console.log(values);
          // some logic
          actions.resetForm();
        }}
        validationSchema={schemaContactsForm}
      >
        {({ values, errors, touched }) => {
          return (
            <Form className={s.form}>
              <h2 className={s.title}>{items.title}</h2>
              <ConnectedFocusError />
              <ul className={s.list}>
                {items &&
                  items.inputs.map((el, ind) => (
                    <li key={ind}>
                      <Input
                        captionText={el.captionText}
                        name={el.name as nameType}
                        type='text'
                        innerText={el.placeholder}
                        errors={errors}
                        touched={touched}
                        minlength='1'
                        maxlength={'100'}
                      />
                    </li>
                  ))}
                {items && (
                  <li>
                    <Textarea
                      captionText={items.text_area.captionText}
                      name={items.text_area.name as textAreaName}
                      innerText={items.text_area.placeholder}
                      minlength='1'
                      maxlength='2000'
                      errors={errors}
                      touched={touched}
                    />
                  </li>
                )}
              </ul>
              <MainFuncBtn
                className={s.button_send}
                text={items.button}
                access={false}
              />
              <PersistFormikValues persistInvalid={true} name={KEY_CONTACTS} />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
