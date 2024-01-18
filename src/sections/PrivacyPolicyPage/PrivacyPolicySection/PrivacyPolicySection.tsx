import { useTranslation } from 'next-i18next';
import { LegalAgreement } from '@/components/typography/LegalAgreement';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { LegalAgreementProps } from '@/components/typography/LegalAgreement/LegalAgreement.props';
import { Title } from '@/components/typography/Title';

import s from './PrivacyPolicySection.module.css';

const PrivacyPolicySection = () => {
  const { t } = useTranslation('privacyPolicyPage');

  const sections = t('sections', {
    returnObjects: true,
    defaultValue: '',
  }) as LegalAgreementProps[];

  return (
    <Section className={s.first_section}>
      <Container>
        <Title tag='h1' isBlue className={s.title}>
          {t('title')}
        </Title>
        {sections.map((section, index) => (
          <LegalAgreement key={index} {...section} />
        ))}
      </Container>
    </Section>
  );
};

export default PrivacyPolicySection;
