import { DetailedHTMLProps } from 'react';

export interface TitleProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag?: 'h1' | 'h2' | 'h3';
  isBlue?: boolean;
  className?: string;
  children: React.ReactNode;
}
