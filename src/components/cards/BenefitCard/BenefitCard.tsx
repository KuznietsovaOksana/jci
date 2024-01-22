import React from 'react';

import s from './BenefitCard.module.css';

interface BenefitCardProps {
  icon: any;
  title: string;
  text: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  text,
}) => {

  return (
    <div className={s.card}>
      <div className={s.card_icon}>{icon}</div>

      <div className={s.card_info}>
        <p className={s.card_title}>{title}</p>
        <p className={s.card_text}>{text}</p>
      </div>
    </div>
  );
};
