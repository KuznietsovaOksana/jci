import { FC } from 'react';

import { ButtonProps } from './MainButton.props';
import s from './MainButton.module.css';
import Link from 'next/link';

export const MainButton: FC<ButtonProps> = ({
  text,
  style = 'primaryNavy',
  className,
  href = '/',
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
