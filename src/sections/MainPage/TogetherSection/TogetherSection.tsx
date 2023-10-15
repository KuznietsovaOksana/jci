import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';

import { IAchievementsProps } from './achievementsProps';

import { useLocalization } from '@/contexts/LocalizationContext';
import { togetherData } from './data';

import s from './TogetherSection.module.css';

export const TogetherSection = ({
  achievementsData = [],
}: IAchievementsProps) => {
  const { t } = useTranslation('mainPage');

  const { locale } = useLocalization();

  const showNewData = achievementsData.length > 0 ? true : false;

  const arrayKeys = ['support', 'helped', 'partner'];

  return (
    <Section className={s.together_section}>
      <Container>
        <Title className={s.together_title}>{t('together.title')}</Title>
        {showNewData ? (
          <ul className={s.together_list}>
            <li className={s.together_item} key={0}>
              <h3 className={s.together_item_title}>
                {locale === 'uk'
                  ? achievementsData[0].support_uk
                  : achievementsData[0].support_en}
              </h3>
              <p className={s.together_item_text}>
                {t(`togetherCards.${arrayKeys[0]}`)}
              </p>
            </li>
            <li className={s.together_item} key={1}>
              <h3 className={s.together_item_title}>
                {locale === 'uk'
                  ? achievementsData[0].helped_uk
                  : achievementsData[0].helped_en}
              </h3>
              <p className={s.together_item_text}>
                {t(`togetherCards.${arrayKeys[1]}`)}
              </p>
            </li>
            <li className={s.together_item} key={2}>
              <h3 className={s.together_item_title}>
                {locale === 'uk'
                  ? achievementsData[0].partner_uk
                  : achievementsData[0].partner_en}
              </h3>
              <p className={s.together_item_text}>
                {t(`togetherCards.${arrayKeys[2]}`)}
              </p>
            </li>
          </ul>
        ) : (
          <ul className={s.together_list}>
            {togetherData.map(({ title, key }, index) => (
              <li className={s.together_item} key={index}>
                <h3 className={s.together_item_title}>{title}</h3>
                <p className={s.together_item_text}>
                  {t(`togetherCards.${key}`)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Section>
  );
};
