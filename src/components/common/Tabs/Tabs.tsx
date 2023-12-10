import { useEffect, useState, FC } from 'react';

import { useScreen } from '@/hooks/use_screen';

import { TabsCurrentProjectInfo } from '@/components/TabsCurrentProjectInfo';
import { TabsDonationInfo } from '@/components/TabsDonationtInfo';

import s from './Tabs.module.css';
import { IMemberCardItem } from '@/types/typesApiProps';

interface ITAb {
  tabsDesk?: string[];
  tabsTab?: string[];
  tabs?: string[];
}

interface ITabProps {
  type: 'project' | 'donation' | 'news' | 'team';
  tabs: ITAb;
  onClickTabTeam?: (index: number) => void;
}

export const Tabs: FC<ITabProps> = ({ type, tabs, onClickTabTeam }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [numberTab, setNumberTab] = useState(0);

  const onClickTab = (index: number) => {
    setNumberTab(index);
    if (type === 'team' && onClickTabTeam) {
      onClickTabTeam(index);
    }
  };

  const { isDesk } = useScreen();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ul className={`${s.tab_list} ${s['tab_list_' + type]}`}>
        {isDesk &&
          tabs.tabsDesk &&
          tabs.tabsDesk.map((el, ind) => (
            <li key={ind}>
              <button
                className={
                  ind !== numberTab
                    ? `${s.tab_button} ${s['button_common_' + type]} ${
                        s.button_common
                      }`
                    : `${s.tab_active} ${s['button_common_' + type]} ${
                        s.button_common
                      }`
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
                    ? `${s.tab_button} ${s['button_common_' + type]} ${
                        s.button_common
                      } `
                    : `${s.tab_active} ${s['button_common_' + type]} ${
                        s.button_common
                      }`
                }
                onClick={() => onClickTab(ind)}
              >
                {el}
              </button>
            </li>
          ))}
        {/* for donation section */}
        {tabs.tabs &&
          tabs.tabs.map((el, ind) => (
            <li key={ind}>
              <button
                className={
                  ind !== numberTab
                    ? `${s.tab_button} ${s['button_common_' + type]} ${
                        s.button_common
                      }`
                    : `${s.tab_active} ${s['button_common_' + type]} ${
                        s.button_common
                      }`
                }
                onClick={() => onClickTab(ind)}
              >
                {el}
              </button>
            </li>
          ))}
      </ul>
      {type === 'project' && <TabsCurrentProjectInfo numberTab={numberTab} />}
      {type === 'donation' && <TabsDonationInfo numberTab={numberTab} />}

      {/* for  news */}
      {type === 'news' && <div> news render</div>}
    </>
  );
};
