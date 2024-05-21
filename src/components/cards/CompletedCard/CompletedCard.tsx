import { FC } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { useScreen } from '@/hooks/use_screen';

import s from './CompletedCard.module.css';
import { IconButton } from '@/components/buttons/IconButton';
import { ICompletedProjects } from '@/sections/ProjectsPage/lProjectsProps';
import { useLocalization } from '@/contexts/LocalizationContext';

// type CardCompletedProjectProps = {
//   card: {
//     picture: {
//       src: string;
//       alt: string;
//     };

//     title: string;
//     text: string;
//     chamber: string;
//   };
// };

export const CompletedCard: FC<ICompletedProjects> = ({ card }) => {
  const { isMobile, isTablet } = useScreen();
  const { t } = useTranslation('common');
  const { locale } = useLocalization();
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
            src={card.multimedia[0].photo}
            width={width}
            height={height}
            alt={
              locale === 'uk'
                ? card.multimedia[0].alt_text_uk
                : card.multimedia[0].alt_text_en
            }
            style={{ objectFit: 'cover', filter: 'contrast(50%)' }}
            loading='lazy'
          />
          <p className={s.text_picture}>
            <span className={s.span_picture}>{t('card.completed')}</span>
          </p>
        </div>
        <div className={s.text_block}>
          <div>
            <h3 className={s.title}>
              {locale === 'uk' ? card.name_uk : card.name_en}
            </h3>
            <p className={s.chamber}>
              {locale === 'uk' ? card.founder_uk : card.founder_en}
            </p>
            <p className={s.text}>
              {locale === 'uk'
                ? card.project_detail_uk
                : card.project_detail_en}
            </p>
          </div>
          <div>
            <IconButton
              text={t('buttons.moreDetails')}
              href={`/projects/${card.id}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};
