import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import IconMore from 'public/icons/button_more.svg';
import { IChangeWorldSection } from './sectionTypes';

import { useScreen } from '@/hooks/use_screen';

import s from './ChangeWorldSection.module.css';

export const ChangeWorldSection = () => {
  const { t } = useTranslation('whoWeArePage');
  const items = t('change_world_section', {
    returnObjects: true,
    defaultValue: '',
  }) as IChangeWorldSection;

  const [isMounted, setIsMounted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { isMobile, isTablet } = useScreen();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Section>
        <Container>
          <div className={s.block}>
            <div className={s.block_text}>
              <h2 className={s.title}>
                {items.title[0]}
                <span className={s.title_span}>{items.title[1]}</span>
                {items.title[2]}
              </h2>
              <ul
                className={
                  clicked
                    ? `${s.list} ${s.list_shown}`
                    : `${s.list} ${s.list_hidden}`
                }
              >
                <li className={s.item}>
                  <p className={s.text}>{items.text[0]}</p>
                </li>
                <li className={s.item}>
                  <p className={s.text}>{items.text[1]}</p>
                </li>
                <li className={s.item}>
                  <p className={s.text}>{items.text[2]}</p>
                </li>
                <li className={s.item}>
                  <p className={s.text}>
                    <span className={s.span}>{items.text[3]}</span>
                    {items.text[4]}
                  </p>
                </li>

                <li className={s.item}>
                  <p className={s.text}>
                    <span className={s.span}>{items.text[5]}</span>
                    {items.text[6]}
                  </p>
                </li>
                <li className={s.item}>
                  <p className={s.text}>{items.text[7]}</p>
                </li>
              </ul>
              <button
                type='button'
                onClick={() => setClicked(!clicked)}
                className={s.button}
              >
                {clicked ? items.button_less : items.button_more}
                <IconMore
                  class={
                    clicked
                      ? `${s.icon_more} ${s.rotate}`
                      : `${s.icon_more} ${s.rotate_back}`
                  }
                />
              </button>
            </div>
            <Image
              className={s.picture}
              src={'/images/about/twoFlags.png'}
              width={isMobile ? 288 : isTablet ? 552 : 552}
              height={isMobile ? 192 : isTablet ? 368 : 400}
              alt={items.alt}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Container>
      </Section>
    </>
  );
};
