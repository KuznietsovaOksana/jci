import Link from 'next/link';

import InstLogo from 'public/icons/instagram.svg';
import FbLogo from 'public/icons/facebook.svg';

import s from './ContactsInfoSection.module.css';
import { Title } from '@/components/typography/Title';

export const ContactsInfoSection = () => {
  return (
    <>
      <div className={s.contactBlock}>
        <Title className={s.block_title}>
          We are
          <span className={s.block_title_span}> here </span>
          for you
        </Title>

        <ul className={s.contacts_list}>
          <li className={s.list_item}>
            <p className={s.item_title}>Email</p>
            <Link className={s.item} href='mailto:ukraine@jci.cc'>
              ukraine@jci.cc
            </Link>
          </li>

          <li className={s.list_item}>
            <p className={s.item_title}>Phone</p>
            <Link className={s.item} href='tel:+380994449834'>
              +38 (099) 444-98-34
            </Link>
          </li>

          <li className={s.list_item}>
            <p className={s.item_title}>Our Social Media</p>
            <div className={s.logos_list}>
              <a
                className={s.logo_icon}
                href=''
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <FbLogo className={s.fb_logo} />
              </a>
              <a
                className={s.logo_icon}
                href='https://www.instagram.com/jciukraine_official/'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                <InstLogo className={s.inst_logo} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
