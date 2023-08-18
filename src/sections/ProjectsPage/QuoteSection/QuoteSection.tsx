import { Container } from '@/components/common/Container';
import { quoteData } from './data';

import s from './QuoteSection.module.css';

export const QuoteSection = () => {
  return (
    <section className={s.quote_section}>
      <Container>
        <h2 className={s.quote_title}>{quoteData.text}</h2>
        <p className={s.quote_author}>{quoteData.author}</p>
      </Container>
    </section>
  );
};
