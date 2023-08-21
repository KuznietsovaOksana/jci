import { FC } from 'react';

import { SectionProps } from './Section.props';
import s from './Section.module.css';

export const Section: FC<SectionProps> = ({ children, className, ref }) => {
  const combinedClassName = `${s.section} ${className}`;
  return (
    <section ref={ref} className={combinedClassName}>
      {children}
    </section>
  );
};
