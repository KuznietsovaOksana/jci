import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import InstLogo from 'public/icons/instagram.svg';
import FbLogo from 'public/icons/facebook.svg';

import { Logo } from '@/components/typography/Logo';
import { MainButton } from '@/components/buttons/MainButton';
import { Container } from '@/components/common/Container';
import { footerContactsInfo } from './footerContactsInfo';

import { nav } from '../Header';

import s from './Footer.module.css';

export const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server side until the component is mounted on the client side
  }

  return (
    <footer>
      {/* Мобілка та таблет*/}
      {!isDesktop && (
        <div className={s.footer_wrapper}>
          <Container>
            <div className={s.logo_btn}>
              <Logo isWhite className={s.logo} />
              <div className={s.btn_wrapper}>
                <MainButton text='Join us' style='primaryNavy' />
                <MainButton text='Donate' style='secondaryBlue' />
              </div>
            </div>
            <div className={s.footer_nav_wrapper}>
              <ul className={s.footer_nav}>
                {nav.map(({ name, path }, ind) => (
                  <li key={ind} className={`${s.footer_nav_item} `}>
                    <Link className={s.link} href={path}>
                      <p> {name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={s.footer_contacts}>
                {footerContactsInfo.map(item => (
                  <li key={item.id} className={s.footer_contacts_item}>
                    <Link className={s.item} href={item.href}>
                      {item.content}
                    </Link>
                  </li>
                ))}
                <li className={s.footer_contacts_item}>
                  <a className={s.logo_icon} href='#'>
                    <FbLogo className={s.fb_logo} />
                  </a>
                  <a className={s.logo_icon} href='#'>
                    <InstLogo className={s.inst_logo} />
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
      )}

      {/* Десктоп */}
      {isDesktop && (
        <div className={s.footer_wrapper}>
          <Container>
            <div className={s.desktop_wrapper}>
              <div className={s.desktop_logo_wrapper}>
                <Logo isWhite className={s.logo} />
              </div>
              <ul className={s.footer_nav}>
                {nav.map(({ name, path }, ind) => (
                  <li key={ind} className={`${s.footer_nav_item} `}>
                    <Link className={s.link} href={path}>
                      <p> {name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={s.footer_contacts}>
                {footerContactsInfo.map(item => (
                  <li key={item.id} className={s.footer_contacts_item}>
                    <Link className={s.item} href={item.href}>
                      {item.content}
                    </Link>
                  </li>
                ))}
                <li className={s.footer_contacts_item}>
                  <a className={s.logo_icon} href='#'>
                    <FbLogo className={s.fb_logo} />
                  </a>
                  <a className={s.logo_icon} href='#'>
                    <InstLogo className={s.inst_logo} />
                  </a>
                </li>
              </ul>
              <div className={s.btn_wrapper}>
                <MainButton text='Join us' style='primaryNavy' />
                <MainButton text='Donate' style='secondaryBlue' />
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Інфо-посилання */}
      <div className={s.footer_info}>
        <Container>
          <div className={s.info_wrapper}>
            <div className={s.info_item}>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
            <div className={s.info_item}>
              <p>&#169; JCI Ukraine. All rights reserved.</p>
              <p>Made by Beetroot Academy students</p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
