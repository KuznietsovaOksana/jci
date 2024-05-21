import Image from 'next/image';

import { FC } from 'react';
import { useScreen } from '@/hooks/use_screen';

import s from './TabsCurrentProjectInfo.module.css';
import { useLocalization } from '@/contexts/LocalizationContext';
import { IProjectItem } from '@/sections/ProjectsPage/lProjectsProps';
// import data from '@/data/tabsForCurrentPage.json';

interface ITabInfoProps {
  numberTab: number;
  data: IProjectItem;
}

export const TabsCurrentProjectInfo: FC<ITabInfoProps> = ({
  numberTab,
  data,
}) => {
  const { locale } = useLocalization();
  const { isMobile } = useScreen();
  return (
    <>
      {numberTab === 0 && (
        <p className={s.text}>
          {locale === 'en' ? data.overview_en : data.overview_uk}
        </p>
      )}
      {numberTab === 1 && (
        <p className={s.text}>
          {locale === 'en' ? data.project_detail_en : data.project_detail_uk}
        </p>
      )}
      {numberTab === 2 && (
        <p className={s.text}>
          {locale === 'en' ? data.impact_en : data.founder_uk}
        </p>
      )}
      {numberTab === 3 && (
        <ul className={s.partners_list}>
          {data.partners.map((item, ind) => (
            <li className={s.partners_item} key={ind}>
              <Image
                src={item.partner_photo}
                width={isMobile ? '96' : '149'}
                height={isMobile ? '56' : '88'}
                alt={
                  locale === 'en'
                    ? item.partner_photo_alt_text_en
                    : item.partner_photo_alt_text_uk
                }
                priority
              />
            </li>
          ))}
        </ul>
      )}
      {numberTab === 4 && (
        <p className={s.text}>
          {locale === 'en' ? data.contact_en : data.contact_uk}
          {/* <span className={s.text_span}>
            {locale === 'en' ? data.contact_en : data.contact_uk}
          </span> */}
        </p>
      )}
    </>
  );
};
