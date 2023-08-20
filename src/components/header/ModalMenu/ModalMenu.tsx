import { FC } from 'react';
import dynamic from 'next/dynamic';

import CloseMenu from 'public/icons/remove.svg';
import Arrow from 'public/icons/chevron_Right.svg';

import { ILayout } from '@/layout/Layout';
import { nav } from '@/layout/Header';
import NavLink from '../../NavLink';
import { Container } from '@/components/common/Container';
import { LanguageSwitcher } from '../LanguageSwitcher';

import s from './ModalMenu.module.css';
import { MainButton } from '@/components/buttons/MainButton';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export const ModalMenu: FC<ILayout> = ({ setShowModal }) => {
  return (
    <div className={s.modal}>
      <div className={s.top_border}>
        <Container>
          <div className={s.top_modal}>
            <CloseMenu
              className={s.close}
              onClick={() => setShowModal(false)}
            />
            <MediaQuery maxWidth={767}>
              {/* <button className={`${s.button} ${s.button_media}`}>
                Join us
              </button> */}
              <MainButton text='Join us' className={s.button} />
            </MediaQuery>
            <LanguageSwitcher />
          </div>
        </Container>
      </div>
      <nav>
        <ul>
          {nav.map(({ number, name, path }, ind) => (
            <li
              key={ind}
              className={`${s.item} ${s.item_plus}  ${s.item_minus} `}
            >
              <NavLink className={s.link} exact href={path}>
                <Container>
                  <div className={s.link_content}>
                    <div className={s.link_content_one}>
                      <span className={s.numbers}>{number}</span>
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
