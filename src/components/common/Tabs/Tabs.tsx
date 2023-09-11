import { useEffect, useState, FC } from 'react';

import { useScreen } from '@/hooks/use_screen';
import { TabsCurrentProjectInfo } from '@/components/TabsCurrentProjectInfo';

import s from './Tabs.module.css';

interface ITAb {
  tabsDesk?: string[];
  tabsTab?: string[];
  tab?: string[];
}

interface ITabProps {
  type: 'project' | 'donation' | 'news';
  tabs: ITAb;
}

export const Tabs: FC<ITabProps> = ({ type, tabs }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [numberTab, setNumberTab] = useState(0);

  const onClickTab = (index: number) => setNumberTab(index);

  const { isDesk } = useScreen();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ul className={s[`tab_list_${type}`]}>
        {isDesk &&
          tabs.tabsDesk &&
          tabs.tabsDesk.map((el, ind) => (
            <li key={ind}>
              <button
                className={
                  ind !== numberTab
                    ? `${s.tab_button} ${s['button_common_' + type]} `
                    : `${s.tab_active} ${s['button_common_' + type]} `
                }
                onClick={() => onClickTab(ind)}
              >
                {el}
              </button>
            </li>
          ))}
        {!isDesk &&
          tabs.tabsTab &&
          tabs.tabsTab.map((el, ind) => (
            <li key={ind}>
              <button
                className={
                  ind !== numberTab
                    ? `${s.tab_button} ${s['button_common_' + type]} `
                    : `${s.tab_active} ${s['button_common_' + type]} `
                }
                onClick={() => onClickTab(ind)}
              >
                {el}
              </button>
            </li>
          ))}
        {/* for donation section */}
        {tabs.tab &&
          tabs.tab.map((el, ind) => (
            <li key={ind}>
              <button
                className={
                  ind !== numberTab
                    ? `${s.tab_button} ${s['button_common_' + type]} `
                    : `${s.tab_active} ${s['button_common_' + type]} `
                }
                onClick={() => onClickTab(ind)}
              >
                {el}
              </button>
            </li>
          ))}
        {/* for donation section */}
      </ul>
      {type === 'project' && <TabsCurrentProjectInfo numberTab={numberTab} />}
      {/* for donation section and news */}
      {type === 'donation' && <div> donation render</div>}
      {type === 'news' && <div> news render</div>}
      {/* for donation section and news */}
    </>
  );
};
