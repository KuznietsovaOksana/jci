import { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import css from './Header.module.css';

import Menu from '../../../public/icons/menu.svg';
import Logo from '../../../public/icons/logo_JCI_Ukraine.svg';
import En from '../../../public/icons/language_switch_Eng.svg';
import Ua from '../../../public/icons/language_switch_Ua.svg';
import NavLink from '../NavLink';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

const nav = [
  { name: 'Who we are', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Donation', path: '/donation' },
  { name: 'News', path: '/news' },
  { name: 'Contacts', path: 'contacts' },
];

const Header: FC = () => {
  const [language, setLanguage] = useState(true);

  return (
    <header className={css.header}>
      <MediaQuery maxWidth={1439}>
        <Menu className={css.menu} />
      </MediaQuery>
      <Logo className={css.logo} />
      <MediaQuery minWidth={1440}>
        <>
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
        </>
      </MediaQuery>

      <MediaQuery minWidth={768}>
        <button className={`${css.button} ${css.button_media}`}>Join us</button>
      </MediaQuery>
    </header>
  );
};

export default Header;
