import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import InstLogo from 'public/icons/instagram.svg';
import FbLogo from 'public/icons/facebook.svg';

import s from './ContactsInfoSection.module.css';
import { Title } from '@/components/typography/Title';
import { ContactsInfo } from './ContactsInfoProps';

export const ContactsInfoSection = () => {
  const { t } = useTranslation('contactsInfo');
  const items = t('contacts', {
    returnObjects: true,
    defaultValue: '',
  }) as ContactsInfo;

  return (
    <>
      <div className={s.contactBlock}>
        <Title className={s.block_title}>
          {items.title1}
          <span className={s.block_title_span}>{items.title2}</span>
          {items.title3}
        </Title>

        <ul className={s.contacts_list}>
          {items &&
            items.info.map((el, id) => (
              <li key={id} className={s.list_item}>
                <p className={s.item_title}>{el.contactType}</p>
                <Link className={s.item} href={el.href}>
                  {el.content}
                </Link>
              </li>
            ))}

          <li className={s.list_item}>
            <p className={s.item_title}>{items.socials}</p>
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
