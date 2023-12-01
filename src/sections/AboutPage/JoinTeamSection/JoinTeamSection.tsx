import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { IJoinTeamSection } from './sectionTypes';

import { useScreen } from '@/hooks/use_screen';

import s from './/JoinTeamSection.module.css';

export const JoinTeamSection = () => {
  const { t } = useTranslation('whoWeArePage');
  const items = t('join_teem_section', {
    returnObjects: true,
    defaultValue: '',
  }) as IJoinTeamSection;

  const [isMounted, setIsMounted] = useState(false);
  const { isMobile, isTablet } = useScreen();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Section>
        <Container>
          <div className={s.block}>
            <div className={s.block_one}>
              <div>
                <h2 className={s.title}>
                  {items.title_1[0]}
                  <span className={s.title_span}>{items.title_1[1]}</span>
                  {items.title_1[2]}
                </h2>
                <ul className={s.list}>
                  {items.text_1.map((el, ind) => (
                    <li key={ind} className={s.item}>
                      <p className={s.text}>{el}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                className={s.picture}
                src={'/images/about/manAndWomen.png'}
                width={isMobile ? 288 : isTablet ? 552 : 550}
                height={isMobile ? 184 : isTablet ? 332 : 400}
                alt={items.alt_1}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={s.block_two}>
              <div className={s.block_two__text}>
                <h2 className={s.title}>
                  <span className={s.title_span}>{items.title_2[0]}</span>
                  {items.title_2[1]}
                </h2>
                <ul className={s.list}>
                  {items.text_2.map((el, ind) => (
                    <li key={ind} className={s.item}>
                      <p className={s.text}>{el}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                className={s.picture}
                src={'/images/about/peopleSmile.png'}
                width={isMobile ? 288 : isTablet ? 552 : 550}
                height={isMobile ? 184 : isTablet ? 332 : 400}
                alt={items.alt_2}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
