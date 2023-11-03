import { FC } from 'react';

import { ButtonProps } from './MainFuncBtn.props';
import s from './MainFuncBtn.module.css';

export const MainFuncBtn: FC<ButtonProps> = ({
  text,
  style = 'primaryNavy',
  className,
  access = false,
  onClick,
}) => {
  return (
    <button
      type='submit'
      onClick={onClick}
      className={`${s.mainBtn} ${s[style]} ${className}`}
      disabled={access ? true : false}
    >
      {text}
    </button>
  );
};

MainFuncBtn.displayName = 'MainButton';
