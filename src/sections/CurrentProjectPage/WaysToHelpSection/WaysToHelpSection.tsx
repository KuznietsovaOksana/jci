import { useEffect, useState } from 'react';
import Image from 'next/image';

import { MainButton } from '@/components/ui-kit/buttons/MainButton';
import { Section } from '@/components/Section/Section';
import { Container } from '@/components/Container';
import { useScreen } from '@/hooks/use_screen';
import { Title } from '@/components/Title';

import { images } from './images';

import s from './WaysToHelpSection.module.css';

export const WaysToHelpSection = () => {
  const { isMobile, isTablet, isDesk } = useScreen();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const screenWidth = window.screen.width;
    if (isMobile) {
      setHeight(234);
      if (screenWidth < 480) {
        setWidth(screenWidth - 32);
      } else setWidth(448);
    } else if (isTablet) {
      setHeight(333);
      setWidth(552);
    } else if (isDesk) {
      setHeight(360);
      setWidth(552);
    }
  }, [isDesk, isMobile, isTablet]);

  return (
    <Section className={s.section_ways}>
      <Container>
        <Title className={s.title} tag='h2'>
          <span className={s.title_span}> Ways to help: </span>
          <span className={s.accentTitle}> Donate </span>
          or
          <span className={s.accentTitle}> Volunteer</span>
        </Title>
        <p className={s.exclamation}>Join people who form our community!</p>
        <div className={s.desk_block_one}>
          <div className={s.desk_join}>
            <h3 className={s.title_card}>
              Join us and make a difference by dedicating your time and
              experience
            </h3>
            <MainButton text='Join us' style='primary' />
          </div>
          <Image
            className={`${s.picture} ${s.picture_one}`}
            src={images[0].src}
            width={width}
            height={height}
            alt={images[0].alt}
            style={{ objectFit: 'cover' }}
            loading='lazy'
          />
        </div>
        <div className={s.desk_block_two}>
          <div className={s.desk_donate}>
            <h3 className={s.title_card}>
              Or become one of those who support us financially by making a
              donation
            </h3>
            <MainButton
              text='Donate'
              style='secondary'
              className={s.button_donate}
            />
          </div>
          <Image
            className={s.picture}
            src={images[1].src}
            width={width}
            height={height}
            alt={images[1].alt}
            style={{ objectFit: 'cover' }}
            loading='lazy'
          />
        </div>
      </Container>
    </Section>
  );
};
