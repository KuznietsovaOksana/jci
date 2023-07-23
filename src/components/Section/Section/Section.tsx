import {
  DetailedHTMLProps,
  HtmlHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';

import s from './Section.module.css';

export interface SectionProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(function Search({
  children,
  className,
  ref,
}) {
  const combinedClassName = `${s.section} ${className}`;
  return (
    <section ref={ref} className={combinedClassName}>
      {children}
    </section>
  );
});
