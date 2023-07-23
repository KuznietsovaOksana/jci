import React from 'react';

import ArrowRight from 'public/icons/arrow-right.svg';

import s from './IconButton.module.css';

interface ButtonProps {
  className?: string;
  text: string;
  href?: string;
}

export const IconButton: React.FC<ButtonProps> = ({
  text,
  className,
  href,
}) => {
  return (
    <a href={href} className={`${s.button} ${className}`}>
      {text}
      <ArrowRight className={s.icon} />
    </a>
  );
};

IconButton.displayName = 'IconButton';
