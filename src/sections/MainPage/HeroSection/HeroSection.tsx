import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { MainButton } from '@/components/ui-kit/buttons/MainButton';
import { HeroSlider } from '@/components/ui-kit/sliders/HeroSlider';
import Flag from 'public/icons/Icon.svg';

import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Title } from '@/components/Title';

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
                <MainButton
                  // type='button'
                  text='Join us'
                  style='primary'
                  // onClick={() => console.log('Join us')}
                />
                <MainButton
                  // type='button'
                  text='Donate'
                  style='secondary'
                  // onClick={() => console.log('Donate')}
                />
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
            <MainButton
              // type='button'
              text='Join us'
              style='primary'
              // onClick={() => console.log('Join us')}
            />
            <MainButton
              // type='button'
              text='Donate'
              style='secondary'
              // onClick={() => console.log('Donate')}
            />
          </div>
        </Container>
      )}
    </Section>
  );
};
