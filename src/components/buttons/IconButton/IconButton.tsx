import { FC } from 'react';

import ArrowRight from 'public/icons/arrow-right.svg';

import { ButtonProps } from './IconButton.props';
import s from './IconButton.module.css';

export const IconButton: FC<ButtonProps> = ({ text, className, href }) => {
  return (
    <a href={href} className={`${s.button} ${className}`}>
      {text}
      <ArrowRight className={s.icon} />
    </a>
  );
};

IconButton.displayName = 'IconButton';
