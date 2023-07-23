import ArrowRight from 'public/icons/arrow-right.svg';

import { Title } from '@/components/Title';
import { Section } from '@/components/Section';
import { WarCard } from '@/components/WarCard';
import { Container } from '@/components/Container';

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
        <a href='' className={s.war_button}>
          Read more
          <ArrowRight className={s.war_icon} />
        </a>
      </Container>
    </Section>
  );
};
