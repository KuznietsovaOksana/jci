import { Container } from '@/components/common/Container';
import { Accordion } from '@/components/common/Accordion';
import { Section } from '@/components/sections/Section';
import { faqs } from '@/components/common/Accordion/data';
import { Title } from '@/components/typography/Title';

import s from './FAQSection.module.css';

export const FAQSection = () => {
  return (
    <Section className={s.section}>
      <Container>
        <div className={s.box}>
          <Title className={s.title}>
            Frequently asked <span className={s.blue}>questions</span>
          </Title>
          <Accordion faqs={faqs} />
        </div>
      </Container>
    </Section>
  );
};
