import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';
import { Title } from '@/components/typography/Title';
import { Section } from '@/components/sections/Section';

import { partnersImages } from './partnersImages';
import s from './PartnersSection.module.css';

export const PartnersSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const { t } = useTranslation('mainPage');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server side until the component is mounted on the client side
  }

  return (
    <Section className={s.partners_section}>
      <Container>
        <Title className={s.partners_text}>
          {t('partners.title')}
          <span className={s.blue_text}>{t('partners.span')}</span>
        </Title>
        <ul className={s.partners_list}>
          {isMobile &&
            partnersImages.map(imgData => (
              <li className={s.partners_item} key={imgData.id}>
                <div className={s.image_wrapper}>
                  <Image
                    className={s.partner_img}
                    src={imgData.srcM}
                    width={98}
                    height={92}
                    alt={'partner logo'}
                    loading='lazy'
                  />
                </div>
              </li>
            ))}
          {isTablet &&
            partnersImages.map(imgData => (
              <li className={s.partners_item} key={imgData.id}>
                <Image
                  className={s.partner_img}
                  src={imgData.srcT}
                  width={122}
                  height={84}
                  alt={'partner logo'}
                  loading='lazy'
                />
              </li>
            ))}
          {isDesktop &&
            partnersImages.map(imgData => (
              <li className={s.partners_item} key={imgData.id}>
                <Image
                  className={s.partner_img}
                  src={imgData.srcD}
                  width={150}
                  height={112}
                  alt={'partner logo'}
                  loading='lazy'
                />
              </li>
            ))}
        </ul>
      </Container>
    </Section>
  );
};
