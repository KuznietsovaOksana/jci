import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'next-i18next';

import Flag from 'public/icons/flag.svg';

import { Title } from '@/components/typography/Title';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { HeroSlider } from '@/components/sliders/HeroSlider';
import { MainButton } from '@/components/buttons/MainButton';

import { router } from '@/utils/routes';
import { useLocalization } from '@/contexts/LocalizationContext';

import { IHeroProps } from './heroProps';
import s from './HeroSection.module.css';

// Треба ще доопрацювати, додати тайтл, опис (через це і не показуються потрібні стилі)

export const HeroSection = ({ heroData }: IHeroProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const { t } = useTranslation('common');
  const { locale } = useLocalization();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const defaultImagesUa = [
    { src: '/images/hero/hero_01d.jpg', alt: 'Укр' },
    { src: '/images/hero/hero_02d.jpg', alt: 'Укр' },
    { src: '/images/hero/hero_03d.jpg', alt: 'Укр' },
  ];

  const defaultImagesEn = [
    { src: '/images/hero/hero_01d.jpg', alt: 'En' },
    { src: '/images/hero/hero_02d.jpg', alt: 'En' },
    { src: '/images/hero/hero_03d.jpg', alt: 'En' },
  ];

  const imagesUa = heroData
    ? [
        {
          src: heroData[0]?.photo1 || defaultImagesUa[0].src,
          alt: heroData[0]?.alt_text_1_uk || defaultImagesUa[0].alt,
        },
        {
          src: heroData[0]?.photo2 || defaultImagesUa[1].src,
          alt: heroData[0]?.alt_text_2_uk || defaultImagesUa[1].alt,
        },
        {
          src: heroData[0]?.photo3 || defaultImagesUa[2].src,
          alt: heroData[0]?.alt_text_3_uk || defaultImagesUa[2].alt,
        },
      ]
    : defaultImagesUa;

  const imagesEn = heroData
    ? [
        {
          src: heroData[0]?.photo1 || defaultImagesEn[0].src,
          alt: heroData[0]?.alt_text_1_en || defaultImagesEn[0].alt,
        },
        {
          src: heroData[0]?.photo2 || defaultImagesEn[1].src,
          alt: heroData[0]?.alt_text_2_en || defaultImagesEn[1].alt,
        },
        {
          src: heroData[0]?.photo3 || defaultImagesEn[2].src,
          alt: heroData[0]?.alt_text_3_en || defaultImagesEn[2].alt,
        },
      ]
    : defaultImagesEn;

  return (
    <Section className={s.first_section}>
      <Container>
        {isDesktop ? (
          <div className={s.desktopVersion}>
            <div>
              <Title className={s.title} tag='h1'>
                {locale === 'uk'
                  ? heroData?.[0]?.title_1_uk
                  : heroData?.[0]?.title_1_en}
                <Flag
                  className={s.flag}
                  aria-label={t('flag.aria')}
                  style={{
                    display:
                      (locale === 'uk' && heroData?.[0]?.show_flag_uk) ||
                      (locale === 'en' && heroData?.[0]?.show_flag_en)
                        ? 'inline'
                        : 'none',
                  }}
                />
                {((locale === 'uk' && !heroData?.[0]?.show_flag_uk) ||
                  (locale === 'en' && !heroData?.[0]?.show_flag_en)) &&
                  ' '}
                {locale === 'uk'
                  ? heroData?.[0]?.title_2_uk
                  : heroData?.[0]?.title_2_en}{' '}
                <span className={s.accentTitle}>
                  {locale === 'uk'
                    ? heroData?.[0]?.title_3_uk
                    : heroData?.[0]?.title_3_en}
                </span>
              </Title>
              <p className={s.description}>
                {locale === 'uk'
                  ? heroData?.[0]?.subtitle_uk
                  : heroData?.[0]?.subtitle_en}
              </p>
              <div className={s.cta}>
                <MainButton
                  href={router.JOINUS}
                  text={t('buttons.join')}
                  style='primaryNavy'
                />
                <MainButton text={t('buttons.donate')} style='secondaryNavy' />
              </div>
            </div>
            <div className={s.sliderblock}>
              <HeroSlider images={locale === 'uk' ? imagesUa : imagesEn} />
            </div>
          </div>
        ) : (
          <>
            <Title className={s.title} tag='h1'>
              {locale === 'uk'
                ? heroData?.[0]?.title_1_uk
                : heroData?.[0]?.title_1_en}
              <Flag className={s.flag} />
              {locale === 'uk'
                ? heroData?.[0]?.title_2_uk
                : heroData?.[0]?.title_2_en}{' '}
              <span className={s.accentTitle}>
                {locale === 'uk'
                  ? heroData?.[0]?.title_3_uk
                  : heroData?.[0]?.title_3_en}
              </span>
            </Title>
            <div className={s.sliderblock}>
              <HeroSlider images={locale === 'uk' ? imagesUa : imagesEn} />
            </div>
            <p className={s.description}>
              {locale === 'uk'
                ? heroData?.[0]?.subtitle_uk
                : heroData?.[0]?.subtitle_en}
            </p>
            <div className={s.cta}>
              <MainButton
                href={router.JOINUS}
                text={t('buttons.join')}
                style='primaryNavy'
              />
              <MainButton text={t('buttons.donate')} style='secondaryNavy' />
            </div>
          </>
        )}
      </Container>
    </Section>
  );
};
