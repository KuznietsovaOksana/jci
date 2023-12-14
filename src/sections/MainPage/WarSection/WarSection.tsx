import { useTranslation } from 'next-i18next';

import { Title } from '@/components/typography/Title';
import { Section } from '@/components/sections/Section';
import { WarCard } from '@/components/cards/WarCard';
import { Container } from '@/components/common/Container';
import { IconButton } from '@/components/buttons/IconButton';

import { router } from '@/utils/routes';
import { warData } from './data';

import s from './WarSection.module.css';

export const WarSection = () => {
  const { t: mainPageT } = useTranslation('mainPage');
  const { t: commonT } = useTranslation('common');
  return (
    <Section className={s.war_section}>
      <Container>
        <Title className={s.war_title}>
          <span className={s.war_title__span}>{mainPageT('war.span')}</span>
          {mainPageT('war.title')}
        </Title>
        <ul className={s.war_list}>
          {warData.map(({ icon, key }, index) => (
            <li key={index}>
              <WarCard icon={icon} text={mainPageT(`warCards.${key}`)} />
            </li>
          ))}
        </ul>
        <IconButton text={commonT('buttons.readMore')} href={router.ABOUT} />
      </Container>
    </Section>
  );
};
