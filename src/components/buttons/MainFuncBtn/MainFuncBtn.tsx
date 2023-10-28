import { FC } from 'react';

import { ButtonProps } from './MainFuncBtn.props';
import s from './MainFuncBtn.module.css';
import Link from 'next/link';

export const MainFuncBtn: FC<ButtonProps> = ({
  text,
  style = 'primaryNavy',
  className,
  onClick,
}) => {
  return (
    // <a
    //   href={href}
    //   onClick={onClick}
    //   className={`${s.mainBtn} ${s[style]} ${className}`}
    // >
    //   {text}
    // </a>
    <button
      type='submit'
      onClick={onClick}
      className={`${s.mainBtn} ${s[style]} ${className}`}
    >
      {text}
    </button>
   
  );
};

MainFuncBtn.displayName = 'MainButton';
