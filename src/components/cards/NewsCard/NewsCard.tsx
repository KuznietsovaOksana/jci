import React from 'react';

import s from './NewsCard.module.css';
import Link from 'next/link';
import { ILatestMewsItem } from '@/sections/NewsPage/LatestNewsSection/latestNewsProps';
import { useLocalization } from '@/contexts/LocalizationContext';
import { formatDate } from '@/services/dateFormat';

interface NewsCardProps {
  card: ILatestMewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ card }) => {
  const { locale } = useLocalization();
  return (
    <>
      <Link href='#' className={s.card}>
        <div className={s.picture}>
          <picture>
            <source
              srcSet={card.multimedia[0].photo}
              media='(min-width: 1440px)'
            />
            <source
              srcSet={card.multimedia[0].photo}
              media='(min-width: 768px)'
            />
            <img
              src={card.multimedia[0].photo}
              alt={
                locale === 'en'
                  ? card.multimedia[0].alt_text_en
                  : card.multimedia[0].alt_text_uk
              }
            />
          </picture>
        </div>
        <div className={s.textblock}>
          <div className={s.data}>
            <div className={s.datePrimary}>
              <p className={s.date}>{formatDate(card.start_date)}</p>
              <span className={s.decor}>|</span>
              <p className={s.location}>
                {locale === 'uk' ? card.location_uk : card.location_en}
              </p>
            </div>
            <span className={s.decorCircle}>&#8226;</span>
            <p className={s.level}>{card.event_category}</p>
          </div>
          <div className={s.info}>
            <h3 className={s.title}>
              {locale === 'uk' ? card.title_uk : card.title_en}
            </h3>
            <p className={s.text}>
              {locale === 'uk' ? card.overview_uk : card.overview_en}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
