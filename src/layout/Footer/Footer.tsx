import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import InstLogo from 'public/icons/instagram.svg';
import FbLogo from 'public/icons/facebook.svg';

import { Logo } from '@/components/typography/Logo';
import { MainButton } from '@/components/buttons/MainButton';
import { Container } from '@/components/common/Container';

import { router } from '@/utils/routes';

import { ItemProps } from '../Layout/Layout.props';

import { footerContactsInfo } from './footerContactsInfo';
import s from './Footer.module.css';

export const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const { t: navigationT } = useTranslation('navigation');
  const { t: commonT } = useTranslation('common');
  const items = navigationT('nav', {
    returnObjects: true,
    defaultValue: '',
  }) as ItemProps[];

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
                <MainButton
                  text={commonT('buttons.join')}
                  style='primaryNavy'
                />
                <MainButton
                  text={commonT('buttons.donate')}
                  style='secondaryBlue'
                />
              </div>
            </div>
            <div className={s.footer_nav_wrapper}>
              <nav>
                <ul className={s.footer_nav}>
                  {items.map(({ name, url }, ind) => (
                    <li key={ind} className={`${s.footer_nav_item} `}>
                      <Link className={s.link} href={url}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className={s.footer_contacts}>
                {footerContactsInfo.map(item => (
                  <li key={item.id} className={s.footer_contacts_item}>
                    <Link className={s.item} href={item.href}>
                      {item.content}
                    </Link>
                  </li>
                ))}
                <li className={s.footer_contacts_item}>
                  <a
                    className={s.logo_icon}
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                  >
                    <FbLogo className={s.fb_logo} />
                  </a>
                  <a
                    className={s.logo_icon}
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                  >
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
              <nav className={s.footer_nav}>
                <ul>
                  {items.map(({ name, url }, ind) => (
                    <li key={ind} className={`${s.footer_nav_item} `}>
                      <Link className={s.link} href={url}>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className={s.footer_contacts}>
                {footerContactsInfo.map(item => (
                  <li key={item.id} className={s.footer_contacts_item}>
                    <Link className={s.item} href={item.href}>
                      {item.content}
                    </Link>
                  </li>
                ))}
                <li className={s.footer_contacts_item}>
                  <a
                    className={s.logo_icon}
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                  >
                    <FbLogo className={s.fb_logo} />
                  </a>
                  <a
                    className={s.logo_icon}
                    href='#'
                    target='_blank'
                    rel='noopener noreferrer nofollow'
                  >
                    <InstLogo className={s.inst_logo} />
                  </a>
                </li>
              </ul>
              <div className={s.btn_wrapper}>
                <MainButton
                  text={commonT('buttons.join')}
                  style='primaryNavy'
                />
                <MainButton
                  text={commonT('buttons.donate')}
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
          <div className={s.info_wrapper}>
            <div className={s.info_item}>
              <Link href={router.POLICY}>{commonT('footer.policy')}</Link>
              <Link href={router.TERMS}>{commonT('footer.terms')}</Link>
            </div>
            <div className={s.info_item}>
              <p>&#169;{commonT('footer.rights')}</p>
              <p>{commonT('footer.team')}</p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
