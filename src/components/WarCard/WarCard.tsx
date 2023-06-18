import { FC } from 'react';

import s from './WarCard.module.css';

interface IWarPropsCard {
  icon: JSX.Element;
  text: string;
}

export const WarCard: FC<IWarPropsCard> = ({ icon, text }) => {
  return (
    <div className={s.war_card}>
      <div className={s.war_card__icon}>{icon}</div>
      <p className={s.war_card__title}>{text}</p>
    </div>
  );
};
