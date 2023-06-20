import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { MainButton } from '../../components/ui-kit/buttons/MainButton/MainButton';
import HeroSlider from '../../components/ui-kit/sliders/HeroSlider/HeroSlider';
import Flag from 'public/icons/Icon.svg';

import { Section } from '../../components/Section';
import { Container } from '../../components/Container';

import { images } from './images';
import s from './HeroSection.module.css';

export const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server side until the component is mounted on the client side
  }

  return (
    <Section>
      {isMobile && (
        <Container>
          <div className={s.mobileVersion}>
            <h1 className={s.title}>
              JCI Ukraine
              <Flag className={s.flag} />
              <br />
              is a leading global network of
              <span className={s.accentTitle}> young leaders</span>
            </h1>
            <p className={s.description}>
              We are a non-profit organization within a global network of Junior
              Chamber International (JCI) and are currently focusing on
              mitigating the effects of the russian invasion countrywide.
            </p>
            <div className={s.cta}>
              <MainButton
                type='button'
                text='Join us'
                style='primary'
                paddings={112}
                onClick={() => console.log('Join us')}
              />
              <MainButton
                type='button'
                text='Donate'
                style='secondary'
                paddings={112}
                onClick={() => console.log('Donate')}
              />
            </div>
            <div className={s.sliderblock}>
              <HeroSlider images={images} />
            </div>
          </div>
        </Container>
      )}
      {isTablet && (
        <Container>
          <div className={s.tabletVersion}>
            <h1 className={s.title}>
              JCI Ukraine
              <Flag className={s.flag} />
              is a leading global network of young leaders
            </h1>
            <div className={s.infoblock}>
              <div className={s.textblock}>
                <p className={s.description}>
                  We are a non-profit organization within a global network of
                  Junior Chamber International (JCI) and are currently focusing
                  on mitigating the effects of the russian invasion countrywide.
                </p>
                <div className={s.cta}>
                  <MainButton
                    type='button'
                    text='Join us'
                    style='primary'
                    paddings={100}
                    onClick={() => console.log('Join us')}
                  />
                  <MainButton
                    type='button'
                    text='Donate'
                    style='secondary'
                    paddings={100}
                    onClick={() => console.log('Donate')}
                  />
                </div>
              </div>
              <div className={s.sliderblock}>
                <HeroSlider images={images} />
              </div>
            </div>
          </div>
        </Container>
      )}
      {isDesktop && (
        <Container>
          <div className={s.desktopVersion}>
            <div className={s.infoblock}>
              <h1 className={s.title}>
                JCI Ukraine
                <Flag className={s.flag} />
                <br />
                is a leading global network of
                <br />
                young leaders
              </h1>
              <p className={s.description}>
                We are a non-profit organization within a global network of
                Junior Chamber International (JCI) and are currently focusing on
                mitigating the effects of the russian invasion countrywide.
              </p>
              <div className={s.cta}>
                <MainButton
                  type='button'
                  text='Join us'
                  style='primary'
                  paddings={100}
                  onClick={() => console.log('Join us')}
                />
                <MainButton
                  type='button'
                  text='Donate'
                  style='secondary'
                  paddings={100}
                  onClick={() => console.log('Donate')}
                />
              </div>
            </div>
            <div className={s.sliderblock}>
              <HeroSlider images={images} />
            </div>
          </div>
        </Container>
      )}
    </Section>
  );
};
