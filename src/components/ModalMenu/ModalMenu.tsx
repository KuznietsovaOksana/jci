import { FC, useState } from 'react';
import css from './ModalMenu.module.css';
import { ILayout } from './../Layout';
import CloseMenu from '../../../public/icons/remove.svg';
import En from '../../../public/icons/language_switch_Eng.svg';
import Ua from '../../../public/icons/language_switch_Ua.svg';
import Arrow from '../../../public/icons/chevron_Right.svg';
import { nav } from '../Header/Header';
import NavLink from '../NavLink';
import dynamic from 'next/dynamic';
const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export const ModalMenu: FC<ILayout> = ({ setShowModal }) => {
  const [language, setLanguage] = useState(true);
  return (
    <div className={css.modal}>
      <div className={css.top_modal}>
        <CloseMenu className={css.close} onClick={() => setShowModal(false)} />
        <MediaQuery maxWidth={767}>
          <button className={`${css.button} ${css.button_media}`}>
            Join us
          </button>
        </MediaQuery>
        <div
          className={css.language}
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
              className={`${css.item} ${css.item_plus}  ${css.item_minus} `}
            >
              <span className={css.numbers}>{number}</span>
              <NavLink className={css.link} exact href={path}>
                <p> {name}</p>
                <Arrow className={css.chevron} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
