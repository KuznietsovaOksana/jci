import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { MainButton } from '@/components/buttons/MainButton';
import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { useScreen } from '@/hooks/use_screen';
import { Title } from '@/components/typography/Title';

import { images } from './images';

import s from './WaysToHelpSection.module.css';

export const WaysToHelpSection = () => {
  const { isMobile, isTablet, isDesk } = useScreen();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const { t: projectPageT } = useTranslation('projectPage');
  const { t: commonT } = useTranslation('common');

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
          <span className={s.title_span}>
            {projectPageT('ways.titleStart')}
          </span>
          <span className={s.accentTitle}>
            {projectPageT('ways.spanStart')}
          </span>
          {projectPageT('ways.titleEnd')}
          <span className={s.accentTitle}>{projectPageT('ways.spanEnd')}</span>
        </Title>
        <p className={s.exclamation}>{projectPageT('ways.description')}</p>
        <div className={s.desk_block_one}>
          <div className={s.desk_join}>
            <h3 className={s.title_card}>{projectPageT('ways.textFirst')}</h3>
            <MainButton text={commonT('buttons.join')} style='primaryNavy' />
          </div>
          <Image
            className={`${s.picture} ${s.picture_one}`}
            src={images[0].src}
            width={width}
            height={height}
            alt={images[0].alt}
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className={s.desk_block_two}>
          <div className={s.desk_donate}>
            <h3 className={s.title_card}>{projectPageT('ways.textSecond')}</h3>
            <MainButton text={commonT('buttons.donate')} style='primaryBlue' />
          </div>
          <Image
            className={s.picture}
            src={images[1].src}
            width={width}
            height={height}
            alt={images[1].alt}
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </Container>
    </Section>
  );
};
