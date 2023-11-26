import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { FormContacts } from '@/components/forms/FormContacts';
import { ContactsInfoSection } from '@/components/sections/ContactsInfoSection';

import s from './ContactsSection.module.css';

export const ContactsSection = () => {
  return (
    <Section className={s.first_section}>
      <Container>
        <div className={s.container}>
          <ContactsInfoSection />
          <FormContacts />
        </div>
      </Container>
    </Section>
  );
};
