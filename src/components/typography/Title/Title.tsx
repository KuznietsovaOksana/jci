import { DetailedHTMLProps, FC } from 'react';

import s from './Title.module.css';

interface TitleProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag?: 'h1' | 'h2' | 'h3';
  isBlue?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Title: FC<TitleProps> = ({
  tag = 'h2',
  isBlue = false,
  className,
  children,
}) => {
  const Tag = tag;

  const headingClassName = isBlue ? s.blue : s.black;
  const combinedClassName = `${s.title} ${s[tag]} ${headingClassName} ${className}`;

  return <Tag className={combinedClassName}>{children}</Tag>;
};
