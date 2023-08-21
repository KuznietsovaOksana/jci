import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Flag from 'public/icons/flag.svg';

import { Title } from '@/components/typography/Title';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { HeroSlider } from '@/components/sliders/HeroSlider';
import { MainButton } from '@/components/buttons/MainButton';

import { images } from './images';

import s from './HeroSection.module.css';

const data = {
  text: 'We are a non-profit organization within a global network of Junior Chamber International (JCI) and are currently focusing on mitigating the effects of the russian invasion countrywide',
};

export const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server side until the component is mounted on the client side
  }

  return (
    <Section>
      {isDesktop ? (
        <Container>
          <div className={s.desktopVersion}>
            <div>
              <Title className={s.title} tag='h1'>
                JCI Ukraine <Flag className={s.flag} /> is a global network of
                <span className={s.accentTitle}> young leaders</span>
              </Title>
              <p className={s.description}>{data.text}</p>
              <div className={s.cta}>
                <MainButton text='Join us' style='primaryNavy' />
                <MainButton text='Donate' style='secondaryNavy' />
              </div>
            </div>
            <div className={s.sliderblock}>
              <HeroSlider images={images} />
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <Title className={s.title} tag='h1'>
            JCI Ukraine <Flag className={s.flag} /> is a global network of
            <span className={s.accentTitle}> young leaders</span>
          </Title>
          <div className={s.sliderblock}>
            <HeroSlider images={images} />
          </div>
          <p className={s.description}>{data.text}</p>
          <div className={s.cta}>
            <MainButton text='Join us' style='primaryNavy' />
            <MainButton text='Donate' style='secondaryNavy' />
          </div>
        </Container>
      )}
    </Section>
  );
};
