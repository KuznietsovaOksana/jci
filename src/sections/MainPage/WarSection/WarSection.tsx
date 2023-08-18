import { Title } from '@/components/typography/Title';
import { Section } from '@/components/sections/Section';
import { WarCard } from '@/components/cards/WarCard';
import { Container } from '@/components/common/Container';
import { IconButton } from '@/components/buttons/IconButton';

import { warData } from './data';

import s from './WarSection.module.css';

export const WarSection = () => {
  return (
    <Section className={s.war_section}>
      <Container>
        <Title className={s.war_title}>
          <span className={s.war_title__span}>War </span>
          in Ukraine
        </Title>
        <ul className={s.war_list}>
          {warData.map(({ icon, text }, index) => (
            <li key={index}>
              <WarCard icon={icon} text={text} />
            </li>
          ))}
        </ul>
        <IconButton text='Read more' />
      </Container>
    </Section>
  );
};
