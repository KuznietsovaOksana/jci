import { DetailedHTMLProps, FC } from 'react';
import s from './Title.module.css';

interface TitleProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  isBlue?: boolean;
  className?: string;
}

export const Title: FC<TitleProps> = ({
  tag = 'h2',
  children,
  isBlue = false,
  className,
}) => {
  const Tag = tag;

  // const combinedClassName = `${s.title} ${
  //   isBlue ? s.blue : s.black
  // } ${className}`;

  const headingClassName = isBlue ? s.blue : s.black;
  const combinedClassName = `${s.title} ${s[tag]} ${headingClassName} ${className}`;

  return <Tag className={combinedClassName}>{children}</Tag>;
};

export default Title;
