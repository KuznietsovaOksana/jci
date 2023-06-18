import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './Hero_section.module.css';
import { MainButton } from '../ui-kit/buttons/MainButton/MainButton';
import HeroSlider from '../ui-kit/sliders/HeroSlider/HeroSlider';
import { images } from './images';

import Flag from '../../../public/icons/Icon.svg';

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
    <div className={css.hero}>
      {isMobile && (
        <div className={css.mobileVersion}>
          <h1 className={css.title}>
            JCI Ukraine
            <Flag className={css.flag} />
            <br />
            is a leading global
            <span className={css.accentTitle}>
              <br />
              network of young
              <br />
              leaders
            </span>
          </h1>

          <p className={css.description}>
            We are a non-profit organization within a global network of Junior
            Chamber International (JCI) and are currently focusing on mitigating
            the effects of the russian invasion countrywide.
          </p>

          <div className={css.cta}>
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

          <div className={css.sliderblock}>
            <HeroSlider images={images} />
          </div>
        </div>
      )}

      {isTablet && (
        <div className={css.tabletVersion}>
          <h1 className={css.title}>
            JCI Ukraine
            <Flag className={css.flag} />
            is a leading
            <br />
            global network of young
            <br />
            leaders
          </h1>

          <div className={css.infoblock}>
            <div className={css.textblock}>
              <p className={css.description}>
                We are a non-profit organization within a global network of
                Junior Chamber International (JCI) and are currently focusing on
                mitigating the effects of the russian invasion countrywide.
              </p>
              <div className={css.cta}>
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

            <div className={css.sliderblock}>
              <HeroSlider images={images} />
            </div>
          </div>
        </div>
      )}

      {isDesktop && (
        <div className={css.desktopVersion}>
          <div className={css.infoblock}>
            <h1 className={css.title}>
              JCI Ukraine
              <Flag className={css.flag} />
              <br />
              is a leading global
              <br />
              network of
              <br />
              young leaders
            </h1>
            <p className={css.description}>
              We are a non-profit organization within a global network of Junior
              Chamber International (JCI) and are currently focusing on
              mitigating the effects of the russian invasion countrywide.
            </p>
            <div className={css.cta}>
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
          <div className={css.sliderblock}>
            <HeroSlider images={images} />
          </div>
        </div>
      )}
    </div>
  );
};
