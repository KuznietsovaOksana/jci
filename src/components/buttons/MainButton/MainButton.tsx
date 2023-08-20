import { FC } from 'react';

import { ButtonProps } from './MainButton.props';
import s from './MainButton.module.css';

export const MainButton: FC<ButtonProps> = ({
  text,
  style = 'primaryNavy',
  className,
  href,
}) => {
  return (
    <a href={href} className={`${s.mainBtn} ${s[style]} ${className}`}>
      {text}
    </a>
  );
};

MainButton.displayName = 'MainButton';
