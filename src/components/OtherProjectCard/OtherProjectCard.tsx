import { FC } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

// import ArrowRight from 'public/icons/arrow-right.svg';
import { useScreen } from '@/hooks/use_screen';

import s from './OtherProjectCard.module.css';
import { MainButton } from '../ui-kit/buttons/MainButton';

type CardOtherProjectProps = {
  card: {
    picture: {
      src: string;
      alt: string;
    };

    title: string;
    text: string;
    subtitle: string;
  };
};

export const OtherProjectCard: FC<CardOtherProjectProps> = ({
  card: { picture, text, title, subtitle },
}) => {
  const { isMobile, isTablet } = useScreen();

  let width: number;
  if (isMobile) {
    width = 251;
  } else if (isTablet) {
    width = 551;
  } else {
    width = 264;
  }

  let height: number;
  if (isMobile) {
    height = 234;
  } else height = 310;

  return (
    <>
      <div className={s.card}>
        <div className={s.block_picture}>
          <Image
            className={s.picture}
            src={picture.src}
            width={width}
            height={height}
            alt={picture.alt}
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className={s.text_block}>
          <div>
            <h3 className={s.title}>{title}</h3>
            <p className={s.subtitle}>{subtitle}</p>
            <p className={s.text}>{text}</p>
          </div>
          <MediaQuery minWidth={768} maxWidth={1439.9}>
            <p className={s.tablet_goal}> OUR GOAL</p>
            <p className={s.tablet_amount}> Amount</p>
          </MediaQuery>
          <MainButton
            className={s.tablet_button}
            text='Donate'
            style='secondaryNavy'
          />
        </div>
      </div>
    </>
  );
};
