import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';

import imgD from 'public/images/president/president_01d.jpg';

import { IPresidentProps } from './PresidentProps';
import { useLocalization } from '@/contexts/LocalizationContext';

import s from './OurPresident.module.css';

const data = {
  title: 'Julia Kuznetsova',
  position: 'JCI Ukraine President',
  description:
    'As National President, Kuznetsova is responsible for overseeing JCI`s operations and initiatives in Ukraine, and leading the organisation`s efforts to engage and empower young people in the country. Her role also involves representing JCI Ukraine at the international level and collaborating with other JCI chapters around the world.',
};

export const OurPresident = ({ presidentData = [] }: IPresidentProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const { locale } = useLocalization();
  const showNewData = presidentData.length > 0 ? true : false;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server side until the component is mounted on the client side
  }

  return (
    <Section className={s.section}>
      <Container>
        {!isDesktop && (
          <>
            <h2 className={s.title}>
              {showNewData
                ? locale === 'uk'
                  ? presidentData[0].title_uk
                  : presidentData[0].title_en
                : data.title}
            </h2>
            <p className={s.position}>
              {showNewData
                ? locale === 'uk'
                  ? presidentData[0].subtitle_uk
                  : presidentData[0].subtitle_uk
                : data.position}
            </p>
            <div className={s.photoBlock}>
              <Image
                src={showNewData ? presidentData[0].photo_president : imgD}
                // src={imgD}
                alt={
                  showNewData
                    ? locale === 'uk'
                      ? presidentData[0].alt_text_president_uk
                      : presidentData[0].alt_text_president_en
                    : 'President photo'
                }
                priority
                className={s.photo}
                width='288'
                height='207'
              />
            </div>
            <p className={s.description}>
              {showNewData
                ? locale === 'uk'
                  ? presidentData[0].text_uk
                  : presidentData[0].text_en
                : data.description}
            </p>
          </>
        )}

        {isDesktop && (
          <>
            <div className={s.presidentSection}>
              <div className={s.photoBlock}>
                <Image
                  src={showNewData ? presidentData[0].photo_president : imgD}
                  // src={imgD}
                  alt={
                    showNewData
                      ? locale === 'uk'
                        ? presidentData[0].alt_text_president_uk
                        : presidentData[0].alt_text_president_en
                      : 'President photo'
                  }
                  priority
                  className={s.photo}
                  width='552'
                  height='508'
                />
              </div>
              <div className={s.textBlock}>
                <h2 className={s.title}>
                  {showNewData
                    ? locale === 'uk'
                      ? presidentData[0].title_uk
                      : presidentData[0].title_en
                    : data.title}
                </h2>
                <p className={s.position}>
                  {showNewData
                    ? locale === 'uk'
                      ? presidentData[0].subtitle_uk
                      : presidentData[0].subtitle_uk
                    : data.position}
                </p>
                <p className={s.description}>
                  {showNewData
                    ? locale === 'uk'
                      ? presidentData[0].text_uk
                      : presidentData[0].text_en
                    : data.description}
                </p>
              </div>
            </div>
          </>
        )}
      </Container>
    </Section>
  );
};
