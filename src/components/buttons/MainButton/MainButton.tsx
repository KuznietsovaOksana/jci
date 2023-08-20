import React from 'react';

import s from './MainButton.module.css';

interface ButtonProps {
  className?: string;
  text: string;
  style?: 'primaryNavy' | 'secondaryNavy' | 'primaryBlue' | 'secondaryBlue';
  href?: string;
}

export const MainButton: React.FC<ButtonProps> = ({
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
