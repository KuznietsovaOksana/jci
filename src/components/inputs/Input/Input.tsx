import { FC } from 'react';
import { ErrorMessage, Field } from 'formik';

import { InputProps } from './Input.props';
import s from './Input.module.css';

export const Input: FC<InputProps> = ({
  id,
  name,
  type,
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
    <label className={`${s.inputLabel}  ${className}`}>
      <p className={s.input_captionText}>{captionText}</p>
      <Field
        id={id}
        className={`${s.input} ${redBorder}`}
        type={type}
        name={name}
        placeholder={innerText}
        minLength={minlength}
        maxLength={maxlength}
      />
      <ErrorMessage className={s.input_helperText} name={name} component='p' />
    </label>
  );
};
