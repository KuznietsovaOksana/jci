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

export const HeroSection = ({ heroData }: IHeroProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const { t } = useTranslation('common');
  const { locale } = useLocalization();

  const imagesUa = [
    {
      src: heroData[0].photo1,
      alt: heroData[0].alt_text_1_uk,
    },
    {
      src: heroData[0].photo2,
      alt: heroData[0].alt_text_2_uk,
    },
    {
      src: heroData[0].photo3,
      alt: heroData[0].alt_text_3_uk,
    },
  ];

  const imagesEn = [
    {
      src: heroData[0].photo1,
      alt: heroData[0].alt_text_1_en,
    },
    {
      src: heroData[0].photo2,
      alt: heroData[0].alt_text_2_en,
    },
    {
      src: heroData[0].photo3,
      alt: heroData[0].alt_text_3_en,
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server side until the component is mounted on the client side
  }

  return (
    <Section className={s.first_section}>
      {isDesktop ? (
        <Container>
          <div className={s.desktopVersion}>
            <div>
              <Title className={s.title} tag='h1'>
                {locale === 'uk'
                  ? heroData[0].title_1_uk
                  : heroData[0].title_1_en}
                <Flag className={s.flag} />
                {locale === 'uk'
                  ? heroData[0].title_2_uk
                  : heroData[0].title_2_en}{' '}
                <span className={s.accentTitle}>
                  {locale === 'uk'
                    ? heroData[0].title_3_uk
                    : heroData[0].title_3_en}
                </span>
              </Title>
              <p className={s.description}>
                {locale === 'uk'
                  ? heroData[0].subtitle_uk
                  : heroData[0].subtitle_en}
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
        </Container>
      ) : (
        <Container>
          <Title className={s.title} tag='h1'>
            {locale === 'uk' ? heroData[0].title_1_uk : heroData[0].title_1_en}
            <Flag className={s.flag} />
            {locale === 'uk'
              ? heroData[0].title_2_uk
              : heroData[0].title_2_en}{' '}
            <span className={s.accentTitle}>
              {locale === 'uk'
                ? heroData[0].title_3_uk
                : heroData[0].title_3_en}
            </span>
          </Title>
          <div className={s.sliderblock}>
            <HeroSlider images={locale === 'uk' ? imagesUa : imagesEn} />
          </div>
          <p className={s.description}>
            {locale === 'uk'
              ? heroData[0].subtitle_uk
              : heroData[0].subtitle_en}
          </p>
          <div className={s.cta}>
            <MainButton
              href={router.JOINUS}
              text={t('buttons.join')}
              style='primaryNavy'
            />
            <MainButton text={t('buttons.donate')} style='secondaryNavy' />
          </div>
        </Container>
      )}
    </Section>
  );
};
