import { MouseEventHandler } from 'react';

export interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
  isDown?: boolean;
  Tag?: 'a' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}
