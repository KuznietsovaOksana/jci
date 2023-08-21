import { FC } from 'react';

import { TitleProps } from './Title.props';
import s from './Title.module.css';

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
