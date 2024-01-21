import React from 'react';
import InfoIcon from 'public/icons/info.svg';

import s from './JciDevelopmentCard.module.css';

interface JciDevCardProps {
  title: string;
  text: string[];
  style?: string;
}

export const JciDevelopmentCard: React.FC<JciDevCardProps> = ({
  title,
  text,
  style,
}) => {
  const cardStyle =
    (style === 'card1' && s.card1) ||
    (style === 'card2' && s.card2) ||
    (style === 'card3' && s.card3) ||
    (style === 'card4' && s.card4) ||
    null;
  const combinedClass = `${s.card} ${cardStyle}`;
  return (
    <div className={combinedClass}>
      <div className={s.overlay}></div>
      <div className={s.card_info}>
        <p className={s.card_title}>{title}</p>
        <div className={s.card_textblock}>
          {text.map((text, index) => (
            <p className={s.card_text} key={index}>
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className={s.icon_overlay}>
        <InfoIcon className={s.info_icon} />
      </div>
    </div>
  );
};
