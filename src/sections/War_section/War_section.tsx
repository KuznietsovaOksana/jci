import ArrowRight from 'public/icons/arrow-right.svg';
import WarCard from '@/components/War_card/War_card';
import { Container } from '@/components/Container/Container';

import { warData } from './data';
import s from './War_section.module.css';

export const WarSection = () => {
  return (
    <section className={s.war_section}>
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
    </section>
  );
};
