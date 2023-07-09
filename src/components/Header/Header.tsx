import { FC, useState } from 'react';
import dynamic from 'next/dynamic';

import Menu from 'public/icons/menu.svg';
import Logo from 'public/icons/logo_JCI_Ukraine.svg';
import En from 'public/icons/language_switch_Eng.svg';
import Ua from 'public/icons/language_switch_Ua.svg';

import NavLink from '../NavLink';
import { ILayout } from '../Layout';
import { Container } from '../Container';

import css from './Header.module.css';

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
  const [language, setLanguage] = useState(true);

  return (
    <Container>
      <header className={css.header}>
        <MediaQuery maxWidth={1439}>
          <Menu className={css.menu} onClick={() => setShowModal(true)} />
        </MediaQuery>
        <a href='/'>
          <Logo className={css.logo} />
        </a>
        <MediaQuery minWidth={1440}>
          <nav className={css.nav}>
            <ul className={css.nav_list}>
              {nav.map(({ name, path }, ind) => (
                <li key={ind}>
                  <NavLink exact className={css.nav_link} href={path}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={css.language}
            onClick={() => setLanguage(prevState => !prevState)}
          >
            {language ? <En /> : <Ua />}
          </div>
        </MediaQuery>

        <MediaQuery minWidth={768}>
          <button
            // onClick={() => alert('HI!')}
            className={`${css.button} ${css.button_media}`}
          >
            Join us
          </button>
        </MediaQuery>
      </header>
    </Container>
  );
};
