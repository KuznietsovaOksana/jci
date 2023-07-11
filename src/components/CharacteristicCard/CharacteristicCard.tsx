import React from 'react';

import s from './CharacteristicCard.module.css';

interface CharacteristicCardProps {
  icon: React.ReactNode;
  text: string;
  iconClassName?: string;
}

export const CharacteristicCard: React.FC<CharacteristicCardProps> = ({
  icon,
  text,
}) => {
  const iconWithClass = React.cloneElement(icon as React.ReactElement, {
    className: `${s.characteristic_icon}`,
  });

  return (
    <div className={s.characteristic_card}>
      {iconWithClass}
      <p className={s.characteristic_title}>{text}</p>
    </div>
  );
};
