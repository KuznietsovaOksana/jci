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

export const Section = forwardRef<HTMLElement, SectionProps>(function Search(
  { children, ...props },
  ref
) {
  return (
    <section ref={ref} className={s.section} {...props}>
      {children}
    </section>
  );
});
