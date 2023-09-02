import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { Section } from '@/components/sections/Section';
import { Container } from '@/components/common/Container';
import { useScreen } from '@/hooks/use_screen';

import { data } from './data';

import s from './TabsSection.module.css';

export const TabsSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  const [numberTab, setNumberTab] = useState(0);

  const onClickTab = (index: number) => setNumberTab(index);

  const { isMobile, isDesk } = useScreen();

  const { t } = useTranslation('projectPage');
  const tabsDesk: string[] = t('tabs.tabsDesk', {
    returnObjects: true,
    defaultValue: [],
  });
  const tabsTab: string[] = t('tabs.tabsTab', {
    returnObjects: true,
    defaultValue: [],
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Section>
      <Container>
        <ul className={s.tab_list}>
          {isDesk
            ? tabsDesk.map((el, ind) => (
                <li className={s.tab_item} key={ind}>
                  <button
                    className={
                      ind !== numberTab
                        ? `${s.tab_button} ${s.button_common} `
                        : `${s.tab_active} ${s.button_common} `
                    }
                    onClick={() => onClickTab(ind)}
                  >
                    {el}
                  </button>
                </li>
              ))
            : tabsTab.map((el, ind) => (
                <li key={ind}>
                  <button
                    className={
                      ind !== numberTab
                        ? `${s.tab_button} ${s.button_common} `
                        : `${s.tab_active} ${s.button_common} `
                    }
                    onClick={() => onClickTab(ind)}
                  >
                    {el}
                  </button>
                </li>
              ))}
        </ul>
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
      </Container>
    </Section>
  );
};
