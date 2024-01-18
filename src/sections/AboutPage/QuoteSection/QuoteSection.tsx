import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';

import s from './QuoteSection.module.css';

export const QuoteSection = () => {
  const { t } = useTranslation('whoWeArePage');

  return (
    <section className={s.quote_section}>
      <Container>
        <h2 className={s.quote_title}>
          &quot;{t('quote_section.title')}&quot;
        </h2>
        <p className={s.quote_author}>{t('quote_section.author')}</p>
        <p className={s.quote_occupation}>{t('quote_section.occupation')}</p>
      </Container>
    </section>
  );
};
