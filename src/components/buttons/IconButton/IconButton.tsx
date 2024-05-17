import { FC } from 'react';

import ArrowRight from 'public/icons/arrow-right.svg';
import ArrowDown from 'public/icons/chevron_Down.svg';

import { ButtonProps } from './IconButton.props';
import s from './IconButton.module.css';

export const IconButton: FC<ButtonProps> = ({
  text,
  className = '',
  href = '/',
  isDown,
  Tag = 'a',
  onClick,
}) => {
  const LogoIcon = isDown ? ArrowDown : ArrowRight;

  return (
    <Tag onClick={onClick} href={href} className={`${s.button} ${className}`}>
      {text}
      <LogoIcon className={s.icon} />
    </Tag>
  );
};

IconButton.displayName = 'IconButton';
