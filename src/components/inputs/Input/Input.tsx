import { FC } from 'react';

import { InputProps } from './Input.props';
import s from './Input.module.css';

export const Input: FC<InputProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  captionText,
  helperText,
  innerText,
  className,
}) => {
  return (
    <label className={`${s.inputLabel} ${className}`}>
      <p className={s.input_captionText}>{captionText}</p>
      <input
        id={id}
        className={s.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={innerText}
      />
      {helperText && <p className={s.input_helperText}>{helperText}</p>}
    </label>
  );
};
