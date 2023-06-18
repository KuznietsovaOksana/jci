import { Container } from '../../components/Container';
import { Section } from '../../components/Section';
import { NewsCard } from '../../components/ui-kit/cards/NewsCard';
import { cards } from './cards';

export const NewsSection = () => {
  return (
    <Section>
      <Container>
        <NewsCard cards={cards} />
      </Container>
    </Section>
  );
};
