import { Container } from '../Container';
import { MainButton } from '../ui-kit/buttons/MainButton';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

import { nav } from '../Header';
import NavLink from '../NavLink';
import Logo from 'public/icons/logo-white.svg';
import FbLogo from 'public/icons/footer-fb-nrml.svg';
import InstLogo from 'public/icons/footer-inst-nrml.svg';
import css from './Footer.module.css';

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
    <footer className={css.footer}>
      {/* Мобілка */}
      {isMobile && (
        <div className={css.footer_wrapper}>
          <Container>
            <div className={css.logo_btn}>
              <Logo className={css.logo} />
              <div className={css.btn_wrapper}>
                <MainButton
                  className={css.footer_primary_btn}
                  type='button'
                  text='Join us'
                  paddings={119}
                  style='primary'
                />
                <MainButton
                  className={css.footer_secondary_btn}
                  type='button'
                  text='Donate'
                  paddings={113}
                  style='secondary'
                />
              </div>
            </div>

            <div className={css.footer_nav_wrapper}>
              <ul className={css.footer_nav}>
                {nav.map(({ name, path }, ind) => (
                  <li key={ind} className={`${css.footer_nav_item} `}>
                    <NavLink className={css.link} exact href={path}>
                      <p className={`${css.footer_nav_title}`}> {name}</p>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className={css.footer_contacts}>
                <li className={css.footer_contacts_item}>
                  <NavLink
                    className={css.footer_email}
                    exact
                    href={'mailto:ukraine@jci.cc'}
                  >
                    ukraine@jci.cc
                  </NavLink>
                </li>
                <li className={css.footer_contacts_item}>
                  <NavLink
                    className={css.footer_email}
                    exact
                    href={'mailto:+380994449834'}
                  >
                    +38 (099) 444-98-34
                  </NavLink>
                </li>
                <li className={css.footer_contacts_item}>
                  <FbLogo className={css.fb_logo} />
                  <InstLogo className={css.inst_logo} />
                </li>
              </ul>
            </div>
          </Container>
        </div>
      )}

      {/* Таблет */}
      {isTablet && (
        <div className={css.footer_wrapper}>
          <Container>
            <div className={css.logo_btn}>
              <Logo className={css.logo} />
              <div className={css.btn_wrapper}>
                <MainButton
                  className={css.footer_primary_btn}
                  type='button'
                  text='Join us'
                  paddings={100}
                  style='primary'
                />
                <MainButton
                  className={css.footer_secondary_btn}
                  type='button'
                  text='Donate'
                  paddings={101}
                  style='secondary'
                />
              </div>
            </div>
            <div className={css.footer_nav_wrapper}>
              <ul className={css.footer_nav}>
                {nav.map(({ name, path }, ind) => (
                  <li key={ind} className={`${css.footer_nav_item} `}>
                    <NavLink className={css.link} exact href={path}>
                      <p className={`${css.footer_nav_title}`}> {name}</p>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className={css.footer_contacts}>
                <li className={css.footer_contacts_item}>
                  <NavLink
                    className={css.footer_email}
                    exact
                    href={'mailto:ukraine@jci.cc'}
                  >
                    ukraine@jci.cc
                  </NavLink>
                </li>
                <li className={css.footer_contacts_item}>
                  <NavLink
                    className={css.footer_email}
                    exact
                    href={'mailto:+380994449834'}
                  >
                    +38 (099) 444-98-34
                  </NavLink>
                </li>
                <li className={css.footer_contacts_item}>
                  <FbLogo className={css.fb_logo} />
                  <InstLogo className={css.inst_logo} />
                </li>
              </ul>
            </div>
          </Container>
        </div>
      )}

      {/* Десктоп */}
      {isDesktop && (
        <div className={css.footer_wrapper}>
          <Container>
            <div className={css.desktop_wrapper}>
              <div className={css.desktop_logo_wrapper}>
                <Logo className={css.logo} />
              </div>

              <ul className={css.footer_nav}>
                {nav.map(({ name, path }, ind) => (
                  <li key={ind} className={`${css.footer_nav_item} `}>
                    <NavLink className={css.link} exact href={path}>
                      <p className={`${css.footer_nav_title}`}> {name}</p>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className={css.footer_contacts}>
                <li className={css.footer_contacts_item}>
                  <NavLink
                    className={css.footer_email}
                    exact
                    href={'mailto:ukraine@jci.cc'}
                  >
                    ukraine@jci.cc
                  </NavLink>
                </li>
                <li className={css.footer_contacts_item}>
                  <NavLink
                    className={css.footer_email}
                    exact
                    href={'mailto:+380994449834'}
                  >
                    +38 (099) 444-98-34
                  </NavLink>
                </li>
                <li className={css.footer_contacts_item}>
                  <FbLogo className={css.fb_logo} />
                  <InstLogo className={css.inst_logo} />
                </li>
              </ul>
              <div className={css.btn_wrapper}>
                <MainButton
                  className={css.footer_primary_btn}
                  type='button'
                  text='Join us'
                  paddings={100}
                  style='primary'
                />
                <MainButton
                  className={css.footer_secondary_btn}
                  type='button'
                  text='Donate'
                  paddings={101}
                  style='secondary'
                />
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Інфо-посилання */}
      <div className={css.footer_info}>
        <Container>
          {!isDesktop && (
            <div className={css.info_wrapper}>
              <div className={css.info_item}>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
              <div className={css.info_item}>
                <p>&#169; JCI Ukraine. All rights reserved.</p>
                <p>Made by Beetroot Academy students</p>
              </div>
            </div>
          )}
          {isDesktop && (
            <div className={css.info_wrapper}>
              <div className={css.desktop_info_item}>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
              <div className={css.desktop_info_item}>
                <p>&#169; JCI Ukraine. All rights reserved.</p>
              </div>
              <div className={css.desktop_info_item}>
                <p>Made by Beetroot Academy students</p>
              </div>
            </div>
          )}
        </Container>
      </div>
    </footer>
  );
};
