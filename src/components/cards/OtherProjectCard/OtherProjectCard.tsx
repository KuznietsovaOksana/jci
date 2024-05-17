import { FC } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

// import ArrowRight from 'public/icons/arrow-right.svg';
import { useScreen } from '@/hooks/use_screen';
import { MainButton } from '@/components/buttons/MainButton';

import s from './OtherProjectCard.module.css';
import { ICompletedProjects } from '@/sections/ProjectsPage/lProjectsProps';
import { useLocalization } from '@/contexts/LocalizationContext';

// type CardOtherProjectProps = {
//   card: {
//     picture: {
//       src: string;
//       alt: string;
//     };

//     title: string;
//     text: string;
//     subtitle: string;
//   };
// };

export const OtherProjectCard: FC<ICompletedProjects> = ({ card }) => {
  const { isMobile, isTablet } = useScreen();
  const { locale } = useLocalization();
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
            src={card.multimedia[0].photo}
            width={width}
            height={height}
            alt={
              locale === 'uk'
                ? card.multimedia[0].alt_text_uk
                : card.multimedia[0].alt_text_en
            }
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className={s.text_block}>
          <div>
            <h3 className={s.title}>
              {locale === 'uk' ? card.name_uk : card.name_en}
            </h3>
            <p className={s.subtitle}>
              {locale === 'uk' ? card.founder_uk : card.founder_en}
            </p>
            <p className={s.text}>
              {locale === 'uk'
                ? card.project_detail_uk
                : card.project_detail_en}
            </p>
          </div>
          <MediaQuery minWidth={768} maxWidth={1439.9}>
            <p className={s.tablet_goal}> OUR GOAL</p>
            <p className={s.tablet_amount}> Amount</p>
          </MediaQuery>
          <MainButton
            className={s.tablet_button}
            text={t('buttons.donate')}
            style='secondaryNavy'
          />
        </div>
      </div>
    </>
  );
};
