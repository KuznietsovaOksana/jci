import { FC } from 'react';

import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

import s from './Section.module.css';

interface SectionProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ children, className, ref }) => {
  const combinedClassName = `${s.section} ${className}`;
  return (
    <section ref={ref} className={combinedClassName}>
      {children}
    </section>
  );
};
