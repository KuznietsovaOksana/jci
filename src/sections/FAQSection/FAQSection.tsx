import { Container } from '@/components/Container/Container';
import { Accordion } from '@/components/Accordion/Accordion';
import { faqs } from '@/components/Accordion/data';
import s from './FAQSection.module.css';

export const FAQSection = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.box}>
          <h2 className={s.title}>
            Frequently asked <span className={s.blue}>questions</span>
          </h2>
          <Accordion faqs={faqs} />
        </div>
      </Container>
    </section>
  );
};
