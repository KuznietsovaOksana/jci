import { ErrorMessage, Field, Form, Formik } from 'formik';
import { PersistFormikValues } from 'formik-persist-values';

import { Input } from '@/components/inputs/Input';
import { Textarea } from '@/components/inputs/Textarea';
import { RadioDefBtn } from '@/components/buttons/radioBtns/RadioDefBtn';
import { MainFuncBtn } from '@/components/buttons/MainFuncBtn';

import data from '@/data/joinUsPage.json';
import { onDateMask } from '@/services/dateMask';
import { onMaxLength } from '@/services/onMaxLength';
import { onSubmitValidation, schema } from '@/services/validation';

import { nameType } from '@/components/inputs/Input/Input.props';

import s from './FormJoinUs.module.css';
import { textAreaName } from '@/components/inputs/Textarea/Textarea.props';

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
  return (
    <Formik
      initialValues={initialState}
      onSubmit={async (values, actions) => {
        const validate = await onSubmitValidation(values, actions);
        if (!validate) return;
        // some logic
        actions.resetForm();
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
              <Textarea
                captionText={textarea.captionText}
                name={textarea.name as textAreaName}
                innerText={textarea.innerText}
                minlength='1'
                maxlength='500'
                errors={errors}
                touched={touched}
              />
            </ul>
            <p className={s.radio_title}>{radio.title}</p>
            <ul className={s.radio_list}>
              {radio.radio_buttons.map((el, ind) => (
                <li className={s.radio_item} key={ind}>
                  <RadioDefBtn name={el.name} value={el.text} label={el.text} />
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
            <MainFuncBtn className={s.button_send} text='Send' access={false} />
            <PersistFormikValues persistInvalid={true} name={KEY_JOIN_US} />
          </Form>
        );
      }}
    </Formik>
  );
};
