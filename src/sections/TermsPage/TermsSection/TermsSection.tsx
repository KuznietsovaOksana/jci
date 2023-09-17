import { useTranslation } from 'next-i18next';
import { LegalAgreement } from '@/components/typography/LegalAgreement';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { LegalAgreementProps } from '@/components/typography/LegalAgreement/LegalAgreement.props';
import { Title } from '@/components/typography/Title';

import s from './TermsSection.module.css';

const TermsSection = () => {
  const { t } = useTranslation('termsPage');

  const sections = t('sections', {
    returnObjects: true,
    defaultValue: '',
  }) as LegalAgreementProps[];

  return (
    <Section>
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

export default TermsSection;
