import { ErrorMessage, Field, Form, Formik } from 'formik';
import { PersistFormikValues } from 'formik-persist-values';
import { ConnectedFocusError } from 'focus-formik-error';
import { useState } from 'react';

import { Input } from '@/components/inputs/Input';
import { Textarea } from '@/components/inputs/Textarea';
import { RadioDefBtn } from '@/components/buttons/radioBtns/RadioDefBtn';
import { MainFuncBtn } from '@/components/buttons/MainFuncBtn';
// Katya's code
import { SuccessScreenComponent } from '@/components/sections/SuccessScreenComponent';
// Katya's code

import data from '@/data/joinUsPage.json';
import { onDateMask } from '@/services/dateMask';
import { onMaxLength } from '@/services/onMaxLength';
import { onSubmitValidation, schema } from '@/services/validation';

import { nameType } from '@/components/inputs/Input/Input.props';

import s from './FormJoinUs.module.css';
import { textAreaName } from '@/components/inputs/Textarea/Textarea.props';
import { fetchJoinUs } from '@/lib/api';

const KEY_JOIN_US = 'key_join_us';

const { inputs, textarea, radio } = data;

const initialState = {
  name: '',
  date: '',
  email: '',
  city: '',
  phone: '+',
  role: '',
  project: '',
  expectations: '',
  info: radio.radio_buttons[0].text,
  other: '',
};

export const FormJoinUs = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  return (
    <>
      {!formSuccess ? (
        <Formik
          initialValues={initialState}
          onSubmit={async (values, actions) => {
            const validate = await onSubmitValidation(values, actions);
            if (!validate) {
              return;
            }
            const newData = {
              full_name: values.name,
              date_of_birth: values.date,
              email: values.email,
              city: values.city,
              phone_number: values.phone,
              occupation_role: values.role,
              project_direction: values.project,
              expectations: values.expectations,
              how_did_you_learn: values.info,
              other_text: values.other,
            };
            console.log(newData);
            const data = await fetchJoinUs(newData);
            console.log(data);
            if (data) {
              actions.resetForm();
              setFormSuccess(true);
            }
          }}
          validationSchema={schema}
        >
          {({ values, errors, touched }) => {
            values.date = onDateMask(values.date);
            values.phone =
              values.phone[0] === '+'
                ? values.phone.trim()
                : '+' + values.phone.trim();

            return (
              <Form className={s.form}>
                <ConnectedFocusError />
                <ul className={s.list}>
                  {inputs.map((el, ind) => (
                    <li key={ind}>
                      <Input
                        captionText={el.captionText}
                        name={el.name as nameType}
                        type={el.type}
                        innerText={el.innerText}
                        errors={errors}
                        touched={touched}
                        minlength='1'
                        maxlength={onMaxLength(ind)}
                      />
                    </li>
                  ))}
                  <li>
                    <Textarea
                      captionText={textarea.captionText}
                      name={textarea.name as textAreaName}
                      innerText={textarea.innerText}
                      minlength='1'
                      maxlength='500'
                      errors={errors}
                      touched={touched}
                    />
                  </li>
                </ul>
                <p className={s.radio_title}>{radio.title}</p>
                <ul className={s.radio_list}>
                  {radio.radio_buttons.map((el, ind) => (
                    <li className={s.radio_item} key={ind}>
                      <RadioDefBtn
                        name={el.name}
                        value={el.text}
                        label={el.text}
                      />
                      {ind === 4 && (
                        <>
                          <div className={s.block_radio}>
                            {values.info === 'Other:' ? (
                              <>
                                <Field
                                  name='other'
                                  className={`${s.underline_input}  ${
                                    touched.other &&
                                    errors.other &&
                                    s.underline_input_error
                                  }   }  `}
                                  minLength='1'
                                  maxLength='300'
                                />
                                <ErrorMessage
                                  className={s.input_helperText}
                                  name='other'
                                  component='p'
                                />
                              </>
                            ) : (
                              <div className={s.div_border}></div>
                            )}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                <MainFuncBtn
                  className={s.button_send}
                  text='Send'
                  access={false}
                />
                <PersistFormikValues persistInvalid={true} name={KEY_JOIN_US} />
              </Form>
            );
          }}
        </Formik>
      ) : (
        // Katya's code
        <SuccessScreenComponent
          type='success'
          header='Thank you for your interest in becoming a member of JCI Ukraine!'
          descr='Your application has been sent to our representative. We will
        contact you shortly to discuss further cooperation'
        />
      )}
      {/* Відображення повідомлення про помилку у випадку помилки серверу */}
      {/* <SuccessScreenComponent
        type='error'
        descr='Oops! Something went wrong. Please kindly fill out the form again. We apologize for any inconvenience.'
      /> */}
    </>
    // Katya's code
  );
};
