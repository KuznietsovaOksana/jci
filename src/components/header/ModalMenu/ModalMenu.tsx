import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

import CloseMenu from 'public/icons/remove.svg';
import Arrow from 'public/icons/chevron_Right.svg';

import { ILayout } from '@/layout/Layout';
import { ItemProps } from '@/layout/Layout/Layout.props';
import NavLink from '@/components/NavLink';
import { Container } from '@/components/common/Container';
import { MainButton } from '@/components/buttons/MainButton';
import { LanguageSwitcher } from '../LanguageSwitcher';

import s from './ModalMenu.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export const ModalMenu: FC<ILayout> = ({ setShowModal }) => {
  const { t: navigationT } = useTranslation('navigation');
  const { t: commonT } = useTranslation('common');
  const items = navigationT('nav', {
    returnObjects: true,
    defaultValue: '',
  }) as ItemProps[];

  return (
    <div className={s.modal}>
      <div className={s.top_border}>
        <Container>
          <div className={s.top_modal}>
            <button
              type='button'
              className={s.close}
              aria-label={commonT('close') as string}
            >
              <CloseMenu
                onClick={() => setShowModal(false)}
                aria-label={commonT('close') as string}
              />
            </button>
            <MediaQuery maxWidth={767}>
              <MainButton text={commonT('buttons.join')} className={s.button} />
            </MediaQuery>
            <LanguageSwitcher />
          </div>
        </Container>
      </div>
      <nav>
        <ul>
          {items.map(({ name, url }, ind) => (
            <li
              key={ind}
              className={`${s.item} ${s.item_plus}  ${s.item_minus} `}
            >
              <NavLink className={s.link} exact href={url}>
                <Container>
                  <div className={s.link_content}>
                    <div className={s.link_content_one}>
                      <span className={s.numbers}>0{ind + 1}</span>
                      <p className={s.name}> {name}</p>
                    </div>
                    <Arrow className={s.chevron} />
                  </div>
                </Container>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
