import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';

import s from './QuoteSection.module.css';

export const QuoteSection = () => {
  const { t } = useTranslation('projectsPage');

  return (
    <section className={s.quote_section}>
      <Container>
        <h2 className={s.quote_title}>&quot;{t('quote.text')}&quot;</h2>
        <p className={s.quote_author}>{t('quote.author')}</p>
      </Container>
    </section>
  );
};
