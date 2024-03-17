import { FC } from 'react';
import { INews } from '@/sections/CurrentNewsPage/CurrentNewsSection/currentNewsProps';
import s from './TabsNewsInfo.module.css';
import { useLocalization } from '@/contexts/LocalizationContext';

interface ITabInfoProps {
  numberTab: number;
  data: INews;
}

export const TabsNewsInfo: FC<ITabInfoProps> = ({ numberTab, data }) => {
  const { locale } = useLocalization();
  return (
    <>
      {numberTab === 0 && (
        <p className={s.text}>
          {locale === 'en' ? data.overview_en : data.overview_uk}
        </p>
      )}
      {numberTab === 1 && (
        <p className={s.text}>
          {locale === 'en' ? data.agenda_en : data.agenda_uk}
        </p>
      )}
      {numberTab === 2 && <p className={s.text}>{data.partners}</p>}
      {numberTab === 3 && (
        <p className={s.text}>
          {locale === 'en'
            ? data.contact_information_en
            : data.contact_information_uk}
        </p>
      )}
    </>
  );
};
