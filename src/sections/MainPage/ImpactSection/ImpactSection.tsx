import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';

import impact from 'public/images/impact/impact_01.jpg';
import { useLocalization } from '@/contexts/LocalizationContext';
import { IMediaProps } from './mediaProps';

import s from './ImpactSection.module.css';

export const ImpactSection = ({ mediaData }: IMediaProps) => {
  const { t } = useTranslation('mainPage');
  const { locale } = useLocalization();
  const { alt_text_photo_uk, alt_text_photo_en, photo } = mediaData[0] || {};

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
          src={photo ?? impact}
          width={552}
          height={368}
          alt={
            locale === 'uk'
              ? alt_text_photo_uk ?? 'Міжнародна команда JCI'
              : alt_text_photo_en ?? 'JCI international team'
          }
          className={s.photo}
          priority
        />
      </Container>
    </Section>
  );
};
