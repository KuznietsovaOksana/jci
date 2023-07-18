import { Container } from '@/components/Container';
import { Accordion } from '@/components/Accordion';
import { Section } from '@/components/Section';
import { faqs } from '@/components/Accordion/data';

import s from './FAQSection.module.css';

export const FAQSection = () => {
  return (
    <Section className={s.section}>
      <Container>
        <div className={s.box}>
          <h2 className={s.title}>
            Frequently asked <span className={s.blue}>questions</span>
          </h2>
          <Accordion faqs={faqs} />
        </div>
      </Container>
    </Section>
  );
};
