import { FC, useState } from 'react';
import dynamic from 'next/dynamic';

import CloseMenu from 'public/icons/remove.svg';
import En from 'public/icons/language_switch_Eng.svg';
import Ua from 'public/icons/language_switch_Ua.svg';
import Arrow from 'public/icons/chevron_Right.svg';

import { ILayout } from '../Layout';
import { nav } from '../Header';
import NavLink from '../NavLink';

import s from './ModalMenu.module.css';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export const ModalMenu: FC<ILayout> = ({ setShowModal }) => {
  const [language, setLanguage] = useState(true);

  return (
    <div className={s.container_modal_tablet}>
      <div className={s.modal}>
        <div className={s.top_modal}>
          <CloseMenu className={s.close} onClick={() => setShowModal(false)} />
          <MediaQuery maxWidth={767}>
            <button className={`${s.button} ${s.button_media}`}>Join us</button>
          </MediaQuery>
          <div
            className={s.language}
            onClick={() => setLanguage(prevState => !prevState)}
          >
            {language ? <En /> : <Ua />}
          </div>
        </div>
        <nav>
          <ul>
            {nav.map(({ number, name, path }, ind) => (
              <li
                key={ind}
                className={`${s.item} ${s.item_plus}  ${s.item_minus} `}
              >
                <span className={s.numbers}>{number}</span>
                <NavLink className={s.link} exact href={path}>
                  <p> {name}</p>
                  <Arrow className={s.chevron} />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
