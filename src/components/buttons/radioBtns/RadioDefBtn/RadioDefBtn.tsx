import { FC } from 'react';
import { Field } from 'formik';

import { ButtonProps } from './RadioDefBtn.props';

import s from './RadioDefBtn.module.css';

export const RadioDefBtn: FC<ButtonProps> = ({ id, name, value, label }) => {
  return (
    <label className={`${s.radioLabel}`}>
      <Field
        type='radio'
        id={id}
        name={name}
        value={value}
        className={`${s.radioInput} ${s.input}`}
      />
      <span className={`${s.checkmark}`}></span>
      <p className={`${s.inputName}`}>{label}</p>
    </label>
  );
};

RadioDefBtn.displayName = 'RadioDefBtn';
