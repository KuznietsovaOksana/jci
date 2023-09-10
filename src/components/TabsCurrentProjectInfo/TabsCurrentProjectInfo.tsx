import Image from 'next/image';

import { FC } from 'react';
import { useScreen } from '@/hooks/use_screen';
import s from './tabsCurrentProjectInfo.module.css';
import data from '@/data/tabsForCurrentPage.json';

interface ITabInfoProps {
  numberTab: number;
}

export const TabsCurrentProjectInfo: FC<ITabInfoProps> = ({ numberTab }) => {
  const { isMobile } = useScreen();
  return (
    <>
      {numberTab === 0 && <p className={s.text}>{data.overview}</p>}
      {numberTab === 1 && <p className={s.text}>{data.details}</p>}
      {numberTab === 2 && <p className={s.text}>{data.impact}</p>}
      {numberTab === 3 && (
        <ul className={s.partners_list}>
          {data.partners.map((item, ind) => (
            <li className={s.partners_item} key={ind}>
              <Image
                src={item.url}
                width={isMobile ? item.wM : item.wD}
                height={isMobile ? item.hM : item.hD}
                alt={`partner logo ${ind}`}
                priority
              />
            </li>
          ))}
        </ul>
      )}
      {numberTab === 4 && (
        <p className={s.text}>
          {data.contact.name}{' '}
          <span className={s.text_span}>{data.contact.email}</span>
        </p>
      )}
    </>
  );
};
