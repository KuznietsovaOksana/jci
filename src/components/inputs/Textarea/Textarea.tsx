import { FC } from 'react';

import { TextareaProps } from './Textarea.props';
import s from '../Input/Input.module.css';

export const Textarea: FC<TextareaProps> = ({
  id,
  name,
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
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={innerText}
        className={s.textarea}
      />
      {helperText && <p className={s.input_helperText}>{helperText}</p>}
    </label>
  );
};
