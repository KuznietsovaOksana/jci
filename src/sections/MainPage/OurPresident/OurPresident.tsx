import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';

import imgD from 'public/images/president/president_01d.jpg';

import s from './OurPresident.module.css';

const data = {
  title: 'Julia Kuznetsova',
  position: 'JCI Ukraine President',
  description:
    'As National President, Kuznetsova is responsible for overseeing JCI`s operations and initiatives in Ukraine, and leading the organisation`s efforts to engage and empower young people in the country. Her role also involves representing JCI Ukraine at the international level and collaborating with other JCI chapters around the world.',
};

export const OurPresident = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1440 });

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
            <h2 className={s.title}>{data.title}</h2>
            <p className={s.position}>{data.position}</p>
            <div className={s.photoBlock}>
              <Image
                src={imgD}
                alt='President photo'
                priority
                className={s.photo}
                width='288'
                height='207'
              />
            </div>
            <p className={s.description}>{data.description}</p>
          </>
        )}

        {isDesktop && (
          <>
            <div className={s.presidentSection}>
              <div className={s.photoBlock}>
                <Image
                  src={imgD}
                  alt='President photo'
                  priority
                  className={s.photo}
                  width='552'
                  height='508'
                />
              </div>
              <div className={s.textBlock}>
                <h2 className={s.title}>{data.title}</h2>
                <p className={s.position}>{data.position}</p>
                <p className={s.description}>{data.description}</p>
              </div>
            </div>
          </>
        )}
      </Container>
    </Section>
  );
};
