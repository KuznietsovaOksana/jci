import { FC } from 'react';

import { IWarPropsCard } from './WarCard.props';
import s from './WarCard.module.css';

export const WarCard: FC<IWarPropsCard> = ({ icon, text }) => {
  return (
    <>
      <div className={s.war_card__icon}>{icon}</div>
      <p className={s.war_card__title}>{text}</p>
    </>
  );
};
