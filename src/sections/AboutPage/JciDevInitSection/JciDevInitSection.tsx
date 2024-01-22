import { useScreen } from '@/hooks/use_screen';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { JciDevelopmentCard } from '@/components/cards/JciDevelopmentCard';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';

import { cards } from './cards';
import { JciDevInitData } from './sectionTypes';
import s from './JciDevInitSection.module.css';

export const JciDevInitSection = () => {
  const { t, i18n } = useTranslation('whoWeArePage');
  const items = t('jci_dev_init', {
    returnObjects: true,
    defaultValue: '',
  }) as JciDevInitData;

  const [isMounted, setIsMounted] = useState(false);
  const { isMobile } = useScreen();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  const isEnglish = i18n.language === 'en';
  let titleElement1, titleElement2;

  if (isEnglish) {
    titleElement1 = <Title tag='h2'>{items.title[0]}</Title>;
    titleElement2 = (
      <Title tag='h2' isBlue>
        {items.title[1]}
      </Title>
    );
  } else {
    titleElement1 = (
      <Title tag='h2' isBlue>
        {items.title[0]}
      </Title>
    );
    titleElement2 = <Title tag='h2'>{items.title[1]}</Title>;
  }

  return (
      <Section>
        <Container>
          <div className={s.title}>
            {titleElement1}
            {titleElement2}
          </div>
          <p className={s.text}>{items.text}</p>
          {!isMobile && (
            <>
              <div className={s.cardsBlock}>
                {cards.map(({ title, text, style }, index) => (
                  <JciDevelopmentCard
                    key={index}
                    title={title}
                    text={text}
                    style={style}
                  />
                ))}
              </div>
            </>
          )}
        </Container>
        {isMobile && (
          <>
            <div className={s.cardsBlock}>
              {cards.map(({ title, text, style }, index) => (
                <JciDevelopmentCard
                  key={index}
                  title={title}
                  text={text}
                  style={style}
                />
              ))}
            </div>
          </>
        )}
      </Section>
  );
};
