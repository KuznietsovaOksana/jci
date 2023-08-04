import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import Logo from 'public/icons/logo-white.svg';
import InstLogo from 'public/icons/instagram.svg';
import FbLogo from 'public/icons/facebook.svg';

import { MainButton } from '../../components/ui-kit/buttons/MainButton';
import { Container } from '../../components/Container';
import { nav } from '../Header';
import NavLink from '../../components/NavLink';

import s from './Footer.module.css';
import { footerContactsInfo } from './footerContactsInfo';

export const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server side until the component is mounted on the client side
  }

  return (
    <footer className={s.footer}>
      {/* Мобілка */}
      {isMobile && (
        <div className={s.footer_wrapper}>
          <Container>
            <div className={s.logo_btn}>
              <Logo className={s.logo} />
              <div className={s.btn_wrapper}>
                <MainButton
                  className={s.footer_primary_btn}
                  text='Join us'
                  style='primaryNavy'
                />
                <MainButton
                  className={s.footer_secondary_btn}
                  text='Donate'
                  style='secondaryBlue'
                />
              </div>
            </div>

            <div className={s.footer_nav_wrapper}>
              <ul className={s.footer_nav}>
                {nav.map(({ name, path }, ind) => (
                  <li key={ind} className={`${s.footer_nav_item} `}>
                    <NavLink className={s.link} exact href={path}>
                      <p className={`${s.footer_nav_title}`}> {name}</p>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className={s.footer_contacts}>
                {footerContactsInfo.map(item => (
                  <li key={item.id} className={s.footer_contacts_item}>
                    <NavLink className={s.item} exact href={item.href}>
                      {item.content}
                    </NavLink>
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

      {/* Таблет */}
      {isTablet && (
        <div className={s.footer_wrapper}>
          <Container>
            <div className={s.logo_btn}>
              <Logo className={s.logo} />
              <div className={s.btn_wrapper}>
                <MainButton
                  className={s.footer_primary_btn}
                  text='Join us'
                  style='primaryNavy'
                />
                <MainButton
                  className={s.footer_secondary_btn}
                  text='Donate'
                  style='secondaryBlue'
                />
              </div>
            </div>
            <div className={s.footer_nav_wrapper}>
              <ul className={s.footer_nav}>
                {nav.map(({ name, path }, ind) => (
                  <li key={ind} className={`${s.footer_nav_item} `}>
                    <NavLink className={s.link} exact href={path}>
                      <p className={`${s.footer_nav_title}`}> {name}</p>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className={s.footer_contacts}>
                {footerContactsInfo.map(item => (
                  <li key={item.id} className={s.footer_contacts_item}>
                    <NavLink className={s.item} exact href={item.href}>
                      {item.content}
                    </NavLink>
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
                <Logo className={s.logo} />
              </div>

              <ul className={s.footer_nav}>
                {nav.map(({ name, path }, ind) => (
                  <li key={ind} className={`${s.footer_nav_item} `}>
                    <NavLink className={s.link} exact href={path}>
                      <p className={`${s.footer_nav_title}`}> {name}</p>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className={s.footer_contacts}>
                {footerContactsInfo.map(item => (
                  <li key={item.id} className={s.footer_contacts_item}>
                    <NavLink className={s.item} exact href={item.href}>
                      {item.content}
                    </NavLink>
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
                <MainButton
                  className={s.footer_primary_btn}
                  text='Join us'
                  style='primaryNavy'
                />
                <MainButton
                  className={s.footer_secondary_btn}
                  text='Donate'
                  style='secondaryBlue'
                />
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Інфо-посилання */}
      <div className={s.footer_info}>
        <Container>
          {!isDesktop && (
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
          )}
          {isDesktop && (
            <div className={s.info_wrapper}>
              <div className={s.desktop_info_item}>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
              <div className={s.desktop_info_item}>
                <p>&#169; JCI Ukraine. All rights reserved.</p>
              </div>
              <div className={s.desktop_info_item}>
                <p>Made by Beetroot Academy students</p>
              </div>
            </div>
          )}
        </Container>
      </div>
    </footer>
  );
};
