import React from 'react';
import css from './Characteristic_card.module.css';

interface CharacteristicCardProps {
  icon: React.ReactNode;
  text: string;
  iconClassName?: string;
}

const CharacteristicCard: React.FC<CharacteristicCardProps> = ({
  icon,
  text,
}) => {
  const iconWithClass = React.cloneElement(icon as React.ReactElement, {
    className: `${css.characteristic_icon}`,
  });

  return (
    <div className={css.characteristic_card}>
      {iconWithClass}
      <p className={css.characteristic_title}>{text}</p>
    </div>
  );
};

export default CharacteristicCard;
