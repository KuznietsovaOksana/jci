import { FC } from 'react';
import css from './War.card.module.css';

interface IWarPropsCard {
  icon: JSX.Element;
  text: string;
}

const WarCard: FC<IWarPropsCard> = ({ icon, text }) => {
  return (
    <div className={css.war_card}>
      <div className={css.war_card__icon}>{icon}</div>

      <p className={css.war_card__title}>{text}</p>
    </div>
  );
};

export default WarCard;
