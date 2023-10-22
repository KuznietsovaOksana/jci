import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';
import { Title } from '@/components/typography/Title';
import { Section } from '@/components/sections/Section';

// import { partnersImages } from './partnersImages';
import { useScreen } from '@/hooks/use_screen';
import { useLocalization } from '@/contexts/LocalizationContext';

import { IPartnersProps } from './PartnersProps';

import s from './PartnersSection.module.css';

export const PartnersSection = ({ partnersData }: IPartnersProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const { isMobile, isTablet } = useScreen();

  const withImage = isMobile ? 98 : isTablet ? 122 : 150;
  const heightImage = isMobile ? 92 : isTablet ? 84 : 112;

  const { t } = useTranslation('mainPage');

  const { locale } = useLocalization();
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
          {partnersData.map(el => (
            <li className={s.partners_item} key={el.id}>
              <div className={s.image_wrapper}>
                <Image
                  className={s.partner_img}
                  src={el.logo}
                  width={withImage}
                  height={heightImage}
                  alt={locale ? el.alt_text_partner_uk : el.alt_text_partner_en}
                  loading='lazy'
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};
