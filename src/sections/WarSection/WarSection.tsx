import ArrowRight from 'public/icons/arrow-right.svg';

import { WarCard } from '@/components/WarCard';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';

import { warData } from './data';

import s from './WarSection.module.css';

export const WarSection = () => {
  return (
    <Section>
      <Container>
        <h2 className={s.war_title}>
          <span className={s.war_title__span}>War </span>
          in Ukraine
        </h2>
        <ul className={s.war_list}>
          {warData.map(({ icon, text }, index) => (
            <li key={index}>
              <WarCard icon={icon} text={text} />
            </li>
          ))}
        </ul>
        <button className={s.war_button}>
          Read more
          <ArrowRight className={s.war_icon} />
        </button>
      </Container>
    </Section>
  );
};
