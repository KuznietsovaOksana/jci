import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';

import Menu from 'public/icons/menu.svg';
import Logo from 'public/icons/logo_JCI_Ukraine.svg';

import NavLink from '@/components/NavLink';
import { ILayout } from '../Layout';
import { Container } from '@/components/common/Container';
import { LanguageSwitcher } from '@/components/header/LanguageSwitcher';

import s from './Header.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export const nav = [
  { number: '01', name: 'Who we are', path: '/' },
  { number: '02', name: 'Projects', path: '/projects' },
  { number: '03', name: 'Donation', path: '/donation' },
  { number: '04', name: 'News', path: '/news' },
  { number: '05', name: 'Contacts', path: 'contacts' },
];

export const Header: FC<ILayout> = ({ setShowModal }) => {
  const { t } = useTranslation(['common']);

  return (
    <Container>
      <header className={s.header}>
        <MediaQuery maxWidth={1439}>
          <Menu className={s.menu} onClick={() => setShowModal(true)} />
        </MediaQuery>
        <a href='/' className={s.link}>
          <Logo className={s.logo} aria-label={t('logo.aria')} />
        </a>
        <MediaQuery minWidth={1440}>
          <nav className={s.nav}>
            <ul className={s.nav_list}>
              {nav.map(({ name, path }, ind) => (
                <li key={ind}>
                  <NavLink exact className={s.nav_link} href={path}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher />
        </MediaQuery>

        <MediaQuery minWidth={768}>
          <button className={`${s.button} ${s.button_media}`}>Join us</button>
        </MediaQuery>
      </header>
    </Container>
  );
};
