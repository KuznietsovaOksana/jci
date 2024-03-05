import React from 'react';

import s from './BenefitCard.module.css';

interface BenefitCardProps {
  icon: any;
  title: string;
  text: string;
  isUkrainian: boolean;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  text,
  isUkrainian,
}) => {
  return (
    // <div className={s.card}>
    <div className={`${s.card} ${isUkrainian ? s.cardUa : ''}`}>
      <div className={s.card_icon}>{icon}</div>

      <div className={s.card_info}>
        <p className={s.card_title}>{title}</p>
        <p className={s.card_text}>{text}</p>
      </div>
    </div>
  );
};
