import { FC } from 'react';

import { ButtonProps } from './MainButton.props';
import s from './MainButton.module.css';

export const MainButton: FC<ButtonProps> = ({
  text,
  style = 'primaryNavy',
  className,
  href,
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${s.mainBtn} ${s[style]} ${className}`}
    >
      {text}
    </a>
  );
};

MainButton.displayName = 'MainButton';
