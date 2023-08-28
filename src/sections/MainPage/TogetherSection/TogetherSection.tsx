import { useTranslation } from 'next-i18next';

import { Container } from '@/components/common/Container';
import { Section } from '@/components/sections/Section';
import { Title } from '@/components/typography/Title';

import { togetherData } from './data';

import s from './TogetherSection.module.css';

export const TogetherSection = () => {
  const { t } = useTranslation('mainPage');
  return (
    <Section className={s.together_section}>
      <Container>
        <Title className={s.together_title}>{t('together.title')}</Title>
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
      </Container>
    </Section>
  );
};
