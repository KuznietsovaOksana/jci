import { FC } from 'react';
import Link from 'next/link';

import { ButtonProps } from './MainButton.props';
import s from './MainButton.module.css';

export const MainButton: FC<ButtonProps> = ({
  text,
  style = 'primaryNavy',
  className = '',
  href = '/',
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${s.mainBtn} ${s[style]} ${className}`}
    >
      {text}
    </Link>
  );
};

MainButton.displayName = 'MainButton';
