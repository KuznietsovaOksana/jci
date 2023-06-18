import css from './War_section.module.css';
import Ukraine from '../../../public/icons/ukraine_graphic.svg';
import Network from '../../../public/icons/network_graphic.svg';
import House from '../../../public/icons/housing_graphic.svg';
import Team from '../../../public/icons/teamwork_graphic.svg';
import ArrowRight from '../../../public/icons/arrow-right.svg';
import { FC } from 'react';
import WarCard from '../War_card/War_card';

const warData = [
  {
    icon: <Ukraine />,
    text: 'During the full-scale war in Ukraine, JCI Ukraine took an active role in helping those directly affected by the russian invasion.',
  },
  {
    icon: <Network />,
    text: 'One of the major initiatives was the creation of a network of shelters to provide safe housing for internally displaced persons (IDPs).',
  },
  {
    icon: <House />,
    text: 'JCI Ukraine was able to provide temporary housing and international support for those forced to flee their homes due to the war.',
  },
  {
    icon: <Team />,
    text: 'This effort also brought together the members of JCI Ukraine to work towards a common goal of helping those in need of aid or support.',
  },
];

const WarSection: FC = () => {
  return (
    <section className={css.war_section}>
      <h2 className={css.war_title}>
        <span className={css.war_title__span}>War </span>
        in Ukraine
      </h2>
      <ul className={css.war_list}>
        {warData.map(({ icon, text }, index) => (
          <li key={index}>
            <WarCard icon={icon} text={text} />
          </li>
        ))}
      </ul>
      <button className={css.war_button}>
        Read more
        <ArrowRight className={css.war_icon} />
      </button>
    </section>
  );
};

export default WarSection;
