import { useTranslation } from 'next-i18next';

import { Title } from '@/components/typography/Title';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { MainButton } from '@/components/buttons/MainButton';
import { Tabs } from '@/components/common/Tabs';

import s from './DonateSection.module.css';

const tabs = ['UAN', 'USD', 'EUR'];

export const DonateSection = () => {
  const { t: donatePageT } = useTranslation('donationPage');
  const { t: commonT } = useTranslation('common');
  return (
    <Section className={s.first_section}>
      <Container>
        <Title isBlue className={s.title}>
          {donatePageT('donate.title')}
        </Title>
        <div className={s.box}>
          <p className={s.description}>{donatePageT('donate.description')}</p>
          <MainButton text={commonT('buttons.donate')} style='secondaryNavy' />
        </div>
        <Tabs type='donation' tabs={{ tabs }} />
      </Container>
    </Section>
  );
};
