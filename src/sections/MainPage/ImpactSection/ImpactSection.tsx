import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';

import impact from 'public/images/impact/impact_01.jpg';

import s from './ImpactSection.module.css';

export const ImpactSection = () => {
  const { t } = useTranslation('mainPage');
  return (
    <Section className={s.section}>
      <Container>
        <div className={s.box}>
          <Title className={s.title}>
            {t('impact.title')}
            <span className={s.blue}>{t('impact.span')}</span>
          </Title>
          <p className={s.description}>{t('impact.description')}</p>
        </div>
        <Image
          src={impact}
          alt={t('impact.alt')}
          className={s.photo}
          priority
        />
      </Container>
    </Section>
  );
};
