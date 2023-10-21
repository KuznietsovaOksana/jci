import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

import Menu from 'public/icons/menu.svg';

import NavLink from '@/components/NavLink';
import { Logo } from '@/components/typography/Logo';
import { Container } from '@/components/common/Container';
import { MainButton } from '@/components/buttons/MainButton';
import { LanguageSwitcher } from '@/components/header/LanguageSwitcher';

import { ILayout } from '../Layout';
import { ItemProps } from '../Layout/Layout.props';

import { useRouter } from 'next/router';

import s from './Header.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export const Header: FC<ILayout> = ({ setShowModal }) => {
  const { t: navigationT } = useTranslation('navigation');
  const { t: commonT } = useTranslation('common');
  const items = navigationT('nav', {
    returnObjects: true,
    defaultValue: '',
  }) as ItemProps[];

  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header className={currentPath !== '/404' ? s.header : s.header_error}>
      <Container>
        <div className={s.header_block}>
          <MediaQuery maxWidth={1439}>
            <button
              type='button'
              className={s.open}
              aria-label={commonT('open') as string}
            >
              <Menu className={s.menu} onClick={() => setShowModal(true)} />
            </button>
          </MediaQuery>

          <Logo className={s.link} />

          <MediaQuery minWidth={1440}>
            <nav className={s.nav}>
              <ul className={s.nav_list}>
                {items?.map(({ name, url }, ind) => (
                  <li key={ind}>
                    <NavLink exact className={s.nav_link} href={url}>
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageSwitcher />
          </MediaQuery>

          <MediaQuery minWidth={768}>
            <div className={s.button_media}>
              <MainButton text={commonT('buttons.join')} />
            </div>
          </MediaQuery>
        </div>
      </Container>
    </header>
  );
};
