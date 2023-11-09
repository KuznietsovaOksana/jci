import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { FormContacts } from '@/components/forms/FormContacts';

import s from './ContactsSection.module.css';

export const ContactsSection = () => {
  return (
    <Section className={s.first_section}>
      <Container>
        <FormContacts />
      </Container>
    </Section>
  );
};
