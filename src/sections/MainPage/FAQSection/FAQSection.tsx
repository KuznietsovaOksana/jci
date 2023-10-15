import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';
import { Accordion } from '@/components/common/Accordion';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';
import { AccordionProps } from '@/components/common/Accordion/Accordion.props';

import s from './FAQSection.module.css';

export const FAQSection = ({ faqData }: AccordionProps) => {
  const { t } = useTranslation('mainPage');

  return (
    <Section className={s.section}>
      <Container>
        <div className={s.box}>
          <Title className={s.title}>
            {t('faq.title')}
            <span className={s.blue}>{t('faq.span')}</span>
          </Title>
          <Accordion faqData={faqData} />
        </div>
      </Container>
    </Section>
  );
};
