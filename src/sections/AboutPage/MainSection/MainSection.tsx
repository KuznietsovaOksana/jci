import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { useLocalization } from '@/contexts/LocalizationContext';
import { IMainSection } from './sectionTypes';

import { useScreen } from '@/hooks/use_screen';
import { IMainPhotoProps } from './type';
import s from './MainSection.module.css';

export const MainSection = ({ photoMainBannerData }: IMainPhotoProps) => {
  const { isMobile, isTablet } = useScreen();
  const { locale } = useLocalization();
  const { t } = useTranslation('whoWeArePage');
  const items = t('main_section', {
    returnObjects: true,
    defaultValue: '',
  }) as IMainSection;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  const { alt_text_photo_en, alt_text_photo_uk, photo } =
    photoMainBannerData[0] || {};
  return (
    <>
      <Section className={s.first_section}>
        <Container>
          <h1 className={s.title}>
            {items.title}
            <span className={s.title_span}>{items.title_span}</span>
          </h1>
          <Image
            src={photo}
            alt={locale === 'uk' ? alt_text_photo_uk : alt_text_photo_en}
            className={s.picture}
            width={isMobile ? 288 : isTablet ? 552 : 1128}
            height={isMobile ? 180 : isTablet ? 270 : 520}
            style={{ objectFit: 'cover' }}
          />
        </Container>
      </Section>
    </>
  );
};
