import { FC } from 'react';
import { ErrorMessage, Field } from 'formik';

import { TextareaProps } from './Textarea.props';
import s from '../Input/Input.module.css';

export const Textarea: FC<TextareaProps> = ({
  id,
  name,
  captionText,
  innerText,
  className,
  errors,
  touched,
  minlength,
  maxlength,
}) => {
  const redBorder = touched[name] && errors[name] ? s.invalid : '';
  return (
    <label className={`${s.inputLabel} ${className}`}>
      <p className={s.input_captionText}>{captionText}</p>
      <Field
        component='textarea'
        id={id}
        name={name}
        placeholder={innerText}
        className={`${s.textarea} ${redBorder}`}
        minLength={minlength}
        maxLength={maxlength}
      />
      <ErrorMessage className={s.input_helperText} name={name} component='p' />
    </label>
  );
};
