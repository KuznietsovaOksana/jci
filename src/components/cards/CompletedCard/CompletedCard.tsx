import { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { useScreen } from '@/hooks/use_screen';

import s from './CompletedCard.module.css';
import { IconButton } from '@/components/buttons/IconButton';

type CardCompletedProjectProps = {
  card: {
    picture: {
      src: string;
      alt: string;
    };

    title: string;
    text: string;
    chamber: string;
  };
};

export const CompletedCard: FC<CardCompletedProjectProps> = ({
  card: { picture, text, title, chamber },
}) => {
  const { isMobile, isTablet } = useScreen();
  const { t } = useTranslation('common');

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
            style={{ objectFit: 'cover', filter: 'contrast(50%)' }}
            loading='lazy'
          />
          <p className={s.text_picture}>
            <span className={s.span_picture}>{t('card.completed')}</span>
          </p>
        </div>
        <div className={s.text_block}>
          <div>
            <h3 className={s.title}>{title}</h3>
            <p className={s.chamber}>{chamber}</p>
            <p className={s.text}>{text}</p>
          </div>
          <div>
            <IconButton text={t('buttons.moreDetails')} />
          </div>
        </div>
      </div>
    </>
  );
};
