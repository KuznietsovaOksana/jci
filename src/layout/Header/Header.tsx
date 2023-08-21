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

export interface ItemProps {
  url: string;
  name: string;
}

export const Header: FC<ILayout> = ({ setShowModal }) => {
  const { t } = useTranslation('header');
  const items = t('nav', {
    returnObjects: true,
    defaultValue: '',
  }) as ItemProps[];
  return (
    <Container>
      <header className={s.header}>
        <MediaQuery maxWidth={1439}>
          <Menu className={s.menu} onClick={() => setShowModal(true)} />
        </MediaQuery>

        <Logo className={s.link} />

        <MediaQuery minWidth={1440}>
          <nav className={s.nav}>
            <ul className={s.nav_list}>
              {items.map(({ name, url }, ind) => (
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
            <MainButton text='Join us' />
          </div>
        </MediaQuery>
      </header>
    </Container>
  );
};
