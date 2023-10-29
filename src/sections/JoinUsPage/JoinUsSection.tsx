import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';
import { FormJoinUs } from '@/components/forms/FormJoinUs';

import data from '@/data/joinUsPage.json';

import s from './JoinUsSection.module.css';

export const JoinUsSection = () => {
  const { title, text } = data;
  return (
    <Section className={s.first_section}>
      <Container>
        <Title className={s.title} tag='h1' isBlue>
          {title}
        </Title>
        <p className={s.text}>{text}</p>
        <FormJoinUs />
      </Container>
    </Section>
  );
};
