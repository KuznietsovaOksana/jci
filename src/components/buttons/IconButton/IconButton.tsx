import { FC } from 'react';

import ArrowRight from 'public/icons/arrow-right.svg';
import ArrowDown from 'public/icons/chevron_Down.svg';

import { ButtonProps } from './IconButton.props';
import s from './IconButton.module.css';

export const IconButton: FC<ButtonProps> = ({
  text,
  className,
  href,
  isDown,
}) => {
  const LogoIcon = isDown ? ArrowDown : ArrowRight;

  return (
    <a href={href} className={`${s.button} ${className}`}>
      {text}
      <LogoIcon className={s.icon} />
    </a>
  );
};

IconButton.displayName = 'IconButton';
